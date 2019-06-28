const m = require('mithril')
const createMonkey = require('browser-monkey/create')
const createTestDiv = require('browser-monkey/lib/createTestDiv')
const App = require('../mithrilApp')
const veryLongInput = require('./veryLongInput')

describe('mithril perf', () => {
  let page

  beforeEach(() => {
    const $testContainer = createTestDiv()
    m.mount($testContainer, App)
    page = createMonkey($testContainer)
  })

  it('is fast', async () => {
    await page.find('input').typeIn(veryLongInput())
    await page.find('.stuff').shouldHave({text: veryLongInput()})
  })
})
