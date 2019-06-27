const m = require('mithril')
const createMonkey = require('browser-monkey/create')
const createTestDiv = require('browser-monkey/lib/createTestDiv')
const App = require('../mithrilApp')

function veryLongInput() {
  const veryLongInput = "Carry on my sons forever Carry On when I am gone Carry On when the day is long Forever Carry On For as long as we're together Then forever Carry On"
  return [...Array(20)].map(_ => veryLongInput).join(',')
}

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
