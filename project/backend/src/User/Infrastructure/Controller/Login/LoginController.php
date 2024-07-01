<?php

declare(strict_types=1);

namespace App\User\Infrastructure\Controller\Login;

use App\Main\Domain\Exception\StoreException;
use App\Main\Infrastructure\Response\JsonApiResponse;
use App\Shared\Application\AppConstants;
use App\Shared\Infrastructure\Symfony\ApiController;
use App\User\Application\UseCases\Login\LoginCommand;
use Exception;
use Symfony\Component\HttpFoundation\JsonResponse;


class LoginController extends ApiController
{

    /**
     * @throws StoreException
     */
    public function __invoke(LoginRequest $request): JsonResponse
    {
        $errors = $request->validate();

        if (null !== $errors) {
            return JsonApiResponse::error(errors: $errors);
        }

        try {
            $this->dispatch(
                LoginCommand::create($request->data())
            );
        }catch (\Exception $exception){
            throw new StoreException($exception->getMessage());
        }

        return JsonApiResponse::created($this->translator->translate(AppConstants::SUCCESS,[], 'basic'));
    }

    protected function exceptions(): array
    {
        return [
            Exception::class => 500,
        ];
    }
}
