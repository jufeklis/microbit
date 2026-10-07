# 🧟 Halloween Opdracht 3: Het Slapende Monster

**Voor:** 5e & 6e leerjaar
**Tijd:** ca. 50 minuten
**Nodig:** micro:bit **V2** (microfoon en speaker)
**Doel:** werken met de **microfoon**, **levens** bijhouden, een **herhaal-lus** en spellogica.

> 💻 Liever stap voor stap op het scherm? Open de [tutorial in MakeCode](https://makecode.microbit.org/?lang=nl#tutorial:https://github.com/jufeklis/microbit/tutorials/monster).

---

## 🎯 De missie
In het spookhuis slaapt een monster. Jij sluipt in **30 seconden** naar de overkant... zonder een kik te geven!
- Je hebt **3 levens**.
- Maak je lawaai? Dan wordt het monster wakker en verlies je een leven.
- Na 30 seconden nog levens over? **GEWONNEN!** 🏆 Alle levens kwijt? **GAME OVER** 💀

---

## 📋 Stappenplan

### Stap 1: Variabelen klaarzetten
1. Maak een nieuw project: `Slapend Monster`.
2. Maak drie variabelen: `levens`, `bezig` en `wakker`.
3. Bouw in `bij opstarten`:
   - `stel [levens ▼] in op (3)`
   - `stel [bezig ▼] in op (0)`
   - `stel [wakker ▼] in op (0)`
   - `toon pictogram [ 😴 slapend ]`
   - `drempelwaarde van geluid [luid ▼] instellen op (200)`

💡 Een klas is nooit helemaal stil. Door de drempel op 200 te zetten is het monster minder gevoelig.

### Stap 2: Het spel starten met A
- `wanneer knop [A ▼] wordt ingedrukt`
  - `stel [levens ▼] in op (3)`
  - `stel [bezig ▼] in op (1)`
  - `toon pictogram [ 😴 slapend ]`
  - `(30) keer herhalen`
    - `pauzeer (ms) (1000)`
  - `als < (levens) > (0) > dan`
    - `stel [bezig ▼] in op (0)`
    - `toon tekens ["GEWONNEN!"]`

### Stap 3: Lawaai! Het monster ontwaakt
- `bij luid geluid`
  - `als < (bezig) = (1) > en < (wakker) = (0) > dan`
    - `stel [wakker ▼] in op (1)`
    - `verander [levens ▼] met (-1)`
    - `toon pictogram [ 😠 boos ]`
    - `speel toon [Lage C] voor (1) beat`

💡 Met `wakker` telt één geluid maar voor één leven.

### Stap 4: Leef je nog?
Zet in hetzelfde als-blok, onder de toon:
- `als < (levens) = (0) > dan`
  - `stel [bezig ▼] in op (0)`
  - `toon pictogram [ 💀 doodshoofd ]`
- `anders`
  - `toon nummer (levens)`
  - `pauzeer (ms) (1000)`
  - `toon pictogram [ 😴 slapend ]`
- en helemaal onderaan: `stel [wakker ▼] in op (0)`

⚠️ Laat het monster **niet** snurken met een toon in `de hele tijd`. De microfoon hoort de speaker, en dan maakt het monster zichzelf wakker!

---

## 🧪 Testen
- In de **simulator**: druk op **A** en schuif de **geluidsbalk** helemaal omhoog. Verlies je een leven?
- Verliest het monster te snel levens in de klas? Zet de drempel hoger dan 200.

## 🎮 Spelen in de klas
Zet een parcours uit met stoelen. Eén leerling houdt de micro:bit met batterijbakje vast, drukt op **A** en sluipt muisstil naar de overkant. De rest van de klas kijkt muisstil toe. Wie haalt het met 3 volle levens? 🤫
