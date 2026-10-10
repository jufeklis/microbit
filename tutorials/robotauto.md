# Robotauto

### @explicitHints true

## Rijden maar! @showdialog

We programmeren een **robotauto**: de **Kitronik :MOVE mini**. 🚗
Hij heeft twee **servo's** die rondjes draaien, één per wiel.

- Linkerwiel ➜ pin **P1**
- Rechterwiel ➜ pin **P2**

Bij een draaiende servo betekent **90** stilstaan, **0** en **180** zijn volle snelheid (elk een andere richting).

## Stap 1: Stilstaan bij het opstarten

- :pins: Zet in ``||basic:bij opstarten||``: ``||pins:schrijf servo op pin P1 naar waarde 90||`` en hetzelfde voor **P2**.
- :basic: Toon een ``||basic:pictogram||``.

```blocks
pins.servoWritePin(AnalogPin.P1, 90)
pins.servoWritePin(AnalogPin.P2, 90)
basic.showIcon(IconNames.Happy)
```

## Stap 2: Vooruit met A

De wielen staan in spiegelbeeld: voor **vooruit** draait het linkerwiel naar **0** en het rechterwiel naar **180**.

- :input: ``||input:wanneer knop A wordt ingedrukt||``
- :pins: P1 naar **0**, P2 naar **180**, ``||basic:pauzeer 2000 ms||``, en dan allebei terug naar **90**.

```blocks
input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P1, 0)
    pins.servoWritePin(AnalogPin.P2, 180)
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
})
```

## Stap 3: Draaien met B

Laat beide wielen **dezelfde** kant op draaien, dan draait de auto rond.

- :input: ``||input:wanneer knop B wordt ingedrukt||``
- :pins: P1 en P2 allebei naar **0**, ``||basic:pauzeer 500 ms||``, en dan terug naar **90**.

```blocks
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P1, 0)
    pins.servoWritePin(AnalogPin.P2, 0)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
})
```

## Stap 4: Een vierkant rijden

- :input: ``||input:wanneer knop A+B wordt ingedrukt||``
- :loops: ``||loops:4 keer herhalen||``: vooruit en draaien.

Komt de auto terug waar hij begon? Pas de **pauze** van het draaien aan tot hij een mooie bocht maakt.

```blocks
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        pins.servoWritePin(AnalogPin.P1, 0)
        pins.servoWritePin(AnalogPin.P2, 180)
        basic.pause(1500)
        pins.servoWritePin(AnalogPin.P1, 0)
        pins.servoWritePin(AnalogPin.P2, 0)
        basic.pause(500)
    }
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
})
```

## Stap 5: Rijden!

Download het, zet de schakelaar van de auto aan en zet hem op de grond. 

Rijdt hij niet recht, of beweegt hij een beetje bij **90**? Elke servo is anders: probeer **88** of **92** om echt stil te staan.

💡 **Extra uitdaging:** maak een **afstandsbediening** met een tweede micro:bit en de radio!
