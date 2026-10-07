# Spookjacht

### @explicitHints true

## Welkom, spookjager! @showdialog

Ergens in de klas zit een **spook** verstopt. 👻 Het spook is een micro:bit die stilletjes **radiosignalen** uitzendt.
Jullie bouwen een **spookdetector**: hoe dichter je bij het spook komt, hoe hoger de lichtjes op je scherm.
Wie vindt het spook als eerste?

Alle groepjes maken **hetzelfde programma**. De juf maakt van één micro:bit het spook.

## Stap 1: Het radiokanaal kiezen

Alle micro:bits moeten op **hetzelfde kanaal** zitten, net als walkietalkies.

- :radio: Zet ``||radio:radio stel groep in||`` in ``||basic:bij opstarten||``. Kies **31** (31 oktober!).
- :radio: Zet er ``||radio:radio stel zendvermogen in||`` onder en kies **1**. Zo is het signaal zwak en moet je echt zoeken.

```blocks
radio.setGroup(31)
radio.setTransmitPower(1)
```

## Stap 2: Een variabele "spook"

- :variables: Maak een variabele **spook**. Zet hem in ``||basic:bij opstarten||`` op **0**: deze micro:bit is (nog) geen spook.
- :basic: Toon een ``||basic:pictogram||``, bijvoorbeeld een ruitje, zodat je ziet dat de detector aan staat.

```blocks
let spook = 0
radio.setGroup(31)
radio.setTransmitPower(1)
spook = 0
basic.showIcon(IconNames.Diamond)
```

## Stap 3: Het spook worden met A+B

Alleen de juf drukt hierop!

- :input: Sleep ``||input:wanneer knop A+B wordt ingedrukt||`` naar je werkveld.
- :variables: Zet **spook** op **1**.
- :basic: Toon het ``||basic:pictogram||`` van het spookje.

```blocks
let spook = 0
input.onButtonPressed(Button.AB, function () {
    spook = 1
    basic.showIcon(IconNames.Ghost)
})
```

## Stap 4: Het spook zendt signalen uit

- :basic: Neem een ``||basic:de hele tijd||`` blok.
- :logic: Zet er een ``||logic:als dan||`` in: **spook = 1**.
- :radio: Zet erin ``||radio:radio verzend getal||`` met **31**, en ``||basic:pauzeer 200 ms||``.

```blocks
let spook = 0
basic.forever(function () {
    if (spook == 1) {
        radio.sendNumber(31)
        basic.pause(200)
    }
})
```

## Stap 5: Hoe sterk is het signaal?

Nu de detector. Elke keer dat er een signaal binnenkomt, meten we hoe **sterk** het is. Dichtbij = sterk, ver weg = zwak.

- :radio: Sleep ``||radio:wanneer radio ontvangen receivedNumber||`` naar je werkveld.
- :variables: Maak een variabele **sterkte** en ``||variables:stel sterkte in op||`` ``||radio:ontvangen pakket signaalsterkte||``.

```blocks
let sterkte = 0
radio.onReceivedNumber(function (receivedNumber) {
    sterkte = radio.receivedPacket(RadioPacketProperty.SignalStrength)
})
```

## Stap 6: Staafjes tonen

De sterkte is een getal tussen ongeveer **-90** (ver weg) en **-45** (vlakbij). We zetten dat om naar staafjes van 0 tot 9.

- :led: Zet ``||led:plot staafdiagram||`` onder het vorige blok, met **tot 9**.
- :calculator: Zet in het eerste vakje ``||math:verdeel||`` **sterkte** van **-90** tot **-45** naar **0** tot **9**.

```blocks
let sterkte = 0
radio.onReceivedNumber(function (receivedNumber) {
    sterkte = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    led.plotBarGraph(Math.map(sterkte, -90, -45, 0, 9), 9)
})
```

## Stap 7: Gevonden!

- :logic: Zet er een ``||logic:als dan||`` onder: **sterkte > -50**.
- :basic: Toon het spookje en speel een hoge ``||music:toon||``. Gevonden!

Vindt je detector het spook te snel of te traag? Verander dan **-50**, bijvoorbeeld in **-55** of **-45**.

```blocks
let sterkte = 0
radio.onReceivedNumber(function (receivedNumber) {
    sterkte = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    led.plotBarGraph(Math.map(sterkte, -90, -45, 0, 9), 9)
    if (sterkte > -50) {
        basic.showIcon(IconNames.Ghost)
        music.playTone(988, music.beat(BeatFraction.Quarter))
    }
})
```

## Stap 8: Op jacht!

In de simulator verschijnt nu een **tweede micro:bit**. Druk op de ene op **A+B**: die wordt het spook. De andere toont staafjes.

Download het programma naar jullie micro:bit. De juf verstopt het spook in de klas... Op jacht! 👻
