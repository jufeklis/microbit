# 🤸 Springteller voor de turnles

**Voor:** 5e & 6e leerjaar  
**Tijd:** ca. 40 minuten + turnles  
**Nodig:** micro:bit (V1 of V2) + batterijbakje  
**Doel:** de **bewegingssensor**, een **drempel**, **variabelen** en een **record**.

> 💻 Liever stap voor stap op het scherm? Open de [tutorial in MakeCode](https://makecode.microbit.org/?lang=nl#tutorial:https://github.com/jufeklis/microbit/tutorials/springteller).

---

## 🎯 Hoeveel keer spring jij in 30 seconden?

We maken een **springteller**! 🤸
Hou de micro:bit in je hand (of maak hem vast met een elastiekje), druk op **A** en spring zo vaak je kan in **30 seconden**.
De micro:bit voelt elke sprong met zijn **bewegingssensor**.

### Stap 1: Variabelen

- Maak drie variabelen: **sprongen**, **bezig** en **record**.
- Toon een `pictogram` om te tonen dat hij klaar is.

☐ Klaar

### Stap 2: Een sprong voelen

Bij een sprong schokt de micro:bit flink. De **kracht** van de beweging wordt dan groot.

- Neem een `de hele tijd` blok.
- `als` **bezig = 1** `en` `versnelling (mg) kracht` **> 2000**:
- `verander sprongen met 1`, `wissel x 2 y 2` en `pauzeer 300 ms` (zodat één sprong niet dubbel telt).

☐ Klaar

### Stap 3: Start met A

- `wanneer knop A wordt ingedrukt`
- Zet **sprongen** op **0**.
- Tel af: toon **3**, **2**, **1** en `Wis scherm`.
- Zet **bezig** op **1** en wacht 30 seconden: `30 keer herhalen` met `pauzeer 1000 ms`.
- Zet **bezig** daarna op **0** en toon het aantal **sprongen**.

☐ Klaar

### Stap 4: Een nieuw record?

- Zet onderaan in knop A: `als` **sprongen > record**:
- Zet **record** op **sprongen** en toon een **hartje**: nieuw record!

☐ Klaar

### Stap 5: Het record bekijken

- `wanneer knop B wordt ingedrukt`: toon het **record**.

☐ Klaar

---

## 🧪 Springen!

Test in de simulator met **SHAKE**. Download het daarna en spring!

Telt hij te veel of te weinig? Verander **2000**: hoger = alleen harde sprongen tellen, lager = ook kleine sprongetjes.

💡 Wie haalt het hoogste record van de klas? 🏆
