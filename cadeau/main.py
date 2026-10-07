from microbit import *
import music

# 1. Directe aandachttrekker bij het opstarten:
# Knipperend hartje + The Entertainer
for _ in range(2):
    display.show(Image.HEART)
    sleep(150)
    display.show(Image.HEART_SMALL)
    sleep(150)

display.show(Image.HEART)
# Speel een bekend vrolijk liedje (The Entertainer)
music.play(music.ENTERTAINER)

# Begroet de juf op het scherm
display.scroll("Hallo Juf! <3", delay=75)
display.show(Image.HAPPY)

# 2. Interactieve knoppen:
# Knop A = Ode aan de Vreugde (Alle Menschen werden Brüder)
# Knop B = Nyan Cat / vrolijk deuntje
# Gouden logo aanraken = Power up!
while True:
    if button_a.is_pressed():
        display.show(Image.HEART)
        music.play(music.ODE)
        display.show(Image.HAPPY)
    elif button_b.is_pressed():
        display.show(Image.MUSIC_QUAVERS)
        music.play(music.NYAN)
        display.show(Image.HAPPY)
    else:
        try:
            if pin_logo.is_touched():
                display.show(Image.SURPRISED)
                music.play(music.POWER_UP)
                display.show(Image.HAPPY)
        except Exception:
            pass
    sleep(100)
