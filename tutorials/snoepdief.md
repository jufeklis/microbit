# Het Snoepdief-Alarm

### @explicitHints true

## Welkom! @showdialog

Iemand pikt je Halloween-snoep? 🍬 Niet meer!
We bouwen een **alarm** dat afgaat als iemand de snoepdoos **opent** (er valt licht op de micro:bit) of **verschuift**. 🚨

Knop **A** zet het alarm aan. Knoppen **A+B** samen zetten het uit.

## Stap 1: Twee variabelen

- :variables: Maak in ``||variables:Variabelen||`` twee variabelen: **bewaking** en **alarm**.
- :variables: Zet in ``||basic:bij opstarten||`` beide op **0**.
- :input: Zet er ``||input:lichtniveau||`` in een ``||basic:toon nummer||``, zodat de lichtsensor opstart.

```blocks
let bewaking = 0
let alarm = 0
basic.showNumber(input.lightLevel())
```

## Stap 2: Bewaking aanzetten met A

Je krijgt 3 seconden om de deksel te sluiten.

- :input: Sleep ``||input:wanneer knop A wordt ingedrukt||`` naar je werkveld.
- :basic: Toon de getallen **3**, **2**, **1** en ``||basic:wis scherm||``. Brandende lampjes zouden de lichtsensor storen!
- :variables: Zet daarna **bewaking** op **1**.

```blocks
let bewaking = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.clearScreen()
    bewaking = 1
})
```

## Stap 3: De lichtval

- :basic: Neem een ``||basic:de hele tijd||`` blok.
- :logic: Zet er een ``||logic:als dan||`` in met ``||logic:en||``: **bewaking = 1** en ``||input:lichtniveau||`` **> 50**.
- :variables: Zet dan **alarm** op **1**.

```blocks
let bewaking = 0
let alarm = 0
basic.forever(function () {
    if (bewaking == 1 && input.lightLevel() > 50) {
        alarm = 1
    }
})
```

## Stap 4: Ook alarm bij schudden

- :input: Sleep ``||input:bij schudden||`` naar je werkveld.
- :logic: Als **bewaking = 1**, zet je **alarm** op **1**.

```blocks
let bewaking = 0
let alarm = 0
input.onGesture(Gesture.Shake, function () {
    if (bewaking == 1) {
        alarm = 1
    }
})
```

## Stap 5: De sirene!

- :logic: Zet in ``||basic:de hele tijd||`` een tweede ``||logic:als dan||``: **alarm = 1**.
- :basic: Toon het ``||basic:pictogram||`` doodshoofd.
- :music: Speel een hoge en een lage ``||music:toon||`` na elkaar: tatuu-tatuu!

```blocks
let bewaking = 0
let alarm = 0
basic.forever(function () {
    if (bewaking == 1 && input.lightLevel() > 50) {
        alarm = 1
    }
    if (alarm == 1) {
        basic.showIcon(IconNames.Skull)
        music.playTone(988, music.beat(BeatFraction.Quarter))
        music.playTone(659, music.beat(BeatFraction.Quarter))
    }
})
```

## Stap 6: Uitzetten met de geheime code A+B

- :input: Sleep ``||input:wanneer knop A+B wordt ingedrukt||`` naar je werkveld.
- :variables: Zet **bewaking** én **alarm** op **0**. Doe je dat alleen met **alarm**, dan gaat hij meteen weer af!
- :basic: Toon een ``||basic:pictogram||``, bijvoorbeeld het vinkje.

```blocks
let bewaking = 0
let alarm = 0
input.onButtonPressed(Button.AB, function () {
    bewaking = 0
    alarm = 0
    basic.showIcon(IconNames.Yes)
})
```

## Stap 7: Testen!

Druk in de simulator op **A** en wacht tot het scherm leeg is. Schuif dan de **lichtbalk** omhoog of klik op **SHAKE**. Gaat de sirene af? Druk op **A+B** om te stoppen.

Werkt het? Klik op **Downloaden**, leg de micro:bit in een donkere snoepdoos en wacht op de dief! 🍭
