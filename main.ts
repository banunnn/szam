input.onButtonPressed(Button.A, function () {
    lenyomva = 1
})
let index = 0
let lenyomva = 0
lenyomva = 0
basic.forever(function () {
    while (lenyomva == 0) {
        index = randint(1, 5)
        if (index == 1) {
            basic.showLeds(`
                . . # . .
                . # # . .
                . . # . .
                . . # . .
                . . # . .
                `)
        } else {
            if (index == 2) {
                basic.showLeds(`
                    . # # # .
                    . . . # .
                    . . # # .
                    . # . . .
                    . # # # .
                    `)
            } else {
                if (index == 3) {
                    basic.showLeds(`
                        . # # # .
                        . . . # .
                        . # # # .
                        . . . # .
                        . # # # .
                        `)
                } else {
                    if (index == 4) {
                        basic.showLeds(`
                            . . . # .
                            . # . # .
                            . # # # .
                            . . . # .
                            . . . # .
                            `)
                    } else {
                        basic.showLeds(`
                            . # # # .
                            . # . . .
                            . # # # .
                            . . . # .
                            . # # # .
                            `)
                    }
                }
            }
        }
    }
})
