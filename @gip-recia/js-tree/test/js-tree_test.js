import { JsTree } from '../src/js-tree.js'
import { assert } from '@open-wc/testing'

suite('js-tree', () => {
  test('is defined', () => {
    const el = document.createElement('esup-js-tree')
    assert.instanceOf(el, JsTree)
  })
})
