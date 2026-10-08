# 🍭 Vang het snoepje

**Voor:** 5e & 6e leerjaar  
**Tijd:** ca. 45 minuten  
**Nodig:** micro:bit (V1 of V2)  
**Doel:** een **spel** maken met **figuurtjes**, een **score** en spellogica.

> 💻 Liever stap voor stap op het scherm? Open de [tutorial in MakeCode](https://makecode.microbit.org/?lang=nl#tutorial:https://github.com/jufeklis/microbit/tutorials/vang-het-snoepje).

---

## 🎯 Een echt spel!

We maken een **spel**! 🎮
Een snoepje valt naar beneden. Jij bent het mandje onderaan en beweegt met **A** (links) en **B** (rechts).
Vang je het snoepje? **+1 punt!** Mis je het? **Game over!**

### Stap 1: Het mandje

Een **figuurtje** (ook wel *sprite*) is één lampje dat kan bewegen. Je vindt de blokken onder **Geavanceerd → Spel**.

- Maak een variabele **mandje**.
- `stel mandje in op` `maak figuurtje op x 2 y 4`. Dat is onderaan in het midden.

☐ Klaar

### Stap 2: Bewegen met A en B

- `wanneer knop A wordt ingedrukt`: `mandje verander x met -1` (naar links).
- `wanneer knop B wordt ingedrukt`: `mandje verander x met 1` (naar rechts).

☐ Klaar

### Stap 3: Het snoepje

- Maak een variabele **snoepje**.
- Zet in `bij opstarten`: `stel snoepje in op` `maak figuurtje` op **x** = `kies willekeurig 0 tot 4` en **y** = **0** (bovenaan).

☐ Klaar

### Stap 4: Het snoepje valt

- Neem een `de hele tijd` blok.
- `pauzeer 500 ms` en dan `snoepje verander y met 1`. Zo zakt het snoepje elke halve seconde één lampje.

☐ Klaar

### Stap 5: Gevangen of gemist?

- Zet er een `als dan anders als` onder.
- **Als** `snoepje raakt mandje aan?`: `score met 1 wijzigen`, en zet het snoepje terug bovenaan op een willekeurige plek.
- **Anders als** `snoepje y` **= 4** (onderaan, maar niet gevangen): `je bent af`.

☐ Klaar

---

## 🧪 Spelen!

Speel eerst in de simulator. Download het daarna naar je micro:bit. Bij game over toont hij je **score**.

💡 **Extra uitdaging:** maak het spel sneller naarmate je meer punten hebt. Tip: maak de pauze kleiner dan 500.
