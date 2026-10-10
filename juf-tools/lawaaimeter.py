# Lawaaimeter voor de klas (micro:bit V2)
#
# Staafjes tonen hoe luid het is in de klas.
# Is het een tijdje te luid? Dan verschijnt een boos gezicht.
#
# Knop A = minder streng (grens omhoog)
# Knop B = strenger (grens omlaag)

from microbit import *

GRENS = 120             # geluidsniveau (0-255) vanaf wanneer het te luid is
TE_LUID_SECONDEN = 2    # zo lang moet het te luid zijn voor het boze gezicht


def staafjes(hoogte):
    rijen = []
    for y in range(5):
        rijen.append("99999" if 4 - y < hoogte else "00000")
    return Image(":".join(rijen))


luid_sinds = None
while True:
    if button_a.was_pressed():
        GRENS = min(250, GRENS + 10)
        display.scroll(GRENS, delay=60)
    if button_b.was_pressed():
        GRENS = max(20, GRENS - 10)
        display.scroll(GRENS, delay=60)

    niveau = microphone.sound_level()
    if niveau > GRENS:
        if luid_sinds is None:
            luid_sinds = running_time()
        elif running_time() - luid_sinds > TE_LUID_SECONDEN * 1000:
            display.show(Image.ANGRY)
            sleep(2000)
            luid_sinds = None
            continue
    else:
        luid_sinds = None

    display.show(staafjes(min(5, niveau * 5 // GRENS)))
    sleep(100)
