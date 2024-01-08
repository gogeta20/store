<?php

declare(strict_types=1);

namespace App\Controller\Health;

use App\Application\Test\Check\AvisosGetAllQuery;
use App\Shared\Domain\BaseResponse;
use App\Shared\Domain\Bus\Query\Response;
use App\Shared\Domain\StandardApiResponse;
use App\Shared\Infrastructure\Symfony\ApiController;
use Exception;
use Symfony\Component\HttpFoundation\JsonResponse;


class CheckController extends ApiController
{
    public function __invoke(): JsonResponse
    {
        /** @var BaseResponse $response */
        $response = $this->ask(
            new AvisosGetAllQuery()
        );

        return (new StandardApiResponse(
            data: $response->data(),
            message: $response->message(),
            code: $response->status()
        ))->__invoke();
    }

    protected function exceptions(): array
    {
        return [
            Exception::class => 500,
        ];
    }
}
