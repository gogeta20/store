<?php
declare(strict_types=1);
namespace App\Main\Application\Controller\Article;

use App\Main\Application\UseCases\Command\Article\NewArticle\NewArticleCommand;
use App\Main\Domain\Exception\StoreException;
use App\Main\Infrastructure\Response\JsonApiResponse;
use App\Shared\Application\AppConstants;
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
            $this->dispatch(NewArticleCommand::create(
                    $request->data(),
                    $request->files(),
                    $this->configurationParams->get('upload_dir')
                )
            );
        }catch (\Exception $exception){
            throw new StoreException($exception->getMessage());
        }

        return JsonApiResponse::created($this->translator->translate(AppConstants::SUCCESS,[], 'basic'));
    }

    protected function exceptions(): array
    {
        return [
            StoreException::class => 500,
            Exception::class => 503,
        ];
    }
}
