<?php

declare(strict_types=1);

namespace App\Main\Application\Test\Check;

use App\Shared\Domain\Interfaces\TranslateInterfaceCustom;

final class AvisosGetAll
{

    public function __construct(
        protected TranslateInterfaceCustom $translatorCustom,
    )
    {
    }

    public function __invoke(AvisosGetAllQuery $query): array
    {
        return ["name"=>'check'];
    }
}
