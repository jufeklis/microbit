# Stappenteller & Klap-Sensor

### @explicitHints true

## Welkom! @showdialog

We bouwen een echte **stappenteller**! 🏃
Elke keer dat je springt of stapt, telt de micro:bit **+1**.
Klap in je handen 👏 om je score te zien. Bij **20 stappen** volgt er een feestje! 🎉

⚠️ Je hebt een **micro:bit V2** nodig (met microfoon en speaker).

## Stap 1: Een variabele maken

- :variables: Open ``||variables:Variabelen||`` en klik op **Maak een variabele**. Noem hem **stappen**.
- :variables: Sleep ``||variables:stel stappen in op 0||`` in ``||basic:bij opstarten||``.
- :basic: Zet er ``||basic:toon nummer||`` onder en sleep de variabele **stappen** in het vakje.

```blocks
let stappen = 0
stappen = 0
basic.showNumber(stappen)
```

## Stap 2: Tellen bij schudden

- :input: Sleep ``||input:bij schudden||`` uit ``||input:Invoer||`` naar je werkveld.
- :variables: Zet er ``||variables:verander stappen met 1||`` in.

```blocks
let stappen = 0
input.onGesture(Gesture.Shake, function () {
    stappen += 1
})
```

## Stap 3: Een tikje bij elke stap

- :music: Zet ``||music:speel toon||`` uit ``||music:Muziek||`` onder het tel-blok, zodat je elke stap hoort.

```blocks
let stappen = 0
input.onGesture(Gesture.Shake, function () {
    stappen += 1
    music.playTone(523, music.beat(BeatFraction.Sixteenth))
})
```

## Stap 4: Klappen om je score te zien

- :input: Sleep ``||input:bij luid geluid||`` uit ``||input:Invoer||`` naar je werkveld.
- :basic: Zet er ``||basic:toon nummer||`` in met de variabele **stappen**.

```blocks
let stappen = 0
input.onSound(DetectedSound.Loud, function () {
    basic.showNumber(stappen)
})
```

## Stap 5: Feestje bij 20 stappen!

- :logic: Zet een ``||logic:als dan||`` blok uit ``||logic:Logisch||`` in ``||input:bij schudden||``, onder de toon.
- :logic: Vul in: ``||logic:stappen = 20||``.
- :music: Zet er ``||music:speel melodie||`` in en kies een feestdeuntje.
- :basic: Toon daarna een ``||basic:pictogram||``, bijvoorbeeld het hartje.

```blocks
let stappen = 0
input.onGesture(Gesture.Shake, function () {
    stappen += 1
    music.playTone(523, music.beat(BeatFraction.Sixteenth))
    if (stappen == 20) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.Heart)
    }
})
```

## Stap 6: Opnieuw beginnen met A+B

- :input: Sleep ``||input:wanneer knop A+B wordt ingedrukt||`` naar je werkveld (kies **A+B** in het menu).
- :variables: Zet er ``||variables:stel stappen in op 0||`` in.
- :basic: Zet er ``||basic:toon nummer||`` onder.

```blocks
let stappen = 0
input.onButtonPressed(Button.AB, function () {
    stappen = 0
    basic.showNumber(stappen)
})
```

## Stap 7: Testen!

Test in de simulator: klik op **SHAKE** om te stappen. Schuif de **geluidsbalk** omhoog om te "klappen".

Werkt alles? Klik op **Downloaden**, maak de kabel los, klik het batterijbakje vast en ga een rondje lopen! 🏃
