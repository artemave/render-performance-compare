const m = require('mithril')

module.exports = class App {
  view() {
    return m('main', [
      m(
        'input',
        {
          type: 'text',
          oninput: (e) => this.stuff = e.target.value,
          value: this.stuff
        }
      ),
      m('.stuff', this.stuff)
    ])
  }
}
