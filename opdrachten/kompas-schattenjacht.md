# 🧭 Kompas & schattenjacht

**Voor:** 5e & 6e leerjaar  
**Tijd:** ca. 40 minuten  
**Nodig:** micro:bit (V1 of V2)  
**Doel:** werken met het **kompas**, **graden** en **als-dan-anders**.

> 💻 Liever stap voor stap op het scherm? Open de [tutorial in MakeCode](https://makecode.microbit.org/?lang=nl#tutorial:https://github.com/jufeklis/microbit/tutorials/kompas-schattenjacht).

---

## 🎯 Welkom, ontdekkingsreiziger!

De micro:bit heeft een **kompas** aan boord. 🧭
We maken een kompas dat toont waar het **noorden** is. Daarna gaan jullie op **schattenjacht** met aanwijzingen van de juf, zoals: *"Ga 10 stappen naar het noorden."*

De eerste keer vraagt de micro:bit om het kompas te **ijken**: kantel hem tot alle lampjes branden.

### Stap 1: De richting meten

- Maak een variabele **richting**.
- Neem een `de hele tijd` blok.
- `stel richting in op` `kompasrichting (°)`.

De richting is een getal van **0 tot 359** graden. **0** is het noorden.

☐ Klaar

### Stap 2: Kijk ik naar het noorden?

- Zet er een `als dan anders` onder.
- Kijk je naar het noorden? Dat is als **richting < 45** `of` **richting > 315**.
- Toon dan de letter **N** met `toon tekens`.

☐ Klaar

### Stap 3: Welke kant moet ik op?

Kijk je niet naar het noorden? Dan toont een pijl welke kant je moet draaien.

- Klik op het **+** van het als-blok om een `anders als` toe te voegen: **richting < 180**.
- Gebruik dan `toon pijl` naar het **westen** (draai naar links).
- Bij **anders**: een pijl naar het **oosten** (draai naar rechts).

☐ Klaar

### Stap 4: Exacte graden

- Sleep `wanneer knop A wordt ingedrukt` naar je werkveld.
- Zet er `toon nummer` **richting** in.

Handig voor de schattenjacht: 90° = oost, 180° = zuid, 270° = west.

☐ Klaar

---

## 🧪 Op schattenjacht!

Download het naar je micro:bit. Hou hem **plat** voor je, zoals een echt kompas.

De juf geeft jullie een kaartje met aanwijzingen. Volg de pijlen en tel je stappen... Wie vindt de schat? 💎

💡 Hou de micro:bit weg van metaal en magneten, anders raakt het kompas in de war.
