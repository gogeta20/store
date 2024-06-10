<?php

namespace App\Main\Domain\Repository\Interfaces\Article;
interface NewArticleInterface
{
    public function createData($data, $files, $upload_dir): void;
}
