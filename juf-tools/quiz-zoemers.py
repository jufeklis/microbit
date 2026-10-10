# Quiz-zoemers met scorebord (micro:bit V1 en V2, via de radio)
#
# Zet dit programma op ALLE micro:bits.
# Met 6 micro:bits: 1 quizmaster (de juf) + 5 groepjes.
#
# Bij het opstarten kies je de rol:
#   groepje:     knop A = volgend nummer (1 tot 5), knop B = bevestigen
#   quizmaster:  knoppen A en B samen
#
# Groepje:     druk op A of B om te zoemen. Wie eerst zoemt, mag antwoorden.
# Quizmaster:  A = juist antwoord (+1 punt)
#              B = fout antwoord of volgende vraag (iedereen mag weer zoemen)
#              schudden = toon de scores

from microbit import *
import music
import radio

GROEPEN = 5

radio.config(group=42)
radio.on()


def kies_rol():
    nummer = 1
    display.show(nummer)
    while True:
        if button_a.is_pressed() and button_b.is_pressed():
            display.show("Q")
            while button_a.is_pressed() or button_b.is_pressed():
                sleep(20)
            button_a.was_pressed()
            button_b.was_pressed()
            return 0
        if button_b.was_pressed():
            button_a.was_pressed()
            return nummer
        if button_a.was_pressed():
            nummer = nummer % GROEPEN + 1
            display.show(nummer)
        sleep(50)


def quizmaster():
    scores = [0] * (GROEPEN + 1)
    beurt = 0
    display.show("?")
    while True:
        bericht = radio.receive()
        if bericht and bericht.startswith("zoem:") and beurt == 0:
            beurt = int(bericht[5:])
            radio.send("beurt:%d" % beurt)
            display.show(beurt)
            music.play(music.BA_DING, wait=False)
        if button_a.was_pressed() and beurt:
            scores[beurt] += 1
            radio.send("punt:%d" % beurt)
            display.show(Image.YES)
            sleep(800)
            beurt = 0
            radio.send("reset")
            display.show("?")
        if button_b.was_pressed():
            beurt = 0
            radio.send("reset")
            display.show("?")
        if accelerometer.was_gesture("shake"):
            for groep in range(1, GROEPEN + 1):
                display.scroll("%d:%d" % (groep, scores[groep]), delay=80)
            display.show(beurt if beurt else "?")
        sleep(20)


def groepje(nummer):
    mag_zoemen = True
    display.show(nummer)
    while True:
        if (button_a.was_pressed() or button_b.was_pressed()) and mag_zoemen:
            radio.send("zoem:%d" % nummer)
            mag_zoemen = False
        bericht = radio.receive()
        if bericht == "beurt:%d" % nummer:
            display.show(Image.HAPPY)
            music.play(music.POWER_UP, wait=False)
        elif bericht and bericht.startswith("beurt:"):
            mag_zoemen = False
            display.show(Image.NO)
        elif bericht == "punt:%d" % nummer:
            display.show(Image.HEART)
            music.play(music.JUMP_UP, wait=False)
        elif bericht == "reset":
            mag_zoemen = True
            display.show(nummer)
        sleep(20)


rol = kies_rol()
if rol == 0:
    quizmaster()
else:
    groepje(rol)
