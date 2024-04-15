import { ColorPalettePicker } from '../src/color-palette-picker.js'
import { assert } from '@open-wc/testing'

suite('color-palette-picker', () => {
  test('is defined', () => {
    const el = document.createElement('esup-color-palette-picker')
    assert.instanceOf(el, ColorPalettePicker)
  })
})
