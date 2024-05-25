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
    public function createData($data): void
    {
        try {
            $this->createPost($data);
        } catch (\Exception $exc) {
            throw new StoreException("Error tabla database :" .$exc->getMessage(),$exc->getCode(),$exc);
        }

    }
    function createPost($data): void
    {
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
    }
}
