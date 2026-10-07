# 🔴 Opdracht 3: Stappenteller & Klapsensor

**Voor:** 5e & 6e leerjaar
**Tijd:** ca. 45 minuten
**Nodig:** micro:bit **V2** (microfoon en speaker)
**Doel:** werken met een **variabele**, de **microfoon** en een **als-dan**-voorwaarde.

> 💻 Liever stap voor stap op het scherm? Open de [tutorial in MakeCode](https://makecode.microbit.org/?lang=nl#tutorial:https://github.com/jufeklis/microbit/tutorials/stappenteller).

---

## 🎯 De missie
We bouwen een **stappenteller** voor aan je broekzak of enkel.
- Elke stap of sprong telt **+1**.
- **Klap** in je handen 👏 en je ziet hoeveel stappen je al zette.
- Bij **20 stappen** volgt een feestje! 🎉

---

## 📋 Stappenplan

### Stap 1: Een variabele maken
1. Ga naar **[makecode.microbit.org](https://makecode.microbit.org/?lang=nl)** en maak een nieuw project: `Stappenteller`.
2. Open **Variabelen** en klik op **Maak een variabele**. Noem hem `stappen`.
3. Bouw in `bij opstarten`:
   - `stel [stappen ▼] in op (0)`
   - `toon nummer (stappen)`

☐ Er verschijnt een 0.

### Stap 2: Tellen bij schudden
1. Sleep uit **Invoer** het blok `bij schudden`.
2. Zet erin:
   - `verander [stappen ▼] met (1)`
   - `speel toon [Hoge C] voor (1/16) beat` (uit **Muziek**)

### Stap 3: Klappen om je score te zien
1. Sleep uit **Invoer** het blok `bij luid geluid`.
2. Zet erin: `toon nummer (stappen)`

☐ Getest: klappen toont mijn score.

### Stap 4: Feestje bij 20 stappen
Zet in `bij schudden`, onder de toon, een blok uit **Logisch**:
- `als < (stappen) = (20) > dan`
  - `speel [entertainer ▼] tot het klaar is`
  - `toon pictogram [ ❤️ ]`

### Stap 5: Opnieuw beginnen met A+B
1. Sleep `wanneer knop [A+B ▼] wordt ingedrukt` naar je werkveld.
2. Zet erin:
   - `stel [stappen ▼] in op (0)`
   - `toon nummer (stappen)`

---

## 🧪 Testen
- In de **simulator**: klik op **SHAKE** om te stappen. Schuif de **geluidsbalk** omhoog om te "klappen".
- Werkt alles? Klik op **Downloaden**, maak de kabel los, klik het batterijbakje vast en ga een rondje lopen! 🏃

💡 **Extra uitdaging:** toon bij elke stap ook een stipje, of laat het feestje bij 50 stappen nog eens komen.
