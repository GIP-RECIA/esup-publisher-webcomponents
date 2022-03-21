import { Utils } from '../src/utils.js'
import { expect } from '@open-wc/testing'

suite('Utils', () => {
  test('is defined', () => {
    expect(Utils.isDefined(undefined)).to.equal(false)
    expect(Utils.isDefined(null)).to.equal(true)
    expect(Utils.isDefined({})).to.equal(true)
    expect(Utils.isDefined([])).to.equal(true)
    expect(Utils.isDefined('')).to.equal(true)
  })

  test('is array', () => {
    expect(Utils.isArray(undefined)).to.equal(false)
    expect(Utils.isArray(null)).to.equal(false)
    expect(Utils.isArray({})).to.equal(false)
    expect(Utils.isArray([])).to.equal(true)
    expect(Utils.isArray(new Array())).to.equal(true)
  })
})
