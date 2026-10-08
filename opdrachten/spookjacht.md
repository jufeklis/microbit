# 👻 Spookjacht

**Voor:** 5e & 6e leerjaar  
**Tijd:** ca. 45 minuten  
**Nodig:** minstens **2 micro:bits** (radio)  
**Doel:** de **radio**, **signaalsterkte** en een **staafdiagram**.

> 💻 Liever stap voor stap op het scherm? Open de [tutorial in MakeCode](https://makecode.microbit.org/?lang=nl#tutorial:https://github.com/jufeklis/microbit/tutorials/spookjacht).

---

## 🎯 Welkom, spookjager!

Ergens in de klas zit een **spook** verstopt. 👻 Het spook is een micro:bit die stilletjes **radiosignalen** uitzendt.
Jullie bouwen een **spookdetector**: hoe dichter je bij het spook komt, hoe hoger de lichtjes op je scherm.
Wie vindt het spook als eerste?

Alle groepjes maken **hetzelfde programma**. De juf maakt van één micro:bit het spook.

### Stap 1: Het radiokanaal kiezen

Alle micro:bits moeten op **hetzelfde kanaal** zitten, net als walkietalkies.

- Zet `Radio instellen groep` in `bij opstarten`. Kies **31** (31 oktober!).
- Zet er `radio stel uitzendkracht in` onder en kies **1**. Zo is het signaal zwak en moet je echt zoeken.

☐ Klaar

### Stap 2: Een variabele "spook"

- Maak een variabele **spook**. Zet hem in `bij opstarten` op **0**: deze micro:bit is (nog) geen spook.
- Toon een `pictogram`, bijvoorbeeld een ruitje, zodat je ziet dat de detector aan staat.

☐ Klaar

### Stap 3: Het spook worden met A+B

Alleen de juf drukt hierop!

- Sleep `wanneer knop A+B wordt ingedrukt` naar je werkveld.
- Zet **spook** op **1**.
- Toon het `pictogram` van het spookje.

☐ Klaar

### Stap 4: Het spook zendt signalen uit

- Neem een `de hele tijd` blok.
- Zet er een `als dan` in: **spook = 1**.
- Zet erin `Radio verzend nummer` met **31**, en `pauzeer 200 ms`.

☐ Klaar

### Stap 5: Hoe sterk is het signaal?

Nu de detector. Elke keer dat er een signaal binnenkomt, meten we hoe **sterk** het is. Dichtbij = sterk, ver weg = zwak.

- Sleep `wanneer de radio ontvangt receivedNumber` naar je werkveld.
- Maak een variabele **sterkte** en `stel sterkte in op` `pakket ontvangen signaalsterkte`.

☐ Klaar

### Stap 6: Staafjes tonen

De sterkte is een getal tussen ongeveer **-90** (ver weg) en **-45** (vlakbij). We zetten dat om naar staafjes van 0 tot 9.

- Zet `plot staafdiagram van ... tot 9` onder het vorige blok.
- Zet in het eerste vakje `vertaal` **sterkte** van **-90** tot **-45** naar van **0** tot **9**.

☐ Klaar

### Stap 7: Gevonden!

- Zet er een `als dan` onder: **sterkte > -50**.
- Toon het spookje en speel een hoge `toon`. Gevonden!

Vindt je detector het spook te snel of te traag? Verander dan **-50**, bijvoorbeeld in **-55** of **-45**.

☐ Klaar

---

## 🧪 Op jacht!

In de simulator verschijnt nu een **tweede micro:bit**. Druk op de ene op **A+B**: die wordt het spook. De andere toont staafjes.

Download het programma naar jullie micro:bit. De juf verstopt het spook in de klas... Op jacht! 👻
