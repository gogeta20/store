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
use Faker\Factory;
use Ramsey\Uuid\Uuid;

class NewArticleRepository extends BaseDoctrine implements NewArticleInterface
{
    /**
     * @throws StoreException
     */
    public function createData($data): array
    {
        try {
            $this->createPost($data);
            return ["creado correctamente"];
        } catch (\Exception $exc) {
            throw new StoreException("Error tabla database :" .$exc->getMessage(),$exc->getCode(),$exc);
        }

    }
    function createPost($data): void
    {
        $author = $this->repository(TblAutor::class)->find(1);
        $img = $this->repository(TblImagen::class)->find(1);
        $tblArticulo = new TblArticulo();
        $tblArticulo->setUuid(Uuid::uuid4()->toString());
        $tblArticulo->setTitulo($data['title']); // Changed from firstName to sentence
        $tblArticulo->setFecha(new \DateTime('now')); // Changed from firstName to sentence
        $tblArticulo->setContenido($data['content']); // Changed from firstName to sentence
        $tblArticulo->setImagen($img); // Changed from firstName to sentence
        $tblArticulo->setAutorId($author); // Changed from firstName to sentence
        $this->persist($tblArticulo);
    }
}
