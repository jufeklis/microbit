# Morse-berichten

### @explicitHints true

## Geheime boodschappen @showdialog

Vroeger stuurden mensen berichten met **morsecode**: korte en lange piepjes. 📡
- Knop **A** = **kort** ( · )
- Knop **B** = **lang** ( — )

Jouw micro:bit stuurt de piepjes via de radio naar de andere groepjes. Kunnen zij jouw bericht ontcijferen?

## De morsetabel @showdialog

| | | | | |
|---|---|---|---|---|
| A ·— | B —··· | C —·—· | D —·· | E · |
| F ··—· | G ——· | H ···· | I ·· | J ·——— |
| K —·— | L ·—·· | M —— | N —· | O ——— |
| P ·——· | Q ——·— | R ·—· | S ··· | T — |
| U ··— | V ···— | W ·—— | X —··— | Y —·—— |
| Z ——·· | | | | |

Het bekendste bericht: **SOS** = ··· ——— ···

## Stap 1: Hetzelfde kanaal

- :radio: Zet ``||radio:Radio instellen groep||`` in ``||basic:bij opstarten||`` en kies **5**.

```blocks
radio.setGroup(5)
```

## Stap 2: Kort met A

- :input: ``||input:wanneer knop A wordt ingedrukt||``
- :radio: ``||radio:Radio verzend zin||`` **"."** (een puntje = kort).

```blocks
input.onButtonPressed(Button.A, function () {
    radio.sendString(".")
})
```

## Stap 3: Lang met B

- :input: ``||input:wanneer knop B wordt ingedrukt||``
- :radio: ``||radio:Radio verzend zin||`` **"-"** (een streepje = lang).

```blocks
input.onButtonPressed(Button.B, function () {
    radio.sendString("-")
})
```

## Stap 4: Een bericht ontvangen

- :radio: Sleep ``||radio:wanneer de radio ontvangt receivedString||`` naar je werkveld.
- :logic: ``||logic:als||`` **receivedString = "."**: toon een **stipje** en speel een **korte** toon (1/4 beat).
- :logic: **anders**: toon een **streepje** en speel een **lange** toon (1 beat).
- :basic: Zet er onderaan ``||basic:Wis scherm||``.

```blocks
radio.onReceivedString(function (receivedString) {
    if (receivedString == ".") {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        music.playTone(880, music.beat(BeatFraction.Quarter))
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        music.playTone(880, music.beat(BeatFraction.Whole))
    }
    basic.clearScreen()
})
```

## Stap 5: Berichten sturen!

Zet het programma op meerdere micro:bits. Kies een woord, zoek de letters op in de morsetabel en stuur het. Neem even pauze tussen twee letters.

De andere groepjes schrijven op wat ze horen en zien... Wie ontcijfert het bericht? 🕵️

💡 Op een micro:bit **V1** hoor je geen piepjes (geen speaker), maar zie je wel de stipjes en streepjes.
