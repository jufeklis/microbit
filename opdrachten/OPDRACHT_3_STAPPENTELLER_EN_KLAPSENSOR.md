# 🔴 Opdracht 3: De Echte Stappenteller & Klap-Schakelaar

**Voor:** 5e & 6e leerjaar (voor onderzoekers en uitdagers)  
**Tijd:** ca. 40 - 50 minuten  
**Doel:** Werken met **variabelen** (data bijhouden en ophogen), de **microfoon** (geluidssensor van de V2) en **doel-condities** (*als stappen = 20*).

---

## 🎯 De Missie
We bouwen een echte **fitbit / stappenteller** die je aan je broekzak of enkel kunt hangen!
- Elke stap of sprong telt **+1**.
- Als je in je handen **klapt** 👏 (met de microfoon van de V2), toont hij hoeveel stappen je al hebt gezet!
- Heb je **20 stappen** gehaald? Dan speelt de micro:bit een triomfantelijk feestdeuntje! 🎉

---

## 📋 Stappenplan in MakeCode

### Stap 1: Nieuw project & Variabele maken
1. Ga naar **[makecode.microbit.org](https://makecode.microbit.org/?lang=nl)**.
2. Maak een nieuw project: `Stappenteller`.
3. Ga naar de rode categorie **Variabelen** en klik op **Maak een variabele**.
4. Noem deze variabele: `stappen`.

---

### Stap 2: Starten bij 0
1. Sleep in het blokje `bij opstarten`:  
   `stel [stappen ▼] in op (0)`.
2. `toon nummer (stappen)`.

---

### Stap 3: Stappen tellen bij beweging!
1. Ga naar **Invoer** en sleep het blokje:  
   `bij schudden` (of kies `bij stap`).
2. Sleep erin uit **Variabelen**:  
   `verander [stappen ▼] met (1)`.
3. Speel een heel kort tikje af uit **Muziek**:  
   `speel toontje [Hoge C] voor (1/16) tel`.
4. Toon even 1 stipje in het midden om te zien dat de stap geregistreerd is.

---

### Stap 4: Klappen om je score te zien! 👏 (V2 Geluidssensor)
Op de micro:bit V2 zit een echte ingebouwde microfoon die geluid kan horen.
1. Ga naar **Invoer** en kies:  
   `bij luid geluid`.
2. Sleep erin:  
   `toon nummer (stappen)`.

*Test het uit:* Klap in je handen (of roep hard) en de micro:bit toont meteen je actuele score!

---

### Stap 5: Feestje bij 20 stappen! 🏆
In het `bij schudden` blokje voegen we een controle toe:
1. Ga naar **Logica** en sleep:  
   `als <... = ...> dan`.
2. Vul in:  
   `als < (stappen) = (20) > dan`.
3. Binnenin:
   - `speel melodie [ode ▼] tot gereed` (uit *Muziek*).
   - `toon pictogram [ 🏆 Trofee / Hartje ]`.

---

### Stap 6: Resetten met Knop A+B
Wil je opnieuw beginnen met tellen?
1. Sleep uit **Invoer**:  
   `wanneer knop [A+B ▼] wordt ingedrukt`.
2. `stel [stappen ▼] in op (0)`.
3. `toon nummer (0)`.

Koppel je micro:bit los van de pc, sluit het batterijdoosje aan en ga een rondje rennen op de speelplaats! 🏃
