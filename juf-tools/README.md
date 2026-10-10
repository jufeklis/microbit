# Juf-tools

Handige programma's voor de leerkracht zelf, geschreven in **MicroPython**.

| Tool | Wat doet het? | micro:bit |
|---|---|---|
| 🤫 **Lawaaimeter** | Staafjes tonen hoe luid de klas is. Te lang te luid? Een boos gezicht. A = minder streng, B = strenger. | V2 (microfoon) |
| 🎲 **Beurtkiezer** | Knop A of schudden kiest wie aan de beurt is, iedereen één keer per ronde. B = hoeveel nog over. | V1 en V2 |
| 🔔 **Quiz-zoemers** | Groepjes zoemen in, de eerste mag antwoorden. De quizmaster deelt punten uit en toont het scorebord. | V1 en V2, 2 tot 6 micro:bits |

## Op de micro:bit zetten

1. Download het `.hex`-bestand van de tool (klik op het bestand en dan op het downloadknopje rechtsboven).
2. Sluit de micro:bit aan en sleep het bestand naar het station **MICROBIT**.
3. Klaar! Het lampje achteraan knippert even.

## Aanpassen

Open het `.py`-bestand in de **[Python Editor](https://python.microbit.org)** (knop *Open…*), pas aan en klik op **Send to micro:bit**. Bovenaan elk programma staan de instellingen die je makkelijk kan veranderen, zoals de `GRENS` van de lawaaimeter of het `AANTAL` leerlingen van de beurtkiezer.

Wil je iets nieuws? Een AI-assistent zoals Claude kan je helpen: beschrijf wat de micro:bit moet doen en vraag om MicroPython-code voor de micro:bit.

## Quiz-zoemers in de klas

- Zet het programma op **alle** micro:bits.
- Bij het opstarten kiest elk groepje zijn **nummer** met knop A en bevestigt met knop B.
- De juf drukt **A en B samen**: die micro:bit wordt de **quizmaster** (je ziet een **?**).
- Groepjes zoemen met A of B. De quizmaster toont wie eerst was.
  - Quizmaster **A** = juist (+1 punt), **B** = fout of volgende vraag, **schudden** = scores tonen.
- Met 6 micro:bits speel je met 5 groepjes. Meer groepjes? Verander `GROEPEN` bovenaan.

## Privacy

De beurtkiezer werkt standaard met **nummers** van de klaslijst. Vul je echte **namen** in, bewaar die versie dan alleen op je eigen computer en zet ze **niet** in deze (openbare) repo.
