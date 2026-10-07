# Slimme dobbelsteen

### @explicitHints true

## Welkom! @showdialog

Dobbelsteen kwijt? Geen probleem! 🎲
We maken een **digitale dobbelsteen**: schud de micro:bit en hij kiest een getal van **1 tot 6**.
Met een rol-animatie, geluid en als bonus: **blad-steen-schaar**!

## Stap 1: Schudden

- :input: Sleep ``||input:bij schudden||`` naar je werkveld.
- :basic: Zet er ``||basic:toon nummer||`` in.
- :calculator: Sleep ``||math:kies willekeurig 1 tot 6||`` in het vakje van toon nummer.

Klik in de simulator op **SHAKE**. Krijg je een getal?

```blocks
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
})
```

## Stap 2: De dobbelsteen rolt...

Een echte dobbelsteen rolt eerst even. Dat bouwen we na, **boven** het toon-nummer-blok.

- :music: ``||music:speel toon Hoge C voor 1/16 beat||``
- :basic: ``||basic:toon lichtjes||`` met één stipje, en ``||basic:pauzeer 100 ms||``
- :music: ``||music:speel toon Midden G voor 1/16 beat||``
- :basic: ``||basic:toon lichtjes||`` met vier stipjes in de hoeken, en ``||basic:pauzeer 100 ms||``

```blocks
input.onGesture(Gesture.Shake, function () {
    music.playTone(523, music.beat(BeatFraction.Sixteenth))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    music.playTone(392, music.beat(BeatFraction.Sixteenth))
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
    basic.pause(100)
    basic.showNumber(randint(1, 6))
})
```

## Stap 3: Taaa-daaa!

- :music: Zet vlak boven het toon-nummer-blok nog ``||music:speel spring omhoog tot het klaar is||``.

```blocks
input.onGesture(Gesture.Shake, function () {
    music.playTone(523, music.beat(BeatFraction.Sixteenth))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    music.playTone(392, music.beat(BeatFraction.Sixteenth))
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
    basic.pause(100)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpUp), music.PlaybackMode.UntilDone)
    basic.showNumber(randint(1, 6))
})
```

## Bonus: blad-steen-schaar met knop A

- :variables: Maak een variabele **hand**.
- :input: Sleep ``||input:wanneer knop A wordt ingedrukt||`` naar je werkveld.
- :variables: ``||variables:stel hand in op||`` ``||math:kies willekeurig 1 tot 3||``.
- :logic: Gebruik ``||logic:als dan anders||``: **1** = steen (klein vierkantje), **2** = blad (groot vierkant), anders = schaar.

```blocks
let hand = 0
input.onButtonPressed(Button.A, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (hand == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
```

## Spelen!

Download het naar je micro:bit.
- **Schudden** = dobbelsteen 🎲
- **Knop A** = blad-steen-schaar ✊ ✋ ✌️

Druk tegelijk met je buur op A. Wie wint?
