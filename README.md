# micro:bit in de klas

Lesmateriaal om met **micro:bit** en **Microsoft MakeCode** te leren programmeren in het lager onderwijs (vooral 5e en 6e leerjaar).

## Interactieve MakeCode-tutorials

Leerlingen klikken op een link. MakeCode opent met de tutorial stap voor stap, inclusief de blokjes die ze nodig hebben en hints. Geen account of installatie nodig.

| Tutorial | Wat leer je? | Link |
|---|---|---|
| 😊 Emotie-badge & Muziekdoos (3e–4e lj) | knoppen, pictogrammen, geluid | [Open in MakeCode](https://makecode.microbit.org/?lang=nl#tutorial:https://github.com/jufeklis/microbit/tutorials/emotie-badge) |
| 🎲 Slimme Dobbelsteen (4e–5e lj) | schudden, toeval, animatie, als-dan | [Open in MakeCode](https://makecode.microbit.org/?lang=nl#tutorial:https://github.com/jufeklis/microbit/tutorials/dobbelsteen) |
| 👻 Spookje & Pompoen (3e–4e lj) | knoppen, eigen tekening, geluid | [Open in MakeCode](https://makecode.microbit.org/?lang=nl#tutorial:https://github.com/jufeklis/microbit/tutorials/spook-en-pompoen) |
| 🏃 Stappenteller & Klap-Sensor | variabelen, schudden, microfoon, als-dan | [Open in MakeCode](https://makecode.microbit.org/?lang=nl#tutorial:https://github.com/jufeklis/microbit/tutorials/stappenteller-klapsensor) |
| 🍬 Het Snoepdief-Alarm | lichtsensor, variabelen, en-voorwaarden | [Open in MakeCode](https://makecode.microbit.org/?lang=nl#tutorial:https://github.com/jufeklis/microbit/tutorials/snoepdief-alarm) |
| 🧟 Het Slapende Monster | microfoon, levens, herhaal-lus, spellogica | [Open in MakeCode](https://makecode.microbit.org/?lang=nl#tutorial:https://github.com/jufeklis/microbit/tutorials/slapend-monster) |
| 👻 Spookjacht | radio, signaalsterkte, staafdiagram (klasspel) | [Open in MakeCode](https://makecode.microbit.org/?lang=nl#tutorial:https://github.com/jufeklis/microbit/tutorials/spookjacht) |
| 🎃 De Happende Pompoen | servo, functies, microfoon (nodig: SG90-servo + krokodillenklemmen) | [Open in MakeCode](https://makecode.microbit.org/?lang=nl#tutorial:https://github.com/jufeklis/microbit/tutorials/happende-pompoen) |

De stappenteller, het monster en de pompoen hebben een **micro:bit V2** nodig (microfoon en speaker). Bij de emotie-badge en het spookje werkt enkel de logo-stap alleen op een V2.

## Online bekijken

De klaswebsite staat online op **[https://jufeklis.github.io/microbit/](https://jufeklis.github.io/microbit/)**: lessen, demo-micro:bit, klastimer en uitleg. Het [printbare opdrachtblad voor de pompoen](https://jufeklis.github.io/microbit/site/opdrachtblad-pompoen.html) druk je af vanuit de browser.

De site wordt automatisch bijgewerkt via GitHub Pages (Settings → Pages, branch **main**).

## Wat staat waar?

| Map | Inhoud |
|---|---|
| [`tutorials/`](tutorials) | De MakeCode-tutorials hierboven |
| [`opdrachten/`](opdrachten) | Opdrachtbladen om af te drukken, plus de [startgids voor de juf](opdrachten/startgids-leerkracht.md). |
| [`site/`](site) | Klaswebsite voor op het digibord: opdrachten, klastimer met rolwissel, uitleg om te downloaden. Online op [https://jufeklis.github.io/microbit/](https://jufeklis.github.io/microbit/). |
| [`cadeau/`](cadeau) | Een klein MicroPython-programmaatje (`main.py`) met muziek en hartjes, en het kant-en-klare `liedje.hex` om naar de micro:bit te slepen |

## Een tutorial aanpassen

1. Pas het `.md`-bestand in `tutorials/` aan. Een nieuwe tutorial zet je ook in de `files`-lijst van `pxt.json`.
2. MakeCode laadt altijd de **laatste versie-tag** (`v0.0.5`, `v0.0.6`, …). Verhoog dus `version` in `pxt.json` en push een nieuwe tag met hetzelfde nummer.
3. MakeCode bewaart elke tutorial-link ook een tijdje in een cache. Een wijziging aan een bestaande tutorial kan dus pas na een tijd zichtbaar worden. Een nieuwe tutorial werkt meteen.
4. Test de link in een incognitovenster.

`pxt.json` en het lege `main.ts` zijn nodig zodat MakeCode deze repo als project herkent. Laat ze staan.

Meer over het formaat: [MakeCode tutorial-documentatie](https://makecode.com/writing-docs/tutorials).
