# 📡 Morse-berichten

**Voor:** 5e & 6e leerjaar  
**Tijd:** ca. 40 minuten  
**Nodig:** minstens **2 micro:bits** (radio); geluid op V2  
**Doel:** berichten sturen met de **radio** en **morsecode** ontcijferen.

> 💻 Liever stap voor stap op het scherm? Open de [tutorial in MakeCode](https://makecode.microbit.org/?lang=nl#tutorial:https://github.com/jufeklis/microbit/tutorials/morse-berichten).

---

## 🎯 Geheime boodschappen

Vroeger stuurden mensen berichten met **morsecode**: korte en lange piepjes. 📡
- Knop **A** = **kort** ( · )
- Knop **B** = **lang** ( — )

Jouw micro:bit stuurt de piepjes via de radio naar de andere groepjes. Kunnen zij jouw bericht ontcijferen?

## 🎯 De morsetabel

| | | | | |
|---|---|---|---|---|
| A ·— | B —··· | C —·—· | D —·· | E · |
| F ··—· | G ——· | H ···· | I ·· | J ·——— |
| K —·— | L ·—·· | M —— | N —· | O ——— |
| P ·——· | Q ——·— | R ·—· | S ··· | T — |
| U ··— | V ···— | W ·—— | X —··— | Y —·—— |
| Z ——·· | | | | |

Het bekendste bericht: **SOS** = ··· ——— ···

### Stap 1: Hetzelfde kanaal

- Zet `Radio instellen groep` in `bij opstarten` en kies **5**.

☐ Klaar

### Stap 2: Kort met A

- `wanneer knop A wordt ingedrukt`
- `Radio verzend zin` **"."** (een puntje = kort).

☐ Klaar

### Stap 3: Lang met B

- `wanneer knop B wordt ingedrukt`
- `Radio verzend zin` **"-"** (een streepje = lang).

☐ Klaar

### Stap 4: Een bericht ontvangen

- Sleep `wanneer de radio ontvangt receivedString` naar je werkveld.
- `als` **receivedString = "."**: toon een **stipje** en speel een **korte** toon (1/4 beat).
- **anders**: toon een **streepje** en speel een **lange** toon (1 beat).
- Zet er onderaan `Wis scherm`.

☐ Klaar

---

## 🧪 Berichten sturen!

Zet het programma op meerdere micro:bits. Kies een woord, zoek de letters op in de morsetabel en stuur het. Neem even pauze tussen twee letters.

De andere groepjes schrijven op wat ze horen en zien... Wie ontcijfert het bericht? 🕵️

💡 Op een micro:bit **V1** hoor je geen piepjes (geen speaker), maar zie je wel de stipjes en streepjes.
