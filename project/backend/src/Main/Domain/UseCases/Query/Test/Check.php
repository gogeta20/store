<?php

declare(strict_types=1);

namespace App\Main\Domain\UseCases\Query\Test;

use App\Main\Application\UseCases\Querys\Test\Check\CheckQuery;
use App\Shared\Domain\Interfaces\TranslateInterfaceCustom;

final class Check
{

    public function __construct(
        protected TranslateInterfaceCustom $translatorCustom,
    )
    {
    }

    public function __invoke(CheckQuery $query): array
    {
        return ["name"=>'check'];
    }
}
