# 🌱 Plantenbewaker

**Voor:** 5e & 6e leerjaar  
**Tijd:** ca. 40 minuten  
**Nodig:** micro:bit, 2 spijkers, 2 krokodillenklemmen, een plant  
**Doel:** **analoog meten**, een **grens** kiezen en een **staafdiagram**.

> 💻 Liever stap voor stap op het scherm? Open de [tutorial in MakeCode](https://makecode.microbit.org/?lang=nl#tutorial:https://github.com/jufeklis/microbit/tutorials/plantenbewaker).

---

## 🎯 Heeft de plant dorst?

We maken een **vochtmeter** voor de klasplant! 🌱
Natte aarde geleidt stroom beter dan droge aarde. Dat meten we met twee **spijkers** in de pot.

Je hebt nodig: 2 grote spijkers (of metalen staafjes) en 2 krokodillenklemmen.

## 🎯 Aansluiten

- Steek de 2 spijkers een paar centimeter uit elkaar in de aarde.
- Spijker 1 ➜ krokodillenklem ➜ pin **0**
- Spijker 2 ➜ krokodillenklem ➜ **3V**

### Stap 1: Vocht meten

- Maak een variabele **vocht**.
- Neem een `de hele tijd` blok.
- `stel vocht in op` `lees analoogpin P0`. Dat geeft een getal van **0** (kurkdroog) tot **1023** (kletsnat).

☐ Klaar

### Stap 2: Een staafdiagram

- Zet er `plot staafdiagram van vocht tot 1023` onder. Hoe natter, hoe meer lampjes!
- `pauzeer 1000 ms`: één meting per seconde is genoeg.

☐ Klaar

### Stap 3: Dorst!

- Zet ertussen een `als dan anders`: is **vocht < 300**?
- Dan toon je het **verdrietige gezichtje**: water geven!
- Anders toon je het staafdiagram.

☐ Klaar

### Stap 4: Het getal bekijken

- `wanneer knop A wordt ingedrukt`: `toon nummer` **vocht**.

☐ Klaar

---

## 🧪 Onderzoeken!

Test in de simulator: schuif de **pin P0** omhoog en omlaag.

Meet daarna in **droge** aarde en in **natte** aarde. Welke getallen krijg je? Pas **300** aan zodat de micro:bit pas verdrietig kijkt als de plant echt water nodig heeft.

💡 Haal de spijkers na het meten uit de pot, anders gaan ze roesten.
