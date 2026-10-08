# 🦠 Virus-simulatie

**Voor:** 5e & 6e leerjaar  
**Tijd:** ca. 40 minuten  
**Nodig:** alle micro:bits van de klas (radio)  
**Doel:** een **simulatie** maken met de **radio** en **kans**.

> 💻 Liever stap voor stap op het scherm? Open de [tutorial in MakeCode](https://makecode.microbit.org/?lang=nl#tutorial:https://github.com/jufeklis/microbit/tutorials/virus-simulatie).

---

## 🎯 Hoe verspreidt een ziekte zich?

We spelen een **virus-spel** met de micro:bits! 🦠
- Iedereen begint **gezond** 😊.
- De juf maakt één micro:bit **besmet**. Die zendt via de radio "virus" uit.
- Kom je **dichtbij** een besmette micro:bit, dan heb je kans dat je ook besmet raakt 🤒.

Hoe snel is de hele klas ziek? En wat als je afstand houdt?

### Stap 1: Klaarzetten

- Zet `Radio instellen groep` op **19** en `radio stel uitzendkracht in` op **1**. Zo werkt het alleen van dichtbij.
- Maak een variabele **besmet** en zet die op **0**.
- Toon het **blije gezichtje**: je bent gezond.

☐ Klaar

### Stap 2: Patiënt nul

Alleen de juf drukt hierop!

- `wanneer knop A+B wordt ingedrukt`: zet **besmet** op **1**.

☐ Klaar

### Stap 3: Besmet? Dan zend je het virus uit

- `de hele tijd`
- `als` **besmet = 1**: toon het **verdrietige gezichtje**, `Radio verzend nummer` **1** en `pauzeer 1000 ms`.

☐ Klaar

### Stap 4: Het virus opvangen

- Sleep `wanneer de radio ontvangt receivedNumber` naar je werkveld.
- `als` je nog **gezond** bent (**besmet = 0**) `en` de `pakket ontvangen signaalsterkte` **> -60** (dus dichtbij):
- Gooi een dobbelsteen: `als` `kies willekeurig 1 tot 3` **= 1**, dan zet je **besmet** op **1**. Je hebt dus **1 kans op 3**.

☐ Klaar

---

## 🧪 Spelen!

Zet het programma op alle micro:bits. Iedereen loopt rustig rond in de klas. De juf drukt op **A+B**... Tel na 1, 2 en 3 minuten hoeveel micro:bits ziek zijn.

Speel daarna een **tweede ronde** waarin iedereen meer afstand houdt. Wat merk je? 🤔

💡 **Extra uitdaging:** laat een besmette micro:bit na 30 seconden weer **genezen**. Of maak een "mondmasker": verander de kans in 1 op 10.
