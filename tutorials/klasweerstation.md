# Klasweerstation

### @explicitHints true

```package
datalogger
```

## Welkom, weerman of weervrouw! @showdialog

We maken een **weerstation** dat de **temperatuur** en het **licht** in de klas meet. 🌡️☀️
De micro:bit onthoudt elke minuut een meting. Achteraf maak je er een **grafiek** van!

⚠️ Je hebt een **micro:bit V2** nodig.

## Stap 1: Hoe warm is het?

- :input: Sleep ``||input:wanneer knop A wordt ingedrukt||`` naar je werkveld.
- :basic: Zet er ``||basic:toon nummer||`` in met ``||input:temperatuur (°C)||``.

Klik in de simulator op **A**. Schuif de thermometer omhoog en omlaag.

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
```

## Stap 2: Hoe licht is het?

- :input: Doe hetzelfde voor knop **B**, maar met ``||input:lichtniveau||``.

Het lichtniveau gaat van **0** (donker) tot **255** (heel fel).

```blocks
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.lightLevel())
})
```

## Stap 3: Elke minuut meten

- :loops: Sleep ``||loops:elk 60000 ms||`` naar je werkveld. 60000 milliseconden = **1 minuut**.
- :datalogger: Zet er ``||datalogger:log data||`` in.
- :datalogger: Vul twee kolommen in (**column** = naam, **value** = waarde): **temperatuur** met ``||input:temperatuur (°C)||`` en **licht** met ``||input:lichtniveau||``.

```blocks
loops.everyInterval(60000, function () {
    datalogger.log(
    datalogger.createCV("temperatuur", input.temperature()),
    datalogger.createCV("licht", input.lightLevel())
    )
})
```

## Stap 4: Zien dat hij meet

- :led: Zet in hetzelfde blok ook ``||led:wissel x 0 y 0||``. Zo knippert er bij elke meting een lampje.

```blocks
loops.everyInterval(60000, function () {
    datalogger.log(
    datalogger.createCV("temperatuur", input.temperature()),
    datalogger.createCV("licht", input.lightLevel())
    )
    led.toggle(0, 0)
})
```

## Stap 5: Meten en de grafiek bekijken

Download het naar je micro:bit en laat hem een **halve dag** in de klas liggen, bijvoorbeeld aan het raam.

Daarna: steek de micro:bit in de computer en open het bestand **MY_DATA.HTM** op de micro:bit. Je ziet al je metingen, en met **Visual preview** zie je een grafiek! 📈

💡 Wanneer was het het warmst? Wanneer werd het donker?
