# Kompas & schattenjacht

### @explicitHints true

## Welkom, ontdekkingsreiziger! @showdialog

De micro:bit heeft een **kompas** aan boord. 🧭
We maken een kompas dat toont waar het **noorden** is. Daarna gaan jullie op **schattenjacht** met aanwijzingen van de juf, zoals: *"Ga 10 stappen naar het noorden."*

De eerste keer vraagt de micro:bit om het kompas te **ijken**: kantel hem tot alle lampjes branden.

## Stap 1: De richting meten

- :variables: Maak een variabele **richting**.
- :basic: Neem een ``||basic:de hele tijd||`` blok.
- :variables: ``||variables:stel richting in op||`` ``||input:kompasrichting (°)||``.

De richting is een getal van **0 tot 359** graden. **0** is het noorden.

```blocks
let richting = 0
basic.forever(function () {
    richting = input.compassHeading()
})
```

## Stap 2: Kijk ik naar het noorden?

- :logic: Zet er een ``||logic:als dan anders||`` onder.
- :logic: Kijk je naar het noorden? Dat is als **richting < 45** ``||logic:of||`` **richting > 315**.
- :basic: Toon dan de letter **N** met ``||basic:toon tekens||``.

```blocks
let richting = 0
basic.forever(function () {
    richting = input.compassHeading()
    if (richting < 45 || richting > 315) {
        basic.showString("N")
    } else {
        basic.clearScreen()
    }
})
```

## Stap 3: Welke kant moet ik op?

Kijk je niet naar het noorden? Dan toont een pijl welke kant je moet draaien.

- :logic: Klik op het **+** van het als-blok om een ``||logic:anders als||`` toe te voegen: **richting < 180**.
- :basic: Gebruik dan ``||basic:toon pijl||`` naar het **westen** (draai naar links).
- :basic: Bij **anders**: een pijl naar het **oosten** (draai naar rechts).

```blocks
let richting = 0
basic.forever(function () {
    richting = input.compassHeading()
    if (richting < 45 || richting > 315) {
        basic.showString("N")
    } else if (richting < 180) {
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showArrow(ArrowNames.East)
    }
})
```

## Stap 4: Exacte graden

- :input: Sleep ``||input:wanneer knop A wordt ingedrukt||`` naar je werkveld.
- :basic: Zet er ``||basic:toon nummer||`` **richting** in.

Handig voor de schattenjacht: 90° = oost, 180° = zuid, 270° = west.

```blocks
let richting = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(richting)
})
```

## Stap 5: Op schattenjacht!

Download het naar je micro:bit. Hou hem **plat** voor je, zoals een echt kompas.

De juf geeft jullie een kaartje met aanwijzingen. Volg de pijlen en tel je stappen... Wie vindt de schat? 💎

💡 Hou de micro:bit weg van metaal en magneten, anders raakt het kompas in de war.
