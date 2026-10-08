# Virus-simulatie

### @explicitHints true

## Hoe verspreidt een ziekte zich? @showdialog

We spelen een **virus-spel** met de micro:bits! 🦠
- Iedereen begint **gezond** 😊.
- De juf maakt één micro:bit **besmet**. Die zendt via de radio "virus" uit.
- Kom je **dichtbij** een besmette micro:bit, dan heb je kans dat je ook besmet raakt 🤒.

Hoe snel is de hele klas ziek? En wat als je afstand houdt?

## Stap 1: Klaarzetten

- :radio: Zet ``||radio:Radio instellen groep||`` op **19** en ``||radio:radio stel uitzendkracht in||`` op **1**. Zo werkt het alleen van dichtbij.
- :variables: Maak een variabele **besmet** en zet die op **0**.
- :basic: Toon het **blije gezichtje**: je bent gezond.

```blocks
let besmet = 0
radio.setGroup(19)
radio.setTransmitPower(1)
besmet = 0
basic.showIcon(IconNames.Happy)
```

## Stap 2: Patiënt nul

Alleen de juf drukt hierop!

- :input: ``||input:wanneer knop A+B wordt ingedrukt||``: zet **besmet** op **1**.

```blocks
let besmet = 0
input.onButtonPressed(Button.AB, function () {
    besmet = 1
})
```

## Stap 3: Besmet? Dan zend je het virus uit

- :basic: ``||basic:de hele tijd||``
- :logic: ``||logic:als||`` **besmet = 1**: toon het **verdrietige gezichtje**, ``||radio:Radio verzend nummer||`` **1** en ``||basic:pauzeer 1000 ms||``.

```blocks
let besmet = 0
basic.forever(function () {
    if (besmet == 1) {
        basic.showIcon(IconNames.Sad)
        radio.sendNumber(1)
        basic.pause(1000)
    }
})
```

## Stap 4: Het virus opvangen

- :radio: Sleep ``||radio:wanneer de radio ontvangt receivedNumber||`` naar je werkveld.
- :logic: ``||logic:als||`` je nog **gezond** bent (**besmet = 0**) ``||logic:en||`` de ``||radio:pakket ontvangen signaalsterkte||`` **> -60** (dus dichtbij):
- :math: Gooi een dobbelsteen: ``||logic:als||`` ``||math:kies willekeurig 1 tot 3||`` **= 1**, dan zet je **besmet** op **1**. Je hebt dus **1 kans op 3**.

```blocks
let besmet = 0
radio.onReceivedNumber(function (receivedNumber) {
    if (besmet == 0 && radio.receivedPacket(RadioPacketProperty.SignalStrength) > -60) {
        if (randint(1, 3) == 1) {
            besmet = 1
        }
    }
})
```

## Stap 5: Spelen!

Zet het programma op alle micro:bits. Iedereen loopt rustig rond in de klas. De juf drukt op **A+B**... Tel na 1, 2 en 3 minuten hoeveel micro:bits ziek zijn.

Speel daarna een **tweede ronde** waarin iedereen meer afstand houdt. Wat merk je? 🤔

💡 **Extra uitdaging:** laat een besmette micro:bit na 30 seconden weer **genezen**. Of maak een "mondmasker": verander de kans in 1 op 10.
