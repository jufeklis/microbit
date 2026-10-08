# 🗳️ Klasstemming

**Voor:** 5e & 6e leerjaar  
**Tijd:** ca. 35 minuten  
**Nodig:** minstens **2 micro:bits** (radio)  
**Doel:** berichten sturen met de **radio** en stemmen **tellen** met variabelen.

> 💻 Liever stap voor stap op het scherm? Open de [tutorial in MakeCode](https://makecode.microbit.org/?lang=nl#tutorial:https://github.com/jufeklis/microbit/tutorials/klasstemming).

---

## 🎯 Stemmen maar!

Moeten we vandaag buiten spelen of binnen? We **stemmen** met de micro:bits! 🗳️
- Knop **A** = stem voor A, knop **B** = stem voor B.
- Elke micro:bit mag maar **één keer** stemmen.
- Alle micro:bits **tellen alle stemmen** via de radio. Druk **A+B** om de uitslag te zien.

Alle groepjes maken **hetzelfde programma**.

### Stap 1: Klaarzetten

- Zet `Radio instellen groep` in `bij opstarten` en kies **7**. Alle micro:bits moeten op dezelfde groep zitten.
- Maak drie variabelen: **stemmenA**, **stemmenB** en **gestemd**, en zet ze op **0**.

☐ Klaar

### Stap 2: Stemmen met A

- `wanneer knop A wordt ingedrukt`
- `als` **gestemd = 0** (je hebt nog niet gestemd):
- `Radio verzend nummer` **1**, `verander stemmenA met 1`, zet **gestemd** op **1** en toon een vinkje.

☐ Klaar

### Stap 3: Stemmen met B

- Doe hetzelfde voor knop **B**, maar stuur **2** en verander **stemmenB**.

☐ Klaar

### Stap 4: De stemmen van de anderen tellen

- `wanneer de radio ontvangt receivedNumber`
- Is **receivedNumber = 1**? Dan `verander stemmenA met 1`. Is het **2**? Dan `verander stemmenB met 1`.

☐ Klaar

### Stap 5: De uitslag!

- `wanneer knop A+B wordt ingedrukt`
- Toon de letter **A**, het aantal **stemmenA**, de letter **B** en het aantal **stemmenB**.

☐ Klaar

### Stap 6: Een nieuwe stemming

- `bij schudden`: zet **stemmenA**, **stemmenB** en **gestemd** terug op **0** en `Wis scherm`.

☐ Klaar

---

## 🧪 Stemmen!

Zet het programma op alle micro:bits. De juf stelt een vraag op het bord, met antwoord **A** of **B**. Iedereen stemt... en dan **A+B** voor de uitslag!

💡 Wil je een nieuwe stemming? Iedereen schudt eerst zijn micro:bit.
