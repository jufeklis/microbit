# 🟢 Opdracht 1: De Magische Emotie-Badge & Muziekdoos

**Voor:** 3e & 4e leerjaar (of eerste kennismaking)  
**Tijd:** ca. 20 - 30 minuten  
**Doel:** Leren hoe **invoer** (knopjes A en B) zorgt voor **uitvoer** (lampjes en geluid).

---

## 🎯 De Missie
Maak een echte interactieve badge voor op je trui!
- Als je op **Knop A** drukt, toont de badge een **blij gezichtje** 😊 en speelt een vrolijk toontje.
- Als je op **Knop B** drukt, toont hij een **verdrietig of verbaasd gezichtje** 😮.
- Als je het **gouden logo** bovenaan aanraakt, toont hij een **kloppend hartje**! ❤️

---

## 📋 Stappenplan in MakeCode

### Stap 1: Open MakeCode
1. Ga in de browser naar: **[makecode.microbit.org](https://makecode.microbit.org/?lang=nl)**
2. Klik op de grote knop **Nieuw project**.
3. Geef je project een naam: `Emotie Badge`.

---

### Stap 2: Blij worden met Knop A
1. Ga naar de paarse categorie **Invoer** en sleep het blokje:  
   `wanneer knop [A ▼] wordt ingedrukt` naar je werkveld.
2. Ga naar de blauwe categorie **Basis** en kies:  
   `toon pictogram [ 😊 ]` (of teken zelf een lach met *toon lichtjes*).
3. Ga naar de roze categorie **Muziek** en sleep erin:  
   `speel [ba ding ▼] tot het klaar is`.

*Test het uit in de simulator links:* Klik op knop **A** op de virtuele micro:bit. Hoor en zie je het?

---

### Stap 3: Een ander gevoel met Knop B
1. Sleep opnieuw uit **Invoer**:  
   `wanneer knop [B ▼] wordt ingedrukt`.
2. Sleep erin uit **Basis**:  
   `toon pictogram [ 😢 ]`.
3. Sleep erin uit **Muziek**:  
   `speel [wawawawaa ▼] tot het klaar is`.

---

### Stap 4: Het Gouden Logo aanraken! (micro:bit V2)
1. Ga naar **Invoer** en sleep het blokje:  
   `bij logo [ingedrukt ▼]`.
2. Laat een **kloppend hartje** zien:  
   - `toon pictogram [ ❤️ Groot Hart ]`
   - `pauzeer (ms) (100)`
   - `toon pictogram [ 🤍 Klein Hart ]`
   - `pauzeer (ms) (100)`
   - `toon pictogram [ ❤️ Groot Hart ]`

---

### Stap 5: Op je echte micro:bit zetten! 🚀
1. Sluit de micro:bit met de kabel aan op de computer.
2. Klik linksonder op de grote knop **Downloaden**.
3. Binnen een paar seconden knippert het gele lampje achterop en is hij klaar!
4. Klik een batterijhoudertje vast en draag je badge trots op school!
