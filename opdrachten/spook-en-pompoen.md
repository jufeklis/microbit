# 🎃 Halloween Opdracht 1: Het Knipperende Spook & De Boze Pompoen

**Voor:** 3e & 4e leerjaar (Beginners)  
**Tijd:** ca. 25 minuten  
**Thema:** Halloween knutselen & griezelen 👻  
**Doel:** Leren werken met knoppen, animaties (knipperende ogen) en griezelgeluidjes.

---

## 🎯 De Missie
We veranderen jouw micro:bit in een interactief Halloween-figuurtje!  
*Extra knutseltip:* Vouw een papieren oranje pompoen of doe een wit papieren zakdoekje over de micro:bit met twee gaatjes voor de knoppen.

- **Knop A:** Laat een **spookje** 👻 verschijnen dat griezelig zwaait en *"BOOO!"* roept.
- **Knop B:** Laat een griezelige **Jack-o'-lantern pompoen** 🎃 zien met een brede grijns.
- **Gouden Logo:** Het spookje knippert snel met zijn ogen alsof hij schrikt van een heks!

---

## 📋 Stappenplan in MakeCode

### Stap 1: Open MakeCode
1. Ga naar **[makecode.microbit.org](https://makecode.microbit.org/?lang=nl)**.
2. Maak een nieuw project genaamd: `Spookje en Pompoen`.

---

### Stap 2: Knop A = Het Spookje 👻
1. Sleep uit **Invoer**:  
   `wanneer knop [A ▼] wordt ingedrukt`.
2. Sleep erin uit **Basis**:  
   `toon lichtjes` (teken een spookje met uitgestoken armpjes):
   ```text
   . # # # .
   # . # . #
   # # # # #
   # . # . #
   # . . . #
   ```
3. Sleep erin uit **Muziek**:  
   `speel [wawawawaa ▼] tot het klaar is`.

---

### Stap 3: Knop B = De Griezelige Pompoen 🎃
1. Sleep uit **Invoer**:  
   `wanneer knop [B ▼] wordt ingedrukt`.
2. Teken met `toon lichtjes` een pompoen met boze driehoek-oogjes en een gekartelde lach:
   ```text
   . . # . .
   # . . . #
   # # . # #
   . # # # .
   # . # . #
   ```
3. Speel een spannend toontje uit **Muziek**:  
   `speel toon [Lage G] voor (1) beat`.

---

### Stap 4: Gouden Logo = Knipperende Heksen-Ogen!
1. Sleep uit **Invoer**:  
   `bij logo [ingedrukt ▼]`.
2. Maak een knipper-animatie:
   - `toon lichtjes` (ogen wijd open: `•  •`)
   - `pauzeer (ms) (100)`
   - `Wis scherm`
   - `pauzeer (ms) (100)`
   - `toon lichtjes` (ogen wijd open: `•  •`)
   - `pauzeer (ms) (100)`
   - `Wis scherm`
3. Speel een snel trillend toontje af!

---

### ⭐ Extra Halloween Uitdaging
Plak de micro:bit met een plakbandje aan je raam of voordeur tijdens Trick-or-Treat! Als kinderen aanbellen, druk je op Knop A om ze te laten schrikken! 🍬
