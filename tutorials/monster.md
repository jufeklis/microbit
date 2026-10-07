# Het Slapende Monster

### @explicitHints true

## Welkom! @showdialog

In het spookhuis slaapt een monster. 🧟 Jij sluipt in **30 seconden** naar de overkant... zonder een kik te geven!
Maak je lawaai, dan wordt het monster wakker en verlies je een leven. Je hebt er **3**.

⚠️ Je hebt een **micro:bit V2** nodig (met microfoon en speaker).

## Stap 1: Variabelen klaarzetten

- :variables: Maak drie variabelen: **levens**, **bezig** en **wakker**.
- :variables: Zet in ``||basic:bij opstarten||``: **levens** op **3**, **bezig** op **0** en **wakker** op **0**.
- :basic: Toon het ``||basic:pictogram||`` van een slapend gezicht.

```blocks
let levens = 3
let bezig = 0
let wakker = 0
basic.showIcon(IconNames.Asleep)
```

## Stap 2: Het monster minder gevoelig maken

Een klas is nooit helemaal stil. We zetten de microfoon minder gevoelig.

- :input: Zet ``||input:drempelwaarde van geluid luid instellen op||`` in ``||basic:bij opstarten||`` en kies **200**.

```blocks
let levens = 3
let bezig = 0
let wakker = 0
basic.showIcon(IconNames.Asleep)
input.setSoundThreshold(SoundThreshold.Loud, 200)
```

## Stap 3: Het spel starten met A

- :input: Sleep ``||input:wanneer knop A wordt ingedrukt||`` naar je werkveld.
- :variables: Zet **levens** op **3** en **bezig** op **1**.
- :basic: Toon het slapende ``||basic:pictogram||``.

```blocks
let levens = 0
let bezig = 0
input.onButtonPressed(Button.A, function () {
    levens = 3
    bezig = 1
    basic.showIcon(IconNames.Asleep)
})
```

## Stap 4: 30 seconden aftellen

- :loops: Zet een ``||loops:30 keer herhalen||`` onder in knop A.
- :basic: Zet er ``||basic:pauzeer 1000 ms||`` in. Dat is 1 seconde, dus 30 keer = 30 seconden!

```blocks
let levens = 0
let bezig = 0
input.onButtonPressed(Button.A, function () {
    levens = 3
    bezig = 1
    basic.showIcon(IconNames.Asleep)
    for (let index = 0; index < 30; index++) {
        basic.pause(1000)
    }
})
```

## Stap 5: Gewonnen?

Na de 30 seconden: heb je nog levens over? Dan heb je gewonnen!

- :logic: Zet onder de herhaal-lus een ``||logic:als dan||``: **levens > 0**.
- :basic: Zet er ``||basic:toon tekens||`` in met **GEWONNEN!** en zet **bezig** op **0**.

```blocks
let levens = 0
let bezig = 0
input.onButtonPressed(Button.A, function () {
    levens = 3
    bezig = 1
    basic.showIcon(IconNames.Asleep)
    for (let index = 0; index < 30; index++) {
        basic.pause(1000)
    }
    if (levens > 0) {
        bezig = 0
        basic.showString("GEWONNEN!")
    }
})
```

## Stap 6: Lawaai! Het monster ontwaakt

- :input: Sleep ``||input:bij luid geluid||`` naar je werkveld.
- :logic: Zet er ``||logic:als dan||`` in: **bezig = 1** ``||logic:en||`` **wakker = 0**. Zo telt één geluid maar voor één leven.
- :variables: Zet **wakker** op **1** en ``||variables:verander levens met -1||``.
- :basic: Toon het boze ``||basic:pictogram||`` en speel een lage ``||music:toon||``: GRRR!

```blocks
let levens = 0
let bezig = 0
let wakker = 0
input.onSound(DetectedSound.Loud, function () {
    if (bezig == 1 && wakker == 0) {
        wakker = 1
        levens += -1
        basic.showIcon(IconNames.Angry)
        music.playTone(131, music.beat(BeatFraction.Whole))
    }
})
```

## Stap 7: Leef je nog?

- :logic: Zet onder de toon een ``||logic:als dan anders||``: **levens = 0**.
- :basic: Bij **dan**: zet **bezig** op **0** en toon het doodshoofd. GAME OVER!
- :basic: Bij **anders**: toon je **levens**, pauzeer even en toon weer het slapende monster.
- :variables: Zet helemaal onderaan **wakker** weer op **0**.

```blocks
let levens = 0
let bezig = 0
let wakker = 0
input.onSound(DetectedSound.Loud, function () {
    if (bezig == 1 && wakker == 0) {
        wakker = 1
        levens += -1
        basic.showIcon(IconNames.Angry)
        music.playTone(131, music.beat(BeatFraction.Whole))
        if (levens == 0) {
            bezig = 0
            basic.showIcon(IconNames.Skull)
        } else {
            basic.showNumber(levens)
            basic.pause(1000)
            basic.showIcon(IconNames.Asleep)
        }
        wakker = 0
    }
})
```

## Stap 8: Spelen!

Test in de simulator: druk op **A** en schuif de **geluidsbalk** helemaal omhoog. Verlies je een leven?

Download het naar je micro:bit. Eén leerling sluipt met de micro:bit door de klas, de rest kijkt muisstil toe. Wie haalt de overkant? 🤫
