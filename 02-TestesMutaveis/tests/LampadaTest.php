<?php

namespace Dojosb;

class LampadaTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @test
     */
    public function lampadaShouldBeInstaciated ()
    {
        $lampada = new Lampada();
        $this->assertInstanceOf(Lampada::class,$lampada);
    }

    /**
     * @test
     */
    public function ligarShouldTurnLampadaOn()
    {
        $lampada = new Lampada();
        $lampada->ligar(false);
        $this->assertAttributeEquals(true, 'ligado', $lampada);
    }
}
