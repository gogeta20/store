<?php  declare(strict_types=1);

namespace App\Main\Infrastructure\Repository\Article;

use App\Main\Domain\Exception\StoreException;
use App\Main\Domain\Model\TblArticulo;
use App\Main\Domain\Model\TblAutor;
use App\Main\Domain\Model\TblCategoria;
use App\Main\Domain\Model\TblEtiqueta;
use App\Main\Domain\Model\TblImagen;
use App\Main\Domain\Model\TblUsuario;
use App\Main\Domain\Repository\Interfaces\Article\NewArticleInterface;
use App\Main\Domain\Repository\Interfaces\Health\FakerInterface;
use App\Shared\Infrastructure\BaseDoctrine;
use Exception;
use Faker\Factory;
use Ramsey\Uuid\Uuid;

class NewArticleRepository extends BaseDoctrine implements NewArticleInterface
{
    /**
     * @throws StoreException
     */
    public function createData($data, $files,$upload_dir): void
    {
        try {
            $files = $files['files'];

            $movedFiles = $this->saveFiles($data, $files, $upload_dir);
            $this->verifyFiles($movedFiles, $upload_dir);

            $this->createPost($data, $upload_dir, $movedFiles);
        } catch (Exception $exc) {
            throw new StoreException("Error tabla database :" .$exc->getMessage(),$exc->getCode(),$exc);
        }

    }

    /**
     * @throws Exception
     */
    function createPost($data, $upload_dir, $movedFiles): void
    {
        try {
            $tblArticulo = new TblArticulo();
            $uuid = Uuid::uuid4()->toString();
            $author = $this->repository(TblAutor::class)->find(1);
            $img = $this->repository(TblImagen::class)->find(1);

            $tblArticulo->setUuid($uuid);
            $tblArticulo->setTitulo($data['title']);
            $tblArticulo->setFecha(new \DateTime('now'));
            $tblArticulo->setContenido($data['content']);
            $tblArticulo->setImagen($img);
            $tblArticulo->setAutorId($author);
            $this->persist($tblArticulo);
        }catch (Exception $exc){
            $this->removeFile($movedFiles, $upload_dir);
            throw new StoreException("Error al crear Articulo :" .$exc->getMessage(),$exc->getCode(),$exc);
        }
    }

    function saveFiles($data, $files, $upload_dir): array
    {
        $dataImages = json_decode($data['images']);
        $movedFiles = [];
        foreach ($files as $key => $f) {
            $img = new TblImagen();
            $uuid = Uuid::uuid4()->toString();
            $img->setUuid($uuid);
            $img->setTitulo($dataImages[$key]['title']);
            $img->setUrl($f->getClientOriginalName());
            $img->setDescripcion('descripcion');
            $fileName = md5(uniqid()) . '.' . $f->guessExtension();
            if($f->move($upload_dir,$fileName)){
                $this->persist($img);
                $movedFiles[] = $fileName;
            }
        }
        return $movedFiles;
    }

    /**
     * @throws Exception
     */
    function verifyFiles($nameFiles, $upload_dir): void
    {
        foreach ($nameFiles as $file) {
            if (!file_exists($upload_dir . DIRECTORY_SEPARATOR . $file)) {
                throw new Exception(sprintf('El archivo %s no se pudo mover a %s', $file, $upload_dir));
            }
        }
    }

    /**
     * @param array $movedFiles
     * @param $upload_dir
     * @return void
     */
    private function removeFile(array $movedFiles, $upload_dir): void
    {
        foreach ($movedFiles as $file) {
            $filePath = $upload_dir . DIRECTORY_SEPARATOR . $file;
            if (file_exists($filePath)) {
                unlink($filePath);
            }
        }
    }
}
