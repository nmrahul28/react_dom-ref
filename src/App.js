import './App.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class App extends Component {
  constructor() {
    super()
    this.refer = React.createRef();
  }
  store = (str) => {
    this.refer.current.value = str;
  }
  render() {
    return React.createElement('div', { className: 'div_style'},
      React.createElement('h1', {style:{color:'gray'}}, 'My First React Code'),
      React.createElement('ul', {style:{color:'blue'}},
        React.createElement('li', { className: 'first', onClick: () => { this.store('First') } }, 'First'),
        React.createElement('li', { className: 'second', onClick: () => { this.store('Second') } }, 'Second'),
        React.createElement('li', { className: 'third', onClick: () => { this.store('Third') } }, 'Third'),
        React.createElement('li', { className: 'four', onClick: () => { this.store('Fourth') } }, 'Fourth'),
        React.createElement('li', { className: 'five', onClick: () => { this.store('Fifth') } }, 'Fifth')
      ),
      React.createElement('input', { ref: this.refer, style:{color:'green'} })
    )

  }
}
ReactDOM.render(
  React.createElement(App, null),
  document.getElementById("root")
);

export default App;