import { SubjectInfos } from '../src/subject-infos.js'
import { assert } from '@open-wc/testing'

suite('subject-infos', () => {
  test('is defined', () => {
    const el = document.createElement('esup-subject-infos')
    assert.instanceOf(el, SubjectInfos)
  })
})
