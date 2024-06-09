<?php

declare(strict_types=1);

namespace App\Main\Application\UseCases\Command\Article\NewArticle;

use App\Shared\Domain\Bus\Command\Command;

readonly class NewArticleCommand implements Command
{
    public function __construct(
        public array $data,
        public array $files,
        public string $upload_dir
    ) {
    }

    public static function create(array $parameters, array $files, string $upload_dir): self
    {
        return new self(data: $parameters,files: $files, upload_dir: $upload_dir);
    }


}
