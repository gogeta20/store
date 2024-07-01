<?php  declare(strict_types=1);

namespace App\User\Infrastructure\Service;

use App\Main\Domain\Exception\StoreException;
use App\Shared\Infrastructure\BaseDoctrine;
use App\User\Domain\Model\TblUsuario;
use App\User\Domain\Service\ILoginService;
use Exception;

class LoginService extends BaseDoctrine implements ILoginService
{
    /**
     * @throws StoreException
     */
    public function send($data): array
    {
        try {
            $user = $this->repository(TblUsuario::class)->findBy(['name' => $data['name'], 'password' => $data['password']]);
            return ['user' => $user];
        }catch (Exception $exc){
            throw new StoreException("Error tabla database :" .$exc->getMessage(), $exc->getCode(), $exc);
        }
    }
}

