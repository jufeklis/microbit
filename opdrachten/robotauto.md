# 🚗 Robotauto

**Voor:** 5e & 6e leerjaar  
**Tijd:** ca. 50 minuten  
**Nodig:** Kitronik :MOVE mini + micro:bit + batterijen  
**Doel:** **servo-motoren** aansturen, **herhalen** en **afstellen**.

> 💻 Liever stap voor stap op het scherm? Open de [tutorial in MakeCode](https://makecode.microbit.org/?lang=nl#tutorial:https://github.com/jufeklis/microbit/tutorials/robotauto).

---

## 🎯 Rijden maar!

We programmeren een **robotauto**: de **Kitronik :MOVE mini**. 🚗
Hij heeft twee **servo's** die rondjes draaien, één per wiel.

- Linkerwiel ➜ pin **P1**
- Rechterwiel ➜ pin **P2**

Bij een draaiende servo betekent **90** stilstaan, **0** en **180** zijn volle snelheid (elk een andere richting).

### Stap 1: Stilstaan bij het opstarten

- Zet in `bij opstarten`: `schrijf servo op pin P1 naar waarde 90` en hetzelfde voor **P2**.
- Toon een `pictogram`.

☐ Klaar

### Stap 2: Vooruit met A

De wielen staan in spiegelbeeld: voor **vooruit** draait het linkerwiel naar **0** en het rechterwiel naar **180**.

- `wanneer knop A wordt ingedrukt`
- P1 naar **0**, P2 naar **180**, `pauzeer 2000 ms`, en dan allebei terug naar **90**.

☐ Klaar

### Stap 3: Draaien met B

Laat beide wielen **dezelfde** kant op draaien, dan draait de auto rond.

- `wanneer knop B wordt ingedrukt`
- P1 en P2 allebei naar **0**, `pauzeer 500 ms`, en dan terug naar **90**.

☐ Klaar

### Stap 4: Een vierkant rijden

- `wanneer knop A+B wordt ingedrukt`
- `4 keer herhalen`: vooruit en draaien.

Komt de auto terug waar hij begon? Pas de **pauze** van het draaien aan tot hij een mooie bocht maakt.

☐ Klaar

---

## 🧪 Rijden!

Download het, zet de schakelaar van de auto aan en zet hem op de grond. 

Rijdt hij niet recht, of beweegt hij een beetje bij **90**? Elke servo is anders: probeer **88** of **92** om echt stil te staan.

💡 **Extra uitdaging:** maak een **afstandsbediening** met een tweede micro:bit en de radio!
