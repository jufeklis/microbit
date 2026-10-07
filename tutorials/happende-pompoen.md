# De Happende Pompoen

### @explicitHints true

## Welkom! @showdialog

We bouwen een **pompoen met een bewegende kaak**! 🎃
Maak je lawaai, dan hapt de pompoen met zijn mond open en dicht.

Je hebt nodig:
- een micro:bit **V2** (met microfoon)
- een **servo** (SG90)
- 3 **krokodillenklemmen**
- een pompoen van karton of papier, en plakband

## Aansluiten @showdialog

Een servo is een klein motortje dat naar een **hoek** kan draaien. Hij heeft 3 draadjes:

- **bruin** ➜ **GND**
- **rood** ➜ **3V**
- **oranje** ➜ **0**

Gebruik de krokodillenklemmen. Let op: de klemmetjes mogen elkaar niet raken!

## Stap 1: Mond dicht bij het opstarten

- :pins: Zet ``||pins:schrijf servo op pin P0 naar waarde||`` in ``||basic:bij opstarten||`` en kies **0**. Zo staat de mond dicht.
- :basic: Teken met ``||basic:toon lichtjes||`` een pompoengezicht met een **gesloten mond**.

```blocks
pins.servoWritePin(AnalogPin.P0, 0)
basic.showLeds(`
    . # . # .
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    `)
```

## Stap 2: Een functie "hap"

Een **functie** is een stukje code met een naam. Je bouwt het één keer en kan het dan zo vaak gebruiken als je wilt.

- :functions: Open ``||functions:Functies||`` (onder **Geavanceerd**) en klik op **Maak een functie**. Noem hem **hap**.
- :pins: Zet erin: ``||pins:schrijf servo op pin P0 naar waarde||`` **60** (mond open), ``||basic:pauzeer 300 ms||``, en dan weer **0** (mond dicht).

```blocks
function hap () {
    pins.servoWritePin(AnalogPin.P0, 60)
    basic.pause(300)
    pins.servoWritePin(AnalogPin.P0, 0)
}
```

## Stap 3: Testen met knop A

- :input: Sleep ``||input:wanneer knop A wordt ingedrukt||`` naar je werkveld.
- :functions: Zet er ``||functions:aanroep hap||`` in.

Download en druk op A. Gaat de servo heen en weer? Gaat de mond niet ver genoeg open, probeer dan **90** in plaats van 60.

```blocks
function hap () {
    pins.servoWritePin(AnalogPin.P0, 60)
    basic.pause(300)
    pins.servoWritePin(AnalogPin.P0, 0)
}
input.onButtonPressed(Button.A, function () {
    hap()
})
```

## Stap 4: Het gezicht hapt mee

Ook de lampjes kunnen de mond tonen!

- :basic: Zet in **hap**, bovenaan, ``||basic:toon lichtjes||`` met een **open mond**.
- :basic: Zet onderaan nog eens ``||basic:toon lichtjes||`` met de **gesloten mond**.

```blocks
function hap () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # # # # #
        # . . . #
        # # # # #
        `)
    pins.servoWritePin(AnalogPin.P0, 60)
    basic.pause(300)
    pins.servoWritePin(AnalogPin.P0, 0)
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        `)
}
```

## Stap 5: Happen bij lawaai

- :input: Sleep ``||input:bij luid geluid||`` naar je werkveld.
- :functions: Zet er ``||functions:aanroep hap||`` in.
- :input: Zet in ``||basic:bij opstarten||`` ook ``||input:drempelwaarde van geluid luid instellen op||`` **150**. Hoe hoger het getal, hoe luider je moet roepen.

```blocks
function hap () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # # # # #
        # . . . #
        # # # # #
        `)
    pins.servoWritePin(AnalogPin.P0, 60)
    basic.pause(300)
    pins.servoWritePin(AnalogPin.P0, 0)
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        `)
}
input.onSound(DetectedSound.Loud, function () {
    hap()
})
input.setSoundThreshold(SoundThreshold.Loud, 150)
pins.servoWritePin(AnalogPin.P0, 0)
```

## Stap 6: De pompoen knutselen

Test eerst in de simulator: schuif de **geluidsbalk** omhoog. Hapt de pompoen?

Knip een pompoen uit karton en snij de mond los als een **klepje**. Plak het armpje van de servo vast aan het klepje.

Download de code, klap in je handen... en HAP! 🎃

💡 **Extra uitdaging:** laat de pompoen ook grommen met een ``||music:toon||``. Let op: de microfoon hoort de speaker ook. Hapt hij daardoor de hele tijd? Zet de drempel dan hoger.
