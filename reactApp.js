const React = require('react')
const r = React.createElement

module.exports = class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({stuff: event.target.value});
  }

  render() {
    return r('main', null, [
      r(
        'input',
        {
          type: 'text',
          onChange: this.handleChange,
          value: this.state.stuff
        }
      ),
      r('div', {className: 'stuff'}, this.state.stuff)
    ])
  }
}
