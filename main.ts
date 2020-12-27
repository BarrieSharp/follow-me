let FollowDistanceMin = 10
let FollowDistanceMax = 12
let TooFar = 25
let Speed = 30
basic.forever(function () {
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
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # . .
            # . . . .
            # . . . .
            `)
    }
    if (maqueen.Ultrasonic(PingUnit.Centimeters) >= FollowDistanceMin && maqueen.Ultrasonic(PingUnit.Centimeters) <= FollowDistanceMax) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.showIcon(IconNames.Happy)
    }
    if (maqueen.Ultrasonic(PingUnit.Centimeters) > TooFar) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.showIcon(IconNames.Sad)
    }
})
