# Springteller voor de turnles

### @explicitHints true

## Hoeveel keer spring jij in 30 seconden? @showdialog

We maken een **springteller**! 🤸
Hou de micro:bit in je hand (of maak hem vast met een elastiekje), druk op **A** en spring zo vaak je kan in **30 seconden**.
De micro:bit voelt elke sprong met zijn **bewegingssensor**.

## Stap 1: Variabelen

- :variables: Maak drie variabelen: **sprongen**, **bezig** en **record**.
- :basic: Toon een ``||basic:pictogram||`` om te tonen dat hij klaar is.

```blocks
let sprongen = 0
let bezig = 0
let record = 0
sprongen = 0
basic.showIcon(IconNames.Yes)
```

## Stap 2: Een sprong voelen

Bij een sprong schokt de micro:bit flink. De **kracht** van de beweging wordt dan groot.

- :basic: Neem een ``||basic:de hele tijd||`` blok.
- :logic: ``||logic:als||`` **bezig = 1** ``||logic:en||`` ``||input:versnelling (mg) kracht||`` **> 2000**:
- :variables: ``||variables:verander sprongen met 1||``, ``||led:wissel x 2 y 2||`` en ``||basic:pauzeer 300 ms||`` (zodat één sprong niet dubbel telt).

```blocks
let sprongen = 0
let bezig = 0
basic.forever(function () {
    if (bezig == 1 && input.acceleration(Dimension.Strength) > 2000) {
        sprongen += 1
        led.toggle(2, 2)
        basic.pause(300)
    }
})
```

## Stap 3: Start met A

- :input: ``||input:wanneer knop A wordt ingedrukt||``
- :variables: Zet **sprongen** op **0**.
- :basic: Tel af: toon **3**, **2**, **1** en ``||basic:Wis scherm||``.
- :variables: Zet **bezig** op **1** en wacht 30 seconden: ``||loops:30 keer herhalen||`` met ``||basic:pauzeer 1000 ms||``.
- :variables: Zet **bezig** daarna op **0** en toon het aantal **sprongen**.

```blocks
let sprongen = 0
let bezig = 0
input.onButtonPressed(Button.A, function () {
    sprongen = 0
    basic.showNumber(3)
    basic.pause(1000)
    basic.showNumber(2)
    basic.pause(1000)
    basic.showNumber(1)
    basic.pause(1000)
    basic.clearScreen()
    bezig = 1
    for (let index = 0; index < 30; index++) {
        basic.pause(1000)
    }
    bezig = 0
    basic.showNumber(sprongen)
})
```

## Stap 4: Een nieuw record?

- :logic: Zet onderaan in knop A: ``||logic:als||`` **sprongen > record**:
- :variables: Zet **record** op **sprongen** en toon een **hartje**: nieuw record!

```blocks
let sprongen = 0
let bezig = 0
let record = 0
input.onButtonPressed(Button.A, function () {
    sprongen = 0
    basic.showNumber(3)
    basic.pause(1000)
    basic.showNumber(2)
    basic.pause(1000)
    basic.showNumber(1)
    basic.pause(1000)
    basic.clearScreen()
    bezig = 1
    for (let index = 0; index < 30; index++) {
        basic.pause(1000)
    }
    bezig = 0
    basic.showNumber(sprongen)
    if (sprongen > record) {
        record = sprongen
        basic.showIcon(IconNames.Heart)
    }
})
```

## Stap 5: Het record bekijken

- :input: ``||input:wanneer knop B wordt ingedrukt||``: toon het **record**.

```blocks
let record = 0
input.onButtonPressed(Button.B, function () {
    basic.showNumber(record)
})
```

## Stap 6: Springen!

Test in de simulator met **SHAKE**. Download het daarna en spring!

Telt hij te veel of te weinig? Verander **2000**: hoger = alleen harde sprongen tellen, lager = ook kleine sprongetjes.

💡 Wie haalt het hoogste record van de klas? 🏆
