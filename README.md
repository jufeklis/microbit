# micro:bit in de klas

Lesmateriaal om met **micro:bit** en **Microsoft MakeCode** te leren programmeren in het lager onderwijs (vooral 5e en 6e leerjaar).

## Interactieve MakeCode-tutorials

Leerlingen klikken op een link. MakeCode opent met de tutorial stap voor stap, inclusief de blokjes die ze nodig hebben en hints. Geen account of installatie nodig.

| Tutorial | Wat leer je? | Link |
|---|---|---|
| 🏃 Stappenteller & Klap-Sensor | variabelen, schudden, microfoon, als-dan | [Open in MakeCode](https://makecode.microbit.org/?lang=nl#tutorial:https://github.com/jufeklis/microbit/tutorials/stappenteller) |
| 🍬 Het Snoepdief-Alarm | lichtsensor, variabelen, en-voorwaarden | [Open in MakeCode](https://makecode.microbit.org/?lang=nl#tutorial:https://github.com/jufeklis/microbit/tutorials/snoepdief) |
| 🧟 Het Slapende Monster | microfoon, levens, herhaal-lus, spellogica | [Open in MakeCode](https://makecode.microbit.org/?lang=nl#tutorial:https://github.com/jufeklis/microbit/tutorials/monster) |

De stappenteller en het monster hebben een **micro:bit V2** nodig (microfoon en speaker).

## Wat staat waar?

| Map | Inhoud |
|---|---|
| [`tutorials/`](tutorials) | De MakeCode-tutorials hierboven |
| [`opdrachten/`](opdrachten) | Opdrachtbladen om af te drukken, plus de [startgids voor de juf](opdrachten/STARTGIDS_MAKECODE_VOOR_DE_JUF.md) |
| [`site/`](site) | Klaswebsite voor op het digibord: opdrachten, klastimer met rolwissel, uitleg om te downloaden. Open `site/index.html` in de browser. |
| [`cadeau/`](cadeau) | Een klein MicroPython-programmaatje (`main.py`) met muziek en hartjes, en het kant-en-klare `liedje.hex` om naar de micro:bit te slepen |

## Een tutorial aanpassen

1. Pas het `.md`-bestand in `tutorials/` aan.
2. MakeCode bewaart tutorials een tijdje in een cache. Wil je de wijziging meteen zien? Open het project in MakeCode (**Importeren → Importeer van URL** met de link van deze repo) en maak een nieuwe **release** via de GitHub-knop in MakeCode. Een release op github.com zelf leegt de cache niet.
3. Test de link in een incognitovenster.

Meer over het formaat: [MakeCode tutorial-documentatie](https://makecode.com/writing-docs/tutorials).
