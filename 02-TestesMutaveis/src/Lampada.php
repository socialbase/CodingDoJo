<?php

namespace Dojosb;

class Lampada
{
    /**
     * @var bool
     */
    private $ligado = false;

    /**
     * Turn lampada on
     */
    public function ligar($bool)
    {
        $this->ligado += $bool;
    }

}