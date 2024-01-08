<?php

declare(strict_types=1);

namespace App\Shared\Domain;

use Error;
use Exception;
use Throwable;

use function method_exists;
use function preg_replace;

class AppException extends Exception
{
    public function __construct(
        string               $message = '',
        int                  $code = 0,
        Exception|Error|bool $exception = false
    ) {
        if ($exception) {
            if (method_exists($exception, 'getMessage')) {
                $message = sprintf('%s', $exception->getMessage());
            }
            if ($code > 0 && method_exists($exception, 'getCode')) {
                $code = $exception->getCode();
            }
            if (method_exists($exception, 'getPrevious')) {
                $previous = $exception->getPrevious();
            }
        }
        if ($message !== '') {
            $message = preg_replace('/(Exception:\s)+/', '', sprintf('%s', $message));
        }
//        throw $exception($message, $code, ($exception instanceof Exception) ? $exception : null);
        parent::__construct($message, $code, ($exception instanceof Exception) ? $exception : null);
    }
}
