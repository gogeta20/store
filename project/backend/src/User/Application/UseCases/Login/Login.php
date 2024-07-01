<?php

declare(strict_types=1);

namespace App\User\Application\UseCases\Login;

use App\User\Domain\Service\ILoginService;

final readonly class Login
{
    public function __construct(
        private ILoginService $service,
    ) {}

    public function __invoke(LoginCommand $command): void
    {
        $this->service->send($command->data);
    }
}
