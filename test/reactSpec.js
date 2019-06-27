const createMonkey = require('browser-monkey/create')
const createTestDiv = require('browser-monkey/lib/createTestDiv')
const ReactDOM = require('react-dom')
const React = require('react')
const App = require('../reactApp')

function veryLongInput() {
  const veryLongInput = "Carry on my sons forever Carry On when I am gone Carry On when the day is long Forever Carry On For as long as we're together Then forever Carry On"
  return [...Array(20)].map(_ => veryLongInput).join(',')
}

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
