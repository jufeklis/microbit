# 🧟 Halloween Opdracht 3: Het Slapende Monster Sluip-Spel

**Voor:** 5e & 6e leerjaar (Uitdaging)  
**Tijd:** ca. 45 - 55 minuten  
**Thema:** Spookhuis & Sluip-Missie 🏚️  
**Doel:** Werken met de **V2 microfoon** (`bij luid geluid`), **levens/scores** (game logica), **meervoudige voorwaarden** en game-ontwerp.

---

## 🎯 De Missie
In het donkere spookhuis slaapt een gevaarlijk monster. Jij moet door de gang sluipen om de magische schat te stelen... **zonder een kick te geven!**
- De micro:bit is het **Slapende Monster**:
  - Zolang het stil is in het lokaal, slaapt het monster rustig (`Zzz...` op het scherm met zacht gesnurk).
  - Je hebt **3 levens** (3 hartjes).
- **Muisstil zijn!** Maakt iemand in het groepje te veel lawaai (geschuifel, gegiechel, klappen of praten)?
  - De microfoon pikt het op: **HET MONSTER ONTWAAKT!** 💥
  - Het monster brult, toont boze bloeddoorlopen ogen en je verliest 1 leven!
- Ben je na **30 seconden** aan de overkant van de klas geslopen met minstens 1 leven over? **GEWONNEN!** 🏆
- Zijn alle levens op? **GAME OVER!** 💀

---

## 📋 Stappenplan in MakeCode

### Stap 1: Variabelen Klaarzetten
Maak twee variabelen aan in **Variabelen**:
1. `levens` (we beginnen met 3 levens)
2. `wakker` (0 = slaapt, 1 = wakker/boos)

In `bij opstarten`:
- `stel [levens ▼] in op (3)`
- `stel [wakker ▼] in op (0)`
- `toon nummer (levens)`

---

### Stap 2: Het Slapende Monster (Rustig Snurken)
In het blokje `de hele tijd`:
1. `als < (wakker) = (0) > dan`:
   - `toon pictogram [ Zzz / Slapend ]`
   - `speel toontje [Lage C] voor (1/2) tel` (zacht snurkgeluid)
   - `pauzeer (1000) ms`

---

### Stap 3: De Geluidssensor: LAWAAI GEDETECTEERD! 👂💥
De micro:bit V2 heeft een ingebouwde microfoon.
1. Sleep uit **Invoer**:  
   `bij luid geluid`.
2. Binnenin:
   - `stel [wakker ▼] in op (1)`
   - `verander [levens ▼] met (-1)`
   - `speel melodie [grommend / stijgend ▼] tot gereed`
   - `toon pictogram [ Boos Gezicht 😠 ]`
   - `pauzeer (1500) ms`

---

### Stap 4: Levens Controleren (Leven we nog?)
Direct onder het boze gezichtje in `bij luid geluid`:
1. Ga naar **Logica** en voeg toe:
   - `als < (levens) <= (0) > dan`:
     - `speel melodie [funeral / droevig ▼] tot gereed`
     - `toon pictogram [ Doodskop 💀 ]`
     - `stop programma`
   - `anders`:
     - Toon het aantal overgebleven hartjes!
     - `stel [wakker ▼] in op (0)` (Monster valt weer in slaap...)

---

### Stap 5: Overwinning met Knop A (Schat Gevonden!)
Heb je de overkant van het lokaal gehaald zonder gepakt te worden?
1. Druk op **Knop A**:
   - `speel melodie [ode ▼] tot gereed`
   - `toon pictogram [ Trofee 🏆 ]`
   - `toon tekst ["GEWONNEN!"]`

---

### 🎮 Spelen in de Klas: De Grote Sluip-Challenge!
Zet een parcours uit met stoelen in de klas. Eén leerling houdt de micro:bit met een batterijbakje in zijn hand en moet muisstil van de ene hoek naar de andere sluipen, terwijl de rest van de klas muisstil toekijkt! Wie haalt het met 3 volle hartjes? 🤫
