<?php  declare(strict_types=1);

namespace App\Main\Infrastructure\Repository\Article;

use App\Main\Domain\Exception\StoreException;
use App\Main\Domain\Model\TblArticulo;
use App\Main\Domain\Model\TblArticuloImagen;
use App\Main\Domain\Model\TblAutor;
use App\Main\Domain\Model\TblImagen;
use App\Main\Domain\Repository\Interfaces\Article\NewArticleInterface;
use App\Shared\Infrastructure\BaseDoctrine;
use Exception;
use Ramsey\Uuid\Uuid;

class NewArticleRepository extends BaseDoctrine implements NewArticleInterface
{
    /**
     * @throws StoreException
     */
    public function createData($data, $files, $upload_dir): void
    {
        $files = $files['files'];
        try {
            $articleNew = $this->createPost($data, $upload_dir);
            $movedFiles = $this->saveFiles($data, $files, $upload_dir, $articleNew);
            $this->verifyFiles($movedFiles, $upload_dir);
            $this->flushOnly();
        } catch (Exception $exc) {
            $this->removeFiles($movedFiles, $upload_dir);
            throw new StoreException("Error tabla database :" .$exc->getMessage(), $exc->getCode(), $exc);
        }
    }

    /**
     * @throws Exception
     */
    function createPost($data, $upload_dir): TblArticulo
    {
        $tblArticulo = new TblArticulo();
        $author = $this->repository(TblAutor::class)->find(1);

        $tblArticulo->setUuid(Uuid::uuid4()->toString());
        $tblArticulo->setTitulo($data['title']);
        $tblArticulo->setFecha(new \DateTime('now'));
        $tblArticulo->setContenido($data['content']);
        $tblArticulo->setAutorId($author);
        $this->persistOnly($tblArticulo);

        return $tblArticulo;
    }

    function saveFiles($data, $files, $upload_dir, $article): array
    {
        $dataImages = json_decode($data['images']);
        $movedFiles = [];

        foreach ($files as $key => $f) {
            $fileName = md5(uniqid()) . '.' . $f->guessExtension();
            $f->move($upload_dir, $fileName);

            $img = new TblImagen();
            $img->setUuid(Uuid::uuid4()->toString());
            $img->setTitulo($dataImages[$key]->name);
            $img->setUrl($fileName);
            $img->setDescripcion('descripcion');
            $this->persistOnly($img);

            $movedFiles[] = $img;

            $artImg = new TblArticuloImagen();
            $artImg->setIds($article, $img);
            $this->persistOnly($artImg);
        }

        return $movedFiles;
    }

    /**
     * @throws Exception
     */
    function verifyFiles(array $nameFiles, $upload_dir): void
    {
        foreach ($nameFiles as $key => $obj) {
            if (!file_exists($upload_dir . DIRECTORY_SEPARATOR . $obj->getUrl())) {
                throw new Exception(sprintf('El archivo %s no se pudo mover a %s', $obj->getUrl(), $upload_dir));
            }
        }
    }

    private function removeFiles(array $movedFiles, $upload_dir): void
    {
        foreach ($movedFiles as $file) {
            if ($file instanceof TblImagen) {
                $filePath = $upload_dir . DIRECTORY_SEPARATOR . $file->getUrl();
                if (file_exists($filePath)) {
                    unlink($filePath);
                }
            }
        }
    }
}
