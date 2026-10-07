# Spookje & pompoen

### @explicitHints true

## Welkom! @showdialog

We maken een **Halloween-figuurtje**! 🎃👻
- Knop **A**: een spookje dat "boe" roept.
- Knop **B**: een griezelige pompoen.
- Het **gouden logo**: knipperende ogen!

Knutseltip: steek de micro:bit in een papieren pompoen of onder een wit zakdoekje.

## Stap 1: Het spookje

- :input: Sleep ``||input:wanneer knop A wordt ingedrukt||`` naar je werkveld.
- :basic: Zet er ``||basic:toon lichtjes||`` in en teken een **spookje** met armpjes. Klik op de vakjes om ze aan te zetten.

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        # . # . #
        # # # # #
        # . # . #
        # . . . #
        `)
})
```

## Stap 2: Boeee!

- :music: Zet er ``||music:speel wawawawaa tot het klaar is||`` onder.

Klik in de simulator op **A**. Schrik je?

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        # . # . #
        # # # # #
        # . # . #
        # . . . #
        `)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.UntilDone)
})
```

## Stap 3: De griezelige pompoen

- :input: Sleep nog een ``||input:wanneer knop A wordt ingedrukt||`` naar je werkveld en kies **B**.
- :basic: Teken met ``||basic:toon lichtjes||`` een **pompoen** met boze oogjes.
- :music: Zet er ``||music:speel toon Lage G voor 1 beat||`` onder.

```blocks
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        # . . . #
        # # . # #
        . # # # .
        # . # . #
        `)
    music.playTone(196, music.beat(BeatFraction.Whole))
})
```

## Stap 4: Knipperende ogen

Het gouden logo is een **aanraakknop** (alleen op de micro:bit V2).

- :input: Sleep ``||input:bij logo ingedrukt||`` naar je werkveld.
- :basic: Toon **twee oogjes** met ``||basic:toon lichtjes||``, ``||basic:pauzeer 100 ms||``, ``||basic:Wis scherm||``, ``||basic:pauzeer 100 ms||``, en nog eens de oogjes.

```blocks
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.clearScreen()
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        `)
})
```

## Stap 5: Griezelen!

Download het naar je micro:bit en verstop hem in je knutselwerk.

Extra idee: hang hem aan de deur op Halloween en druk op **A** als er iemand aanbelt! 👻
