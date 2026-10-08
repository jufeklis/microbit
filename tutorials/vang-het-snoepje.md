# Vang het snoepje

### @explicitHints true

## Een echt spel! @showdialog

We maken een **spel**! 🎮
Een snoepje valt naar beneden. Jij bent het mandje onderaan en beweegt met **A** (links) en **B** (rechts).
Vang je het snoepje? **+1 punt!** Mis je het? **Game over!**

## Stap 1: Het mandje

Een **figuurtje** (ook wel *sprite*) is één lampje dat kan bewegen. Je vindt de blokken onder **Geavanceerd → Spel**.

- :variables: Maak een variabele **mandje**.
- :game: ``||variables:stel mandje in op||`` ``||game:maak figuurtje op x 2 y 4||``. Dat is onderaan in het midden.

```blocks
let mandje = game.createSprite(2, 4)
```

## Stap 2: Bewegen met A en B

- :input: ``||input:wanneer knop A wordt ingedrukt||``: ``||game:mandje verander x met -1||`` (naar links).
- :input: ``||input:wanneer knop B wordt ingedrukt||``: ``||game:mandje verander x met 1||`` (naar rechts).

```blocks
let mandje = game.createSprite(2, 4)
input.onButtonPressed(Button.A, function () {
    mandje.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    mandje.change(LedSpriteProperty.X, 1)
})
```

## Stap 3: Het snoepje

- :variables: Maak een variabele **snoepje**.
- :game: Zet in ``||basic:bij opstarten||``: ``||variables:stel snoepje in op||`` ``||game:maak figuurtje||`` op **x** = ``||math:kies willekeurig 0 tot 4||`` en **y** = **0** (bovenaan).

```blocks
let mandje = game.createSprite(2, 4)
let snoepje = game.createSprite(randint(0, 4), 0)
```

## Stap 4: Het snoepje valt

- :basic: Neem een ``||basic:de hele tijd||`` blok.
- :basic: ``||basic:pauzeer 500 ms||`` en dan ``||game:snoepje verander y met 1||``. Zo zakt het snoepje elke halve seconde één lampje.

```blocks
let snoepje = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    basic.pause(500)
    snoepje.change(LedSpriteProperty.Y, 1)
})
```

## Stap 5: Gevangen of gemist?

- :logic: Zet er een ``||logic:als dan anders als||`` onder.
- :game: **Als** ``||game:snoepje raakt mandje aan?||``: ``||game:score met 1 wijzigen||``, en zet het snoepje terug bovenaan op een willekeurige plek.
- :game: **Anders als** ``||game:snoepje y||`` **= 4** (onderaan, maar niet gevangen): ``||game:je bent af||``.

```blocks
let mandje = game.createSprite(2, 4)
let snoepje = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    basic.pause(500)
    snoepje.change(LedSpriteProperty.Y, 1)
    if (snoepje.isTouching(mandje)) {
        game.addScore(1)
        snoepje.set(LedSpriteProperty.Y, 0)
        snoepje.set(LedSpriteProperty.X, randint(0, 4))
    } else if (snoepje.get(LedSpriteProperty.Y) == 4) {
        game.gameOver()
    }
})
```

## Stap 6: Spelen!

Speel eerst in de simulator. Download het daarna naar je micro:bit. Bij game over toont hij je **score**.

💡 **Extra uitdaging:** maak het spel sneller naarmate je meer punten hebt. Tip: maak de pauze kleiner dan 500.
