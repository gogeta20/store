<?php

declare(strict_types=1);

namespace App\Main\Application\Home;

use App\Shared\Domain\Interfaces\TranslateInterfaceCustom;

final class Home
{

    public function __construct(
        protected TranslateInterfaceCustom $translatorCustom,
    )
    {
    }

    public function __invoke(HomeQuery $query): array
    {
        return ["name"=>'home'];
    }
}
