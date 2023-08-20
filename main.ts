function isBombHere () {
    index = 0
    while (index <= rdmPosX.length - 1) {
        if ([posX, posY] == [rdmPosX[index], rdmPosY[index]]) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                . . # . .
                . . . . .
                `)
            basic.showLeds(`
                . . # . .
                . # . # .
                # . # . #
                . # . # .
                . . # . .
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.showLeds(`
                # # # # #
                # # . # #
                # . . . #
                # # . # #
                # # # # #
                `)
            basic.showLeds(`
                . # . # .
                # . # . #
                . # . # .
                # . # . #
                . # . # .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            index2 = 0
            while (index2 <= rdmPosX.length - 1) {
                led.plot(rdmPosX[index2], rdmPosY[index2])
                basic.pause(100)
                index2 += 1
            }
            basic.pause(5000)
            game.gameOver()
        } else {
            led.plotBrightness(posX, posY, 99)
            index += 1
            game.addScore(1)
        }
    }
}
input.onButtonPressed(Button.A, function () {
    led.unplot(posX, posY)
    posX += 1
    posY = 0
    if (posX > 4) {
        posX = 0
    }
    led.plot(posX, posY)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(posX, posY)
    posY += 1
    if (posY > 4) {
        posY = 0
    }
    led.plot(posX, posY)
})
input.onButtonPressed(Button.AB, function () {
    isBombHere()
})
let index2 = 0
let index = 0
let posY = 0
let posX = 0
let rdmPosY: number[] = []
let rdmPosX: number[] = []
rdmPosX = []
rdmPosY = []
for (let index3 = 0; index3 < 10; index3++) {
    rdmPosX.push(randint(0, 4))
    rdmPosY.push(randint(0, 4))
}
game.setScore(0)
posX = 0
posY = 0
led.plot(posX, posY)
