input.onButtonPressed(Button.A, function () {
    PixelArray.setBrightness(64)
    PixelArray.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    PixelArray.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
    PixelArray.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
    PixelArray.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    PixelArray.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
    PixelArray.show()
})
input.onButtonPressed(Button.B, function () {
    PixelArray.clear()
    PixelArray.show()
})
let PixelArray: neopixel.Strip = null
PixelArray = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
basic.forever(function () {
    basic.pause(20)
    PixelArray.rotate(1)
    PixelArray.show()
})
