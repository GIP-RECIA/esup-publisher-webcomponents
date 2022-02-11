import { SubjectSearchButton } from '../src/subject-search-button.js'
import { assert } from '@open-wc/testing'

suite('subject-search-button', () => {
  test('is defined', () => {
    const el = document.createElement('esup-subject-search-button')
    assert.instanceOf(el, SubjectSearchButton)
  })
})
