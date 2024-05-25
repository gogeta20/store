<?php

declare(strict_types=1);

namespace App\Main\Application\Controller\Article;
use App\Main\Infrastructure\Request\StandardRequest;
use Symfony\Component\Validator\Constraints as Assert;
class NewArticleRequest extends StandardRequest
{
    protected function constraints(): Assert\Collection
    {
        return new Assert\Collection([
            'fields' => [
                'title' => [
                        new Assert\NotBlank(normalizer: 'trim'),
                ],
                'content' => [
                    new Assert\NotBlank(normalizer: 'trim'),
                ],
                'tags' => [
                    new Assert\NotBlank(normalizer: 'trim'),
                ],
                'date' => [
                    new Assert\NotBlank(normalizer: 'trim'),
                ],
                'images' => [
                    new Assert\NotBlank(normalizer: 'trim'),
                ],
                'author' => [
                    new Assert\NotBlank(normalizer: 'trim'),
                ],
            ],
        ]);
    }
}
