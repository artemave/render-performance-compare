const createMonkey = require('browser-monkey/create')
const createTestDiv = require('browser-monkey/lib/createTestDiv')
const hyperdom = require('hyperdom')
const App = require('../hyperdomApp')
const veryLongInput = require('./veryLongInput')

describe('hyperdom perf', () => {
  let page

  beforeEach(() => {
    const $testContainer = createTestDiv()
    hyperdom.append($testContainer, new App())
    page = createMonkey($testContainer)
  })

  it('is fast', async () => {
    await page.find('input').typeIn(veryLongInput())
    await page.find('.stuff').shouldHave({text: veryLongInput()})
  })
})
