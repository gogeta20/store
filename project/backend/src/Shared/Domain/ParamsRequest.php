<?php

namespace App\Shared\Domain;

use App\Shared\Domain\Interfaces\ParamsRequestInterface;
use Symfony\Component\HttpFoundation\Request;

class ParamsRequest implements ParamsRequestInterface
{

    public function requestParameters(Request $request): array
    {
        $method = $request->getMethod();
        $parameters = '';
        $parameters = $this->getParameters($method, $request, $parameters);
        try {
            return json_decode($parameters, true, 512, JSON_THROW_ON_ERROR);
        } catch (\JsonException $e) {
            return [];
        }
    }

    private function getParameters(string $method, Request $request, string $parameters)
    {
        if ('GET' === $method) {
            $parameters = $this->getParametersGet($request, $parameters);
        }
        if ('POST' === $method || 'PUT' === $method || 'DELETE' === $method) {
            $parameters = $this->getParametersPost($request, $parameters);
        }

        return $parameters;
    }

    private function getParametersGet(Request $request, $parameters)
    {
        if ($request->query->has('parameters')) {
            $parameters = $request->query->get('parameters');
        }

        return $parameters;
    }

    private function getParametersPost(Request $request, $parameters)
    {
        if (($request->getContent()) !== '' && ($content = $request->getContent()) !== '0') {
            $parameters = $content;
        }

        return $parameters;
    }

    public function idSession(Request $request): string
    {
        return $request->headers->get('Authorization');
    }

    public function requestParametersBody(Request $request): array|string
    {
        $parameters = '';
        if (($request->getContent()) !== '' && ($content = $request->getContent()) !== '0') {
            $parameters = $content;
        }
        try {
            return json_decode($parameters, true, 512, JSON_THROW_ON_ERROR);
        } catch (\Exception $e) {
            return [];
        }
    }
}
