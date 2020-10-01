input.onButtonPressed(Button.A, function () {
    binary = "" + binary + "1"
})
input.onButtonPressed(Button.B, function () {
    binary = "" + binary + "0"
})
input.onGesture(Gesture.Shake, function () {
    decimal = 0
    power = 0
    basic.showString(binary)
    index = binary.length - 1
    while (index >= 0) {
        if (binary.charAt(index) == "1") {
            decimal = decimal + 2 ** power
        }
        index += -1
        power += 1
    }
    basic.showString("" + (decimal))
})
let index = 0
let power = 0
let decimal = 0
let binary = ""
binary = ""
