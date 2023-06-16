basic.forever(function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.pause(200)
    basic.showNumber(5)
    basic.showNumber(0)
    basic.showNumber(2)
})
