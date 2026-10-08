# Klasstemming

### @explicitHints true

## Stemmen maar! @showdialog

Moeten we vandaag buiten spelen of binnen? We **stemmen** met de micro:bits! 🗳️
- Knop **A** = stem voor A, knop **B** = stem voor B.
- Elke micro:bit mag maar **één keer** stemmen.
- Alle micro:bits **tellen alle stemmen** via de radio. Druk **A+B** om de uitslag te zien.

Alle groepjes maken **hetzelfde programma**.

## Stap 1: Klaarzetten

- :radio: Zet ``||radio:Radio instellen groep||`` in ``||basic:bij opstarten||`` en kies **7**. Alle micro:bits moeten op dezelfde groep zitten.
- :variables: Maak drie variabelen: **stemmenA**, **stemmenB** en **gestemd**, en zet ze op **0**.

```blocks
let stemmenA = 0
let stemmenB = 0
let gestemd = 0
radio.setGroup(7)
stemmenA = 0
stemmenB = 0
gestemd = 0
```

## Stap 2: Stemmen met A

- :input: ``||input:wanneer knop A wordt ingedrukt||``
- :logic: ``||logic:als||`` **gestemd = 0** (je hebt nog niet gestemd):
- :radio: ``||radio:Radio verzend nummer||`` **1**, ``||variables:verander stemmenA met 1||``, zet **gestemd** op **1** en toon een vinkje.

```blocks
let stemmenA = 0
let gestemd = 0
input.onButtonPressed(Button.A, function () {
    if (gestemd == 0) {
        radio.sendNumber(1)
        stemmenA += 1
        gestemd = 1
        basic.showIcon(IconNames.Yes)
    }
})
```

## Stap 3: Stemmen met B

- :input: Doe hetzelfde voor knop **B**, maar stuur **2** en verander **stemmenB**.

```blocks
let stemmenB = 0
let gestemd = 0
input.onButtonPressed(Button.B, function () {
    if (gestemd == 0) {
        radio.sendNumber(2)
        stemmenB += 1
        gestemd = 1
        basic.showIcon(IconNames.Yes)
    }
})
```

## Stap 4: De stemmen van de anderen tellen

- :radio: ``||radio:wanneer de radio ontvangt receivedNumber||``
- :logic: Is **receivedNumber = 1**? Dan ``||variables:verander stemmenA met 1||``. Is het **2**? Dan ``||variables:verander stemmenB met 1||``.

```blocks
let stemmenA = 0
let stemmenB = 0
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        stemmenA += 1
    } else if (receivedNumber == 2) {
        stemmenB += 1
    }
})
```

## Stap 5: De uitslag!

- :input: ``||input:wanneer knop A+B wordt ingedrukt||``
- :basic: Toon de letter **A**, het aantal **stemmenA**, de letter **B** en het aantal **stemmenB**.

```blocks
let stemmenA = 0
let stemmenB = 0
input.onButtonPressed(Button.AB, function () {
    basic.showString("A")
    basic.showNumber(stemmenA)
    basic.showString("B")
    basic.showNumber(stemmenB)
})
```

## Stap 6: Een nieuwe stemming

- :input: ``||input:bij schudden||``: zet **stemmenA**, **stemmenB** en **gestemd** terug op **0** en ``||basic:Wis scherm||``.

```blocks
let stemmenA = 0
let stemmenB = 0
let gestemd = 0
input.onGesture(Gesture.Shake, function () {
    stemmenA = 0
    stemmenB = 0
    gestemd = 0
    basic.clearScreen()
})
```

## Stap 7: Stemmen!

Zet het programma op alle micro:bits. De juf stelt een vraag op het bord, met antwoord **A** of **B**. Iedereen stemt... en dan **A+B** voor de uitslag!

💡 Wil je een nieuwe stemming? Iedereen schudt eerst zijn micro:bit.
