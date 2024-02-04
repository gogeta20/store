<?php

declare(strict_types=1);

namespace App\Main\Application\Home;

use App\Main\Domain\Repository\Interfaces\BaseSearch;

final readonly class Home
{

    public function __construct(
        private BaseSearch $baseSearch,
    ) {}

    public function __invoke(HomeQuery $query): array
    {
        return $this->baseSearch->search();
    }
}
