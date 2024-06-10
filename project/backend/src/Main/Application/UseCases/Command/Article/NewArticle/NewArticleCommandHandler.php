<?php

declare(strict_types=1);

namespace App\Main\Application\UseCases\Command\Article\NewArticle;

use App\Shared\Domain\Bus\Command\CommandHandler;
use App\Shared\Domain\Interfaces\TranslateInterfaceCustom;

final class NewArticleCommandHandler implements CommandHandler
{
    public function __construct(
        private readonly NewArticle $NewArticle,
        protected TranslateInterfaceCustom $translatorCustom
    ) {
    }

    public function __invoke(NewArticleCommand $command): void
    {
        $this->NewArticle->__invoke($command);
    }
}
