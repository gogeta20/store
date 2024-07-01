<?php

declare(strict_types=1);

namespace App\User\Application\UseCases\Login;

use App\Shared\Domain\Bus\Command\CommandHandler;
use App\Shared\Domain\Interfaces\TranslateInterfaceCustom;

final class LoginCommandHandler implements CommandHandler
{
    public function __construct(
        private readonly Login             $case,
        protected TranslateInterfaceCustom $translatorCustom
    ) {
    }

    public function __invoke(LoginCommand $command): void
    {
        $this->case->__invoke($command);
    }
}
