<?php

declare(strict_types=1);

namespace App\User\Application\UseCases\Login;

use App\Shared\Domain\Bus\Command\Command;

readonly class LoginCommand implements Command
{
    public function __construct(
        public array $data,
    ) {
    }

    public static function create(array $parameters): self
    {
        return new self(data: $parameters);
    }


}
