const h = require('hyperdom').html

module.exports = class App {
  render () {
    return h('main', [
      h('input', {type: 'text', binding: [this, 'stuff']}),
      h('.stuff', this.stuff)
    ])
  }
}
