# Beurtkiezer (micro:bit V1 en V2)
#
# Knop A of schudden = kies wie aan de beurt is.
# Iedereen komt één keer aan de beurt voor er iemand opnieuw gekozen wordt.
# Knop B = toon hoeveel leerlingen nog niet gekozen zijn.
#
# Standaard kiest hij een nummer van de klaslijst (1 tot AANTAL).
# Wil je namen? Vul NAMEN in, maar bewaar die versie alleen op je eigen
# computer: zet geen namen van leerlingen online!

from microbit import *
import music
import random

AANTAL = 22
NAMEN = []      # bijvoorbeeld: ["Emma", "Noah", "Lina"]

lijst = NAMEN or [str(nummer) for nummer in range(1, AANTAL + 1)]
nog_te_kiezen = []


def kies():
    global nog_te_kiezen
    if not nog_te_kiezen:
        nog_te_kiezen = lijst[:]
    # spannende rol-animatie
    for wachttijd in range(40, 200, 20):
        display.show(str(random.randint(0, 9)))
        sleep(wachttijd)
    keuze = random.choice(nog_te_kiezen)
    nog_te_kiezen.remove(keuze)
    music.play(music.BA_DING, wait=False)
    display.scroll(keuze)
    display.show(keuze if len(keuze) == 1 else Image.HAPPY)


display.show(Image.HAPPY)
while True:
    if button_a.was_pressed() or accelerometer.was_gesture("shake"):
        kies()
    if button_b.was_pressed():
        display.scroll(len(nog_te_kiezen) if nog_te_kiezen else len(lijst))
    sleep(50)
