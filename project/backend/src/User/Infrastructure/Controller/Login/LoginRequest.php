<?php

namespace App\User\Infrastructure\Controller\Login;

use App\Main\Infrastructure\Request\StandardRequest;
use Symfony\Component\Validator\Constraints as Assert;

class LoginRequest extends StandardRequest
{
    protected function constraints(): Assert\Collection
    {
        return new Assert\Collection([
            'fields' => [
                'user' => [
                    new Assert\NotBlank(normalizer: 'trim'),
                ],
                'password' => [
                    new Assert\NotBlank(normalizer: 'trim'),
                ],
            ],
        ]);
    }
}
