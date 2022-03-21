import { Localization } from '../src/localization.js'
import { assert, expect } from '@open-wc/testing'

suite('localization', () => {
  test('is defined', () => {
    const localization = new Localization({}, '')
    assert.instanceOf(localization, Localization)
  })

  test('get label', () => {
    const localization = new Localization({
      fr: {
        msg: 'message fr',
        msgWithParams: 'message {param1} {param2}'
      }
    }, 'fr')
    expect(localization.getLabel('msg')).to.equal('message fr')
    expect(localization.getLabel('msgWithParams', { 'param1': 'value1', 'param2': 'value2' })).to.equal('message value1 value2')
    expect(localization.getLabel('msg2')).to.equal('msg2')

    localization.lang = 'en'
    expect(localization.getLabel('msg')).to.equal('msg')
  })

  test('merge labels', () => {
    const localization = new Localization({
      fr: {
        msg: 'message fr'
      }
    }, 'fr')
    localization.mergeLabels({
      fr: {
        msg: 'message fr modifié'
      },
      en: {
        msg: 'message en'
      },
    })
    expect(localization.getLabel('msg')).to.equal('message fr modifié')

    localization.lang = 'en'
    expect(localization.getLabel('msg')).to.equal('message en')
  })
})
