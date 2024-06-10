<?php

declare(strict_types=1);

namespace App\Main\Application\UseCases\Querys\Home;

use App\Shared\Domain\Bus\Query\Query;
use simplehtmldom\HtmlWeb;
class HomeQuery implements Query
{
    public function __construct()
    {
        $client = new HtmlWeb();

        $html = $client->load('https://www.loquosex.com/escorts-lugo/');
//        $html = $client->load('https://www.motolugo.com/87-motos-de-ocasion');

// Buscar elementos por etiqueta
        foreach ($html->find('.caja-anuncio') as $element) {
            $caja_datos = $element->find('.caja-datos');
            $href_data =  $element->href;
            echo $href_data. '<br>';
        }

//// Buscar elementos por clase
//        foreach ($html->find('.class-name') as $element) {
//            echo $element->plaintext . '<br>';
//        }
//
//// Buscar elementos por ID
//        foreach ($html->find('#id') as $element) {
//            echo $element->plaintext . '<br>';
//        }
    }
}
