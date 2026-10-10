# Verkeerslicht

### @explicitHints true

## Bouw een echt verkeerslicht! @showdialog

We laten drie **echte LEDs** branden: 🔴 rood, 🟠 oranje en 🟢 groen.

Je hebt nodig (bijvoorbeeld uit de **Kitronik Inventor's Kit**):
- 3 LEDs (rood, oranje/geel, groen) en 3 weerstanden
- een breadboard met edge connector, of krokodillenklemmen

## Aansluiten @showdialog

- **Rode** LED ➜ pin **0**
- **Oranje** LED ➜ pin **1**
- **Groene** LED ➜ pin **2**

Het **lange** pootje van de LED gaat naar de pin, het korte via een **weerstand** naar **GND**. Volg de handleiding van je kit.

## Stap 1: Groen licht

- :basic: Neem een ``||basic:de hele tijd||`` blok.
- :pins: ``||pins:schrijf digitaal pin P2 naar 1||``: groen aan!
- :basic: ``||basic:pauzeer 3000 ms||`` en dan ``||pins:schrijf digitaal pin P2 naar 0||``: groen uit.

```blocks
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(3000)
    pins.digitalWritePin(DigitalPin.P2, 0)
})
```

## Stap 2: Oranje en rood

- :pins: Voeg toe: **oranje** (P1) aan, ``||basic:pauzeer 1000 ms||``, oranje uit.
- :pins: Dan **rood** (P0) aan, ``||basic:pauzeer 3000 ms||``, rood uit.

```blocks
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(3000)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(3000)
    pins.digitalWritePin(DigitalPin.P0, 0)
})
```

## Stap 3: Ook op het scherm

- :basic: Laat het scherm meedoen: toon een **pijl naar boven** bij groen en een **kruisje** bij rood.

```blocks
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.showArrow(ArrowNames.North)
    basic.pause(3000)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.showIcon(IconNames.No)
    basic.pause(3000)
    pins.digitalWritePin(DigitalPin.P0, 0)
})
```

## Stap 4: Testen!

In de simulator zie je de pinnen **0**, **1** en **2** oplichten. Download het en kijk of je LEDs in de juiste volgorde branden.

Brandt een LED niet? Draai hem om: het lange pootje moet naar de pin.

💡 **Extra uitdaging:** maak een **voetgangerslicht**: druk op A en het licht springt sneller op rood.
