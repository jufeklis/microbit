# 🚦 Verkeerslicht

**Voor:** 5e & 6e leerjaar  
**Tijd:** ca. 45 minuten  
**Nodig:** micro:bit, 3 LEDs, 3 weerstanden, breadboard of krokodillenklemmen  
**Doel:** **pinnen** aansturen en een **volgorde** programmeren.

> 💻 Liever stap voor stap op het scherm? Open de [tutorial in MakeCode](https://makecode.microbit.org/?lang=nl#tutorial:https://github.com/jufeklis/microbit/tutorials/verkeerslicht).

---

## 🎯 Bouw een echt verkeerslicht!

We laten drie **echte LEDs** branden: 🔴 rood, 🟠 oranje en 🟢 groen.

Je hebt nodig (bijvoorbeeld uit de **Kitronik Inventor's Kit**):
- 3 LEDs (rood, oranje/geel, groen) en 3 weerstanden
- een breadboard met edge connector, of krokodillenklemmen

## 🎯 Aansluiten

- **Rode** LED ➜ pin **0**
- **Oranje** LED ➜ pin **1**
- **Groene** LED ➜ pin **2**

Het **lange** pootje van de LED gaat naar de pin, het korte via een **weerstand** naar **GND**. Volg de handleiding van je kit.

### Stap 1: Groen licht

- Neem een `de hele tijd` blok.
- `schrijf digitaal pin P2 naar 1`: groen aan!
- `pauzeer 3000 ms` en dan `schrijf digitaal pin P2 naar 0`: groen uit.

☐ Klaar

### Stap 2: Oranje en rood

- Voeg toe: **oranje** (P1) aan, `pauzeer 1000 ms`, oranje uit.
- Dan **rood** (P0) aan, `pauzeer 3000 ms`, rood uit.

☐ Klaar

### Stap 3: Ook op het scherm

- Laat het scherm meedoen: toon een **pijl naar boven** bij groen en een **kruisje** bij rood.

☐ Klaar

---

## 🧪 Testen!

In de simulator zie je de pinnen **0**, **1** en **2** oplichten. Download het en kijk of je LEDs in de juiste volgorde branden.

Brandt een LED niet? Draai hem om: het lange pootje moet naar de pin.

💡 **Extra uitdaging:** maak een **voetgangerslicht**: druk op A en het licht springt sneller op rood.
