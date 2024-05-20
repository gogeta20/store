<?php
declare(strict_types=1);
namespace App\Main\Application\Controller\Article;

use App\Main\Application\UseCases\Command\Article\NewArticle\NewArticleCommand;
use App\Main\Domain\Exception\StoreException;
use App\Main\Infrastructure\Response\JsonApiResponse;
use App\Shared\Domain\StandardApiResponse;
use App\Shared\Infrastructure\Symfony\ApiController;
use Exception;
use Symfony\Component\HttpFoundation\JsonResponse;

class NewArticleController extends ApiController
{
    /**
     * @throws StoreException
     */
    public function __invoke(NewArticleRequest $request): JsonResponse
    {
        $errors = $request->validate();

        if (null !== $errors) {
            return JsonApiResponse::error(errors: $errors);
        }
        try {
            $this->dispatch(
                new NewArticleCommand($request->data())
            );
        }catch (\Exception $exception){
            throw new StoreException($exception->getMessage());
        }

        return (new StandardApiResponse(
            data: ['post created'],
            message: 'success',
            code: 200
        ))->__invoke();
    }

    protected function exceptions(): array
    {
        return [
            StoreException::class => 500,
            Exception::class => 503,
        ];
    }
}
