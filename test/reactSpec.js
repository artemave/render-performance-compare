const createMonkey = require('browser-monkey/create')
const createTestDiv = require('browser-monkey/lib/createTestDiv')
const ReactDOM = require('react-dom')
const React = require('react')
const App = require('../reactApp')
const veryLongInput = require('./veryLongInput')

describe('react perf', () => {
  let page

  beforeEach(() => {
    const $testContainer = createTestDiv()
    ReactDOM.render(React.createElement(App), $testContainer)
    page = createMonkey($testContainer)
  })

  it('is fast', async function () {
    await page.find('input').typeIn(veryLongInput())
    await page.find('.stuff').shouldHave({text: veryLongInput()})
  })
})
