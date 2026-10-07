# 🍬 Halloween Opdracht 2: Het Snoep-Dief Alarm! (Candy Protector)

**Voor:** 4e & 5e leerjaar (Gemiddeld)  
**Tijd:** ca. 35 - 45 minuten  
**Thema:** Trick or Treat & Beveiliging 🚨  
**Doel:** Werken met **sensoren** (lichtsensor of bewegingssensor), **voorwaarden** (`als ... dan`) en een loeiende sirene.

---

## 🎯 De Missie
Heb jij een kom of doos vol Halloween-snoepjes en wil je voorkomen dat je broer, zus of een monster stiekem een snoepje pikt?  
We bouwen een **echt dievenalarm**:
- Verstop de micro:bit in een donkere snoepdoos of leg hem bovenop de snoeppot.
- Zodra iemand de deksel opent (en er **licht** op de micro:bit valt) OF de doos beweegt...
- **ALARM!** 🚨 
- De micro:bit toont een gevaarlijk doodshoofd 💀 en laat een loeiende politiesirene horen via de speaker!
- Alleen met een **geheime code** (knop A + B) kun jij het alarm weer uitzetten.

---

## 📋 Stappenplan in MakeCode

### Stap 1: Nieuw project
1. Ga naar **[makecode.microbit.org](https://makecode.microbit.org/?lang=nl)**.
2. Noem je project: `Snoep Alarm`.

---

### Stap 2: Variabele 'alarm' maken
1. Ga naar **Variabelen** en maak een variabele genaamd: `alarm_afgegaan`.
2. Sleep in `bij opstarten`:  
   - `stel [alarm_afgegaan ▼] in op (0)`
   - `toon pictogram [ Vinkje ]` (Klaar voor bewaking!).

---

### Stap 3: De Lichtsensor Bewaker (De Valstrik!)
De leds van de micro:bit kunnen ook **meten hoeveel licht** er in de kamer is! In een dichte doos is het donker (lichtniveau < 20). Als de doos opengaat, schiet het licht omhoog (> 50).

1. Sleep in het blokje `de hele tijd` (uit *Basis*):
2. Ga naar **Logica** en sleep een `als <... > ...> dan` blokje.
3. Vul in uit **Invoer** (lichtniveau):  
   `als < (lichtniveau) > (50) > dan`:
   - `stel [alarm_afgegaan ▼] in op (1)`

---

### Stap 4: Het Loeiende Alarm! 🚨
Onder het vorige blokje bouw je de reactie:

1. `als < (alarm_afgegaan) = (1) > dan`:
   - `toon pictogram [ Doodskop / Skelet 💀 ]`
   - `speel toontje [Hoge C] voor (1/8) tel`
   - `speel toontje [Lage C] voor (1/8) tel`
   - `pauzeer (50) ms`
   - `toon lichtjes` (scherm knippert fel)

*Test het uit in de simulator:* Schuif de lichtsensor-schuifknop linksboven in de simulator omhoog. Begint hij te loeien? 🚨

---

### Stap 5: De Geheime Uitschakelcode (Knop A + B)
Jij bent de baas van het snoep, dus jij moet het alarm kunnen stoppen:
1. Sleep uit **Invoer**:  
   `wanneer knop [A+B ▼] wordt ingedrukt`.
2. `stel [alarm_afgegaan ▼] in op (0)`.
3. `wis scherm`.
4. `speel melodie [ba-ding ▼] tot gereed`.

Leg je micro:bit in een doos, doe de deksel dicht en wacht tot iemand de valstrik opent! 🍭
