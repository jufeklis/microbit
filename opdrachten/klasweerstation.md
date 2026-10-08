# 🌡️ Klasweerstation

**Voor:** 5e & 6e leerjaar  
**Tijd:** ca. 30 minuten + een halve dag meten  
**Nodig:** micro:bit **V2**  
**Doel:** werken met **sensoren**, gegevens **loggen** en een **grafiek** lezen.

> 💻 Liever stap voor stap op het scherm? Open de [tutorial in MakeCode](https://makecode.microbit.org/?lang=nl#tutorial:https://github.com/jufeklis/microbit/tutorials/klasweerstation).

---

## 🎯 Welkom, weerman of weervrouw!

We maken een **weerstation** dat de **temperatuur** en het **licht** in de klas meet. 🌡️☀️
De micro:bit onthoudt elke minuut een meting. Achteraf maak je er een **grafiek** van!

⚠️ Je hebt een **micro:bit V2** nodig.

### Stap 1: Hoe warm is het?

- Sleep `wanneer knop A wordt ingedrukt` naar je werkveld.
- Zet er `toon nummer` in met `temperatuur (°C)`.

Klik in de simulator op **A**. Schuif de thermometer omhoog en omlaag.

☐ Klaar

### Stap 2: Hoe licht is het?

- Doe hetzelfde voor knop **B**, maar met `lichtniveau`.

Het lichtniveau gaat van **0** (donker) tot **255** (heel fel).

☐ Klaar

### Stap 3: Elke minuut meten

- Sleep `elk 60000 ms` naar je werkveld. 60000 milliseconden = **1 minuut**.
- Zet er `log data` in.
- Vul twee kolommen in (**column** = naam, **value** = waarde): **temperatuur** met `temperatuur (°C)` en **licht** met `lichtniveau`.

☐ Klaar

### Stap 4: Zien dat hij meet

- Zet in hetzelfde blok ook `wissel x 0 y 0`. Zo knippert er bij elke meting een lampje.

☐ Klaar

---

## 🧪 Meten en de grafiek bekijken

Download het naar je micro:bit en laat hem een **halve dag** in de klas liggen, bijvoorbeeld aan het raam.

Daarna: steek de micro:bit in de computer en open het bestand **MY_DATA.HTM** op de micro:bit. Je ziet al je metingen, en met **Visual preview** zie je een grafiek! 📈

💡 Wanneer was het het warmst? Wanneer werd het donker?
