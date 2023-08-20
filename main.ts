function isBombHere() {
    
    index = 0
    while (index <= rdmPosX.length - 1) {
        if ([posX, posY] == [rdmPosX[index], rdmPosY[index]]) {
            new theEnd()
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
            return null
        }
        
    }
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    led.unplot(posX, posY)
    posX += 1
    posY = 0
    if (posX > 4) {
        posX = 0
    }
    
    led.plot(posX, posY)
})
class theEnd {
    constructor() {
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
    }
    
}

input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    isBombHere()
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    led.unplot(posX, posY)
    posY += 1
    if (posY > 4) {
        posY = 0
    }
    
    led.plot(posX, posY)
})
let index2 = 0
let index = 0
let posY = 0
let posX = 0
let rdmPosX : number[] = []
let rdmPosY : number[] = []
rdmPosX = []
rdmPosY = []
for (let index3 = 0; index3 < 10; index3++) {
    rdmPosX.push(randint(0, 4))
    rdmPosY.push(randint(0, 4))
}
console.log(rdmPosX)
console.log(rdmPosY)
game.setScore(0)
posX = 0
posY = 0
led.plot(posX, posY)
