# Emotie-badge & muziekdoos

### @explicitHints true

## Welkom! @showdialog

We maken een **badge** voor op je trui! 😊
- Knop **A**: een blij gezichtje en een vrolijk geluidje.
- Knop **B**: een verdrietig gezichtje.
- Het **gouden logo** aanraken: een kloppend hartje! ❤️

## Stap 1: Blij met knop A

- :input: Sleep ``||input:wanneer knop A wordt ingedrukt||`` naar je werkveld.
- :basic: Zet er ``||basic:toon pictogram||`` in en kies het **blije gezichtje**.

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
```

## Stap 2: Een vrolijk geluidje

- :music: Zet er ``||music:speel ba ding tot het klaar is||`` onder.

Klik in de simulator op knop **A**. Hoor en zie je het?

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.UntilDone)
})
```

## Stap 3: Verdrietig met knop B

- :input: Sleep nog een ``||input:wanneer knop A wordt ingedrukt||`` naar je werkveld en kies **B**.
- :basic: Zet er ``||basic:toon pictogram||`` in met het **verdrietige gezichtje**.
- :music: Zet er ``||music:speel wawawawaa tot het klaar is||`` onder.

```blocks
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.UntilDone)
})
```

## Stap 4: Een kloppend hartje

Het gouden logo bovenaan is een **aanraakknop** (alleen op de micro:bit V2).

- :input: Sleep ``||input:bij logo ingedrukt||`` naar je werkveld.
- :basic: Toon het **grote hartje**, ``||basic:pauzeer 100 ms||``, het **kleine hartje**, ``||basic:pauzeer 100 ms||`` en weer het **grote hartje**.

```blocks
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
    basic.showIcon(IconNames.Heart)
})
```

## Stap 5: Op je micro:bit zetten!

Klik in de simulator op het logo. Klopt het hartje?

Sluit je micro:bit aan en klik op **Downloaden**. Klik een batterijbakje vast en draag je badge! 😊
