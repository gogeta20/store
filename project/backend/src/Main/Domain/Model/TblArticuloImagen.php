<?php

namespace App\Main\Domain\Model;

class TblArticuloImagen
{
    private ?int $id = null;
    private TblArticulo|null $articulo_id = null;
    private TblImagen|null $imagen_id = null;


    public function setIds(TblArticulo $id_articulo, TblImagen $id_imagen): void
    {
        $this->articulo_id = $id_articulo;
        $this->imagen_id = $id_imagen;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdArticulo() :?TblArticulo
    {
        return $this->articulo_id;
    }

    public function getIdImagen(): ?TblImagen
    {
        return $this->imagen_id;
    }
}
