input.onButtonPressed(Button.A, function () {
    kogel = game.createSprite(0, 2)
    for (let index = 0; index < 2; index++) {
        kogel.change(LedSpriteProperty.X, 1)
    }
    if (kogel.isTouching(Dummy)) {
        game.removeLife(20)
    }
})
input.onButtonPressed(Button.AB, function () {
    Dummy.delete()
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    basic.pause(200)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.clearScreen()
    basic.clearScreen()
    Dummy = game.createSprite(2, 2)
    game.removeLife(20)
})
let kogel: game.LedSprite = null
let Dummy: game.LedSprite = null
game.setLife(100)
Dummy = game.createSprite(2, 2)
basic.forever(function () {
    turtle.setSpeed(1)
})
