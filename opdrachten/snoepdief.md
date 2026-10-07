# 🍬 Halloween Opdracht 2: Het Snoepdief-Alarm

**Voor:** 5e & 6e leerjaar
**Tijd:** ca. 40 minuten
**Nodig:** micro:bit (V1 of V2; geluid alleen op V2 of met een luidsprekertje)
**Doel:** werken met de **lichtsensor**, **variabelen** en een **en**-voorwaarde.

> 💻 Liever stap voor stap op het scherm? Open de [tutorial in MakeCode](https://makecode.microbit.org/?lang=nl#tutorial:https://github.com/jufeklis/microbit/tutorials/snoepdief).

---

## 🎯 De missie
Iemand pikt je Halloween-snoep? Niet meer!
- Leg de micro:bit in een **donkere** snoepdoos.
- Gaat de deksel open (er valt **licht** op de micro:bit) of wordt de doos **verschoven**? **ALARM!** 🚨
- Knop **A** zet het alarm aan, knoppen **A+B** samen zetten het uit.

---

## 📋 Stappenplan

### Stap 1: Twee variabelen
1. Maak een nieuw project: `Snoepdief Alarm`.
2. Maak in **Variabelen** twee variabelen: `bewaking` en `alarm`.
3. Bouw in `bij opstarten`:
   - `stel [bewaking ▼] in op (0)`
   - `stel [alarm ▼] in op (0)`
   - `toon nummer (lichtniveau)` (dit zet de lichtsensor aan)

### Stap 2: Bewaking aanzetten met A
Je krijgt 3 seconden om de deksel te sluiten.
- `wanneer knop [A ▼] wordt ingedrukt`
  - `toon nummer (3)` en `pauzeer (ms) (1000)`
  - `toon nummer (2)` en `pauzeer (ms) (1000)`
  - `toon nummer (1)` en `pauzeer (ms) (1000)`
  - `Wis scherm` (brandende lampjes storen de lichtsensor!)
  - `stel [bewaking ▼] in op (1)`

### Stap 3: De lichtval
- `de hele tijd`
  - `als < (bewaking) = (1) > en < (lichtniveau) > (50) > dan`
    - `stel [alarm ▼] in op (1)`

### Stap 4: Ook alarm bij schudden
- `bij schudden`
  - `als < (bewaking) = (1) > dan`
    - `stel [alarm ▼] in op (1)`

### Stap 5: De sirene!
Zet in `de hele tijd`, onder het eerste als-blok, een tweede:
- `als < (alarm) = (1) > dan`
  - `toon pictogram [ 💀 doodshoofd ]`
  - `speel toon [Hoge B] voor (1/4) beat`
  - `speel toon [Hoge E] voor (1/4) beat`

### Stap 6: Uitzetten met de geheime code A+B
- `wanneer knop [A+B ▼] wordt ingedrukt`
  - `stel [bewaking ▼] in op (0)`
  - `stel [alarm ▼] in op (0)`
  - `toon pictogram [ ✔ vinkje ]`

⚠️ Zet **allebei** de variabelen op 0. Zet je alleen `alarm` op 0, dan ziet de lichtsensor nog altijd licht en gaat het alarm meteen weer af!

---

## 🧪 Testen
- In de **simulator**: druk op **A**, wacht tot het scherm leeg is, en schuif dan de **lichtbalk** omhoog of klik op **SHAKE**.
- Op de echte micro:bit: hou je hand over het scherm terwijl je op A drukt (het scherm is ook de lichtsensor). Haal je hand weg na het aftellen.
- Gaat het alarm meteen af? Dan is het te licht. In een echte doos is het donker genoeg. In een heel lichte klas kan je **50** hoger zetten.

Leg de micro:bit in de snoepdoos, druk op A, sluit de deksel... en wacht op de dief! 🍭
