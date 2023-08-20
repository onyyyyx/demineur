def isBombHere():
    global index, index2
    index = 0
    while index <= len(rdmPosX) - 1:
        if [posX, posY] == [rdmPosX[index], rdmPosY[index]]:
            theEnd()
            basic.show_leds("""
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                """)
            index2 = 0
            while index2 <= len(rdmPosX) - 1:
                led.plot(rdmPosX[index2], rdmPosY[index2])
                basic.pause(100)
                index2 += 1
            basic.pause(5000)
            game.game_over()
        else:
            led.plot_brightness(posX, posY, 99)
            index += 1
            game.add_score(1)
            return None

def on_button_pressed_a():
    global posX, posY
    led.unplot(posX, posY)
    posX += 1
    posY = 0
    if posX > 4:
        posX = 0
    led.plot(posX, posY)
input.on_button_pressed(Button.A, on_button_pressed_a)

class theEnd():
    def __init__(self):
        basic.show_leds("""
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            """)
        basic.show_leds("""
            . . # . .
            . # . # .
            # . # . #
            . # . # .
            . . # . .
            """)
        basic.show_leds("""
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            """)
        basic.show_leds("""
            # # # # #
            # # . # #
            # . . . #
            # # . # #
            # # # # #
            """)
        basic.show_leds("""
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
def on_button_pressed_ab():
    isBombHere()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global posY
    led.unplot(posX, posY)
    posY += 1
    if posY > 4:
        posY = 0
    led.plot(posX, posY)
input.on_button_pressed(Button.B, on_button_pressed_b)

index2 = 0
index = 0
posY = 0
posX = 0
rdmPosX: List[number] = []
rdmPosY: List[number] = []
rdmPosX = []
rdmPosY = []
for index3 in range(10):
    rdmPosX.append(randint(0, 4))
    rdmPosY.append(randint(0, 4))
print(rdmPosX)
print(rdmPosY)
game.set_score(0)
posX = 0
posY = 0
led.plot(posX, posY)