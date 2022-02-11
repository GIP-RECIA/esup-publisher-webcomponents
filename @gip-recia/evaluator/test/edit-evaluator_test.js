import { EditEvaluator } from '../src/edit-evaluator.js'
import { assert } from '@open-wc/testing'

suite('edit-evaluator', () => {
  test('is defined', () => {
    const el = document.createElement('esup-edit-evaluator')
    assert.instanceOf(el, EditEvaluator)
  })
})
