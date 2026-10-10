# Kansrekenen met 600 worpen

### @explicitHints true

## Is een dobbelsteen eerlijk? @showdialog

Als je een dobbelsteen **600 keer** gooit, hoe vaak komt elk getal dan?
Met de hand duurt dat uren. De micro:bit doet het in een paar seconden! 🎲

We gebruiken een **lijst**: zes vakjes, één voor elk getal van de dobbelsteen.

## Stap 1: Een lijst met zes vakjes

- :variables: Maak een variabele **tellingen**.
- :list: Zet in ``||basic:bij opstarten||``: ``||variables:stel tellingen in op||`` een ``||arrays:lijst van||`` met **zes nullen**. Klik op het **+** om vakjes toe te voegen.

```blocks
let tellingen = [0, 0, 0, 0, 0, 0]
```

## Stap 2: 600 keer gooien

- :input: ``||input:wanneer knop A wordt ingedrukt||``
- :loops: Zet er ``||loops:600 keer herhalen||`` in.
- :variables: Maak een variabele **worp** en ``||variables:stel worp in op||`` ``||math:kies willekeurig 1 tot 6||``.

```blocks
let worp = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 600; index++) {
        worp = randint(1, 6)
    }
})
```

## Stap 3: Tellen in de lijst

Het eerste vakje van een lijst heeft nummer **0**. Gooi je een **1**, dan tel je dus op in vakje **0**. Daarom **worp - 1**.

- :list: Zet in de herhaal-lus: ``||arrays:tellingen stel waarde op||`` **worp - 1** ``||arrays:in op||`` ``||arrays:tellingen haal waarde op, op||`` **worp - 1** **+ 1**.
- :basic: Toon na de lus een **vinkje**: klaar met gooien!

```blocks
let tellingen = [0, 0, 0, 0, 0, 0]
let worp = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 600; index++) {
        worp = randint(1, 6)
        tellingen[worp - 1] = tellingen[worp - 1] + 1
    }
    basic.showIcon(IconNames.Yes)
})
```

## Stap 4: De uitslag tonen

- :input: ``||input:wanneer knop B wordt ingedrukt||``
- :loops: Gebruik ``||loops:voor index van 0 tot 5||``.
- :basic: Toon met ``||basic:toon tekens||`` het getal (**index + 1**), een **=** en het aantal in de lijst. Gebruik ``||text:voeg samen||``.

```blocks
let tellingen = [0, 0, 0, 0, 0, 0]
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 5; index++) {
        basic.showString("" + (index + 1) + "=" + tellingen[index])
    }
})
```

## Stap 5: Opnieuw beginnen

- :input: ``||input:wanneer knop A+B wordt ingedrukt||``: zet **tellingen** terug op zes nullen en ``||basic:Wis scherm||``.

```blocks
let tellingen = [0, 0, 0, 0, 0, 0]
input.onButtonPressed(Button.AB, function () {
    tellingen = [0, 0, 0, 0, 0, 0]
    basic.clearScreen()
})
```

## Stap 6: Onderzoeken!

Druk op **A** (600 worpen) en daarna op **B** (de uitslag). Schrijf de getallen in een tabel.

🤔 Hoe vaak verwacht je elk getal? (Tip: 600 gedeeld door 6.) Klopt dat ongeveer? Druk nog eens op A: wat gebeurt er als je **1200** of **6000** keer gooit?
