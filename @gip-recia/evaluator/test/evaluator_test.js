import { Evaluator } from '../src/evaluator.js'
import { assert } from '@open-wc/testing'

suite('evaluator', () => {
  test('is defined', () => {
    const el = document.createElement('esup-evaluator')
    assert.instanceOf(el, Evaluator)
  })
})
