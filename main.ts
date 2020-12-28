input.onButtonPressed(Button.A, function () {
    Active = !(Active)
})
let Active = false
let FollowDistanceMin = 10
let FollowDistanceMax = 12
let TooFar = 25
let Speed = 30
Active = false
basic.forever(function () {
    if (Active) {
        if (maqueen.Ultrasonic(PingUnit.Centimeters) < FollowDistanceMin) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, Speed)
            basic.showLeds(`
                # # # # .
                # . . . #
                # # # # #
                # . # . .
                # . . # #
                `)
        }
        if (maqueen.Ultrasonic(PingUnit.Centimeters) > FollowDistanceMax && maqueen.Ultrasonic(PingUnit.Centimeters) <= TooFar) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Speed)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            basic.showLeds(`
                # # # # #
                # . . . .
                # # # . .
                # . . . .
                # . . . .
                `)
        } else {
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        }
        if (maqueen.Ultrasonic(PingUnit.Centimeters) >= FollowDistanceMin && maqueen.Ultrasonic(PingUnit.Centimeters) <= FollowDistanceMax) {
            maqueen.motorStop(maqueen.Motors.All)
            basic.showIcon(IconNames.Happy)
        }
        if (maqueen.Ultrasonic(PingUnit.Centimeters) > TooFar) {
            maqueen.motorStop(maqueen.Motors.All)
            basic.showIcon(IconNames.Sad)
        }
    } else {
        maqueen.motorStop(maqueen.Motors.All)
        basic.showLeds(`
            . . . # .
            # . # . #
            # . # # #
            # . # . #
            . . # . #
            `)
    }
})
