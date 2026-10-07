# 🟡 Opdracht 2: De Slimme Dobbelsteen & Blad-Steen-Schaar

**Voor:** 4e & 5e leerjaar  
**Tijd:** ca. 30 - 40 minuten  
**Doel:** Werken met de **bewegingssensor** (`bij schudden`), **toeval/kans** (willekeurig getal) en **voorwaarden**.

---

## 🎯 De Missie
Ben je tijdens een bordspel de dobbelsteen kwijt? Geen probleem!  
We bouwen een digitale dobbelsteen:
- Schud de micro:bit ➔ hij toont een willekeurig getal van **1 tot 6**!
- We voegen een spannende rol-animatie toe en een echt dobbel-geluidje.
- Extra uitdaging: maak er een spelletje **Blad-Steen-Schaar** van!

---

## 📋 Stappenplan in MakeCode

### Stap 1: Nieuw project
1. Ga naar **[makecode.microbit.org](https://makecode.microbit.org/?lang=nl)**.
2. Klik op **Nieuw project** en noem het `Dobbelsteen`.

---

### Stap 2: Schudden om te rollen
1. Ga naar **Invoer** en sleep het blokje:  
   `bij schudden`.
2. Ga naar **Basis** en kies:  
   `toon nummer [ 0 ]`.
3. Ga naar de paarse categorie **Rekenen** (Wiskunde) en zoek het blokje:  
   `willekeurig getal van (1) tot (6)`.
4. Sleep dat ronde blokje in plaats van de `0` in `toon nummer`.

*Test het uit in de simulator:* Klik linksboven op de witte knop **SHAKE** op de virtuele micro:bit. Krijg je een getal tussen 1 en 6?

---

### Stap 3: Rol-animatie & Geluid (Echte magie!)
Echte dobbelstenen rollen even voor ze stilvallen. Laten we dat namaken!

In het `bij schudden` blokje zet je nu:
1. `speel toontje [Hoge C] voor (1/16) tel` (uit *Muziek*).
2. `toon lichtjes` (teken 1 willekeurig stipje).
3. `pauzeer (100) ms`.
4. `speel toontje [Midden G] voor (1/16) tel`.
5. `toon lichtjes` (teken 4 stipjes in de hoeken).
6. `pauzeer (100) ms`.
7. `speel melodie [stijgend ▼] tot gereed`.
8. `toon nummer (willekeurig getal van 1 tot 6)`.

---

### ⭐ Bonus Uitdaging: Blad - Steen - Schaar!
Wil je een spelletje spelen tegen je buur?
1. Maak een variabele genaamd `hand`.
2. Bij schudden: maak `hand` een willekeurig getal van `1 tot 3`.
3. Gebruik een **Logica** blokje (`als hand = 1 dan`):
   - 1 = Toon een steen (vierkantje leds)
   - 2 = Toon papier (volledig scherm leds)
   - 3 = Toon schaar (gekruiste leds)
4. Schud samen met je klasgenoot en kijk wie wint! ✊ ✋ ✌️
