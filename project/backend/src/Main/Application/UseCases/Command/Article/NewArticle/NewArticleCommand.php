<?php

declare(strict_types=1);

namespace App\Main\Application\UseCases\Command\Article\NewArticle;

use App\Shared\Domain\Bus\Command\Command;

readonly class NewArticleCommand implements Command
{
    public static function create(array $parameters): self
    {
        return new self(
            data: $parameters,
        );
    }

    public function __construct(
        public array $data,
    ) {
    }
}
