<?php

namespace App\User\Domain\Service;

interface ILoginService
{
    public function send($data): array;
}
