# Componeren & theremin

### @explicitHints true

## Word componist! @showdialog

We maken **muziek** met de micro:bit. 🎵
- Knop **A** en **B** spelen jouw eigen melodieën.
- Als bonus maak je een **theremin**: een instrument dat je bespeelt door te **kantelen**!

Je hebt een **micro:bit V2** nodig (speaker en aanraaklogo).

## Stap 1: Een melodie op knop A

- :input: ``||input:wanneer knop A wordt ingedrukt||``
- :music: Zet er ``||music:speel melodie ... op tempo 120 (bpm)||`` in.
- :mouse pointer: Klik op het **melodie-vakje**: er opent een rooster. Klik noten aan om je eigen melodie te maken!

```blocks
input.onButtonPressed(Button.A, function () {
    music.playMelody("C D E F G F E D ", 120)
})
```

## Stap 2: Een tweede melodie op knop B

- :input: ``||input:wanneer knop B wordt ingedrukt||``
- :music: Nog een ``||music:speel melodie||``. Maak er een melodie van die goed **na** de eerste klinkt, zoals een vraag en een antwoord.

```blocks
input.onButtonPressed(Button.B, function () {
    music.playMelody("E F G A G E C C ", 120)
})
```

## Stap 3: Sneller of trager

- :music: Verander het **tempo** van een melodie: **60** is traag, **200** is heel snel.

Wat past het best bij jouw liedje? Vrolijk, spannend of droevig?

```blocks
input.onButtonPressed(Button.A, function () {
    music.playMelody("C D E F G F E D ", 160)
})
```

## Stap 4: De theremin

Een **theremin** is een echt instrument dat je bespeelt zonder het aan te raken. Wij gebruiken **kantelen**!

- :basic: Neem een ``||basic:de hele tijd||`` blok.
- :logic: ``||logic:als||`` ``||input:logo wordt ingedrukt||``:
- :music: ``||music:speel toon (Hz)||`` ``||input:versnelling (mg) x||`` **+ 1200**. Kantel naar links = lager, naar rechts = hoger!
- :music: **anders**: ``||music:stop alle geluiden||``.

```blocks
basic.forever(function () {
    if (input.logoIsPressed()) {
        music.ringTone(input.acceleration(Dimension.X) + 1200)
    } else {
        music.stopAllSounds()
    }
})
```

## Stap 5: Concert!

Download het naar je micro:bit. Speel je melodieën voor de klas. Wie kan een bekend liedje spelen op de theremin? 🎻
