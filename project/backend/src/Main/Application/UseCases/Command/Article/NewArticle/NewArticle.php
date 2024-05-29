<?php

declare(strict_types=1);

namespace App\Main\Application\UseCases\Command\Article\NewArticle;


use App\Main\Domain\Repository\Interfaces\Article\NewArticleInterface;

final readonly class NewArticle
{

    public function __construct(
        private NewArticleInterface $newArticle,
    ) {}

    public function __invoke(NewArticleCommand $command): void
    {
        $this->newArticle->createData($command->data);
    }

}
