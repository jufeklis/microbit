# Plantenbewaker

### @explicitHints true

## Heeft de plant dorst? @showdialog

We maken een **vochtmeter** voor de klasplant! 🌱
Natte aarde geleidt stroom beter dan droge aarde. Dat meten we met twee **spijkers** in de pot.

Je hebt nodig: 2 grote spijkers (of metalen staafjes) en 2 krokodillenklemmen.

## Aansluiten @showdialog

- Steek de 2 spijkers een paar centimeter uit elkaar in de aarde.
- Spijker 1 ➜ krokodillenklem ➜ pin **0**
- Spijker 2 ➜ krokodillenklem ➜ **3V**

## Stap 1: Vocht meten

- :variables: Maak een variabele **vocht**.
- :basic: Neem een ``||basic:de hele tijd||`` blok.
- :pins: ``||variables:stel vocht in op||`` ``||pins:lees analoogpin P0||``. Dat geeft een getal van **0** (kurkdroog) tot **1023** (kletsnat).

```blocks
let vocht = 0
basic.forever(function () {
    vocht = pins.analogReadPin(AnalogPin.P0)
})
```

## Stap 2: Een staafdiagram

- :led: Zet er ``||led:plot staafdiagram van vocht tot 1023||`` onder. Hoe natter, hoe meer lampjes!
- :basic: ``||basic:pauzeer 1000 ms||``: één meting per seconde is genoeg.

```blocks
let vocht = 0
basic.forever(function () {
    vocht = pins.analogReadPin(AnalogPin.P0)
    led.plotBarGraph(vocht, 1023)
    basic.pause(1000)
})
```

## Stap 3: Dorst!

- :logic: Zet ertussen een ``||logic:als dan anders||``: is **vocht < 300**?
- :basic: Dan toon je het **verdrietige gezichtje**: water geven!
- :led: Anders toon je het staafdiagram.

```blocks
let vocht = 0
basic.forever(function () {
    vocht = pins.analogReadPin(AnalogPin.P0)
    if (vocht < 300) {
        basic.showIcon(IconNames.Sad)
    } else {
        led.plotBarGraph(vocht, 1023)
    }
    basic.pause(1000)
})
```

## Stap 4: Het getal bekijken

- :input: ``||input:wanneer knop A wordt ingedrukt||``: ``||basic:toon nummer||`` **vocht**.

```blocks
let vocht = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(vocht)
})
```

## Stap 5: Onderzoeken!

Test in de simulator: schuif de **pin P0** omhoog en omlaag.

Meet daarna in **droge** aarde en in **natte** aarde. Welke getallen krijg je? Pas **300** aan zodat de micro:bit pas verdrietig kijkt als de plant echt water nodig heeft.

💡 Haal de spijkers na het meten uit de pot, anders gaan ze roesten.
