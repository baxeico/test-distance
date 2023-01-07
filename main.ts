basic.forever(function () {
    if (Kitronik_Move_Motor.measure() == 0) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.clearScreen()
    }
})
