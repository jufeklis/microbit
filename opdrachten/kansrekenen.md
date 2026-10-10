# 🎲 Kansrekenen met 600 worpen

**Voor:** 5e & 6e leerjaar  
**Tijd:** ca. 40 minuten  
**Nodig:** micro:bit (V1 of V2)  
**Doel:** werken met een **lijst**, een **herhaal-lus** en **kansrekenen**.

> 💻 Liever stap voor stap op het scherm? Open de [tutorial in MakeCode](https://makecode.microbit.org/?lang=nl#tutorial:https://github.com/jufeklis/microbit/tutorials/kansrekenen).

---

## 🎯 Is een dobbelsteen eerlijk?

Als je een dobbelsteen **600 keer** gooit, hoe vaak komt elk getal dan?
Met de hand duurt dat uren. De micro:bit doet het in een paar seconden! 🎲

We gebruiken een **lijst**: zes vakjes, één voor elk getal van de dobbelsteen.

### Stap 1: Een lijst met zes vakjes

- Maak een variabele **tellingen**.
- Zet in `bij opstarten`: `stel tellingen in op` een `lijst van` met **zes nullen**. Klik op het **+** om vakjes toe te voegen.

☐ Klaar

### Stap 2: 600 keer gooien

- `wanneer knop A wordt ingedrukt`
- Zet er `600 keer herhalen` in.
- Maak een variabele **worp** en `stel worp in op` `kies willekeurig 1 tot 6`.

☐ Klaar

### Stap 3: Tellen in de lijst

Het eerste vakje van een lijst heeft nummer **0**. Gooi je een **1**, dan tel je dus op in vakje **0**. Daarom **worp - 1**.

- Zet in de herhaal-lus: `tellingen stel waarde op` **worp - 1** `in op` `tellingen haal waarde op, op` **worp - 1** **+ 1**.
- Toon na de lus een **vinkje**: klaar met gooien!

☐ Klaar

### Stap 4: De uitslag tonen

- `wanneer knop B wordt ingedrukt`
- Gebruik `voor index van 0 tot 5`.
- Toon met `toon tekens` het getal (**index + 1**), een **=** en het aantal in de lijst. Gebruik `voeg samen`.

☐ Klaar

### Stap 5: Opnieuw beginnen

- `wanneer knop A+B wordt ingedrukt`: zet **tellingen** terug op zes nullen en `Wis scherm`.

☐ Klaar

---

## 🧪 Onderzoeken!

Druk op **A** (600 worpen) en daarna op **B** (de uitslag). Schrijf de getallen in een tabel.

🤔 Hoe vaak verwacht je elk getal? (Tip: 600 gedeeld door 6.) Klopt dat ongeveer? Druk nog eens op A: wat gebeurt er als je **1200** of **6000** keer gooit?
