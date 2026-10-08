# ⚡ Reactiespel

**Voor:** 5e & 6e leerjaar  
**Tijd:** ca. 35 minuten  
**Nodig:** micro:bit (V1 of V2)  
**Doel:** **tijd meten**, **variabelen** en **toeval**.

> 💻 Liever stap voor stap op het scherm? Open de [tutorial in MakeCode](https://makecode.microbit.org/?lang=nl#tutorial:https://github.com/jufeklis/microbit/tutorials/reactiespel).

---

## 🎯 Hoe snel ben jij?

Druk op **B** en wacht... Zodra het **hartje** verschijnt, druk je zo snel mogelijk op **A**! ❤️
De micro:bit toont hoeveel **milliseconden** je nodig had. Wie in de klas is het snelst?

Maar opgelet: druk je te vroeg, dan ben je **vals**! 😜

### Stap 1: Twee variabelen

- Maak twee variabelen: **start** (wanneer het hartje verscheen) en **toestand**.
- **toestand** vertelt wat er gebeurt: **0** = niets, **1** = wachten, **2** = hartje staat er.

☐ Klaar

### Stap 2: Start met B

- Sleep `wanneer knop B wordt ingedrukt` naar je werkveld.
- `Wis scherm` en zet **toestand** op **1**.
- `pauzeer` een willekeurige tijd: `kies willekeurig 2000 tot 5000`. Zo weet niemand wanneer het hartje komt!

☐ Klaar

### Stap 3: Het hartje!

- Toon het hartje.
- `stel start in op` `looptijd (ms)`. Dat is de klok van de micro:bit.
- Zet **toestand** op **2**.

☐ Klaar

### Stap 4: Druk op A!

- Sleep `wanneer knop A wordt ingedrukt` naar je werkveld.
- `als` **toestand = 2**: toon `looptijd (ms)` **min** **start**. Dat is jouw reactietijd!
- Zet **toestand** op **0**.

☐ Klaar

### Stap 5: Vals spelen?

Wie drukt terwijl er nog **gewacht** wordt (toestand = 1), is te vroeg!

- Klik op het **+** van het als-blok voor een `anders als`: **toestand = 1**.
- Toon dan een kruisje en de tekst **VALS**.

☐ Klaar

---

## 🧪 Wie is de snelste?

Download het naar je micro:bit en speel om beurten. Schrijf de tijden op het bord. 🏆

Een goede reactietijd is ongeveer **250** milliseconden. Haal jij het?
