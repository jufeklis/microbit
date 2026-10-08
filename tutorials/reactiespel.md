# Reactiespel

### @explicitHints true

## Hoe snel ben jij? @showdialog

Druk op **B** en wacht... Zodra het **hartje** verschijnt, druk je zo snel mogelijk op **A**! ❤️
De micro:bit toont hoeveel **milliseconden** je nodig had. Wie in de klas is het snelst?

Maar opgelet: druk je te vroeg, dan ben je **vals**! 😜

## Stap 1: Twee variabelen

- :variables: Maak twee variabelen: **start** (wanneer het hartje verscheen) en **toestand**.
- :variables: **toestand** vertelt wat er gebeurt: **0** = niets, **1** = wachten, **2** = hartje staat er.

```blocks
let start = 0
let toestand = 0
toestand = 0
basic.showIcon(IconNames.Yes)
```

## Stap 2: Start met B

- :input: Sleep ``||input:wanneer knop B wordt ingedrukt||`` naar je werkveld.
- :basic: ``||basic:Wis scherm||`` en zet **toestand** op **1**.
- :basic: ``||basic:pauzeer||`` een willekeurige tijd: ``||math:kies willekeurig 2000 tot 5000||``. Zo weet niemand wanneer het hartje komt!

```blocks
let toestand = 0
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    toestand = 1
    basic.pause(randint(2000, 5000))
})
```

## Stap 3: Het hartje!

- :basic: Toon het hartje.
- :variables: ``||variables:stel start in op||`` ``||input:looptijd (ms)||``. Dat is de klok van de micro:bit.
- :variables: Zet **toestand** op **2**.

```blocks
let start = 0
let toestand = 0
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    toestand = 1
    basic.pause(randint(2000, 5000))
    basic.showIcon(IconNames.Heart)
    start = input.runningTime()
    toestand = 2
})
```

## Stap 4: Druk op A!

- :input: Sleep ``||input:wanneer knop A wordt ingedrukt||`` naar je werkveld.
- :logic: ``||logic:als||`` **toestand = 2**: toon ``||input:looptijd (ms)||`` **min** **start**. Dat is jouw reactietijd!
- :variables: Zet **toestand** op **0**.

```blocks
let start = 0
let toestand = 0
input.onButtonPressed(Button.A, function () {
    if (toestand == 2) {
        basic.showNumber(input.runningTime() - start)
        toestand = 0
    }
})
```

## Stap 5: Vals spelen?

Wie drukt terwijl er nog **gewacht** wordt (toestand = 1), is te vroeg!

- :logic: Klik op het **+** van het als-blok voor een ``||logic:anders als||``: **toestand = 1**.
- :basic: Toon dan een kruisje en de tekst **VALS**.

```blocks
let start = 0
let toestand = 0
input.onButtonPressed(Button.A, function () {
    if (toestand == 2) {
        basic.showNumber(input.runningTime() - start)
        toestand = 0
    } else if (toestand == 1) {
        basic.showIcon(IconNames.No)
        basic.showString("VALS")
    }
})
```

## Stap 6: Wie is de snelste?

Download het naar je micro:bit en speel om beurten. Schrijf de tijden op het bord. 🏆

Een goede reactietijd is ongeveer **250** milliseconden. Haal jij het?
