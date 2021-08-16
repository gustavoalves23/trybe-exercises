import logo from './logo.svg';
import './App.css';
import React from 'react';



class App extends React.Component {

  constructor () {
    super();
    this.button1 = this.button1.bind(this);
    this.button2 = this.button2.bind(this);
    this.button3 = this.button3.bind(this);
    this.state = {
      button1count: 0,
      button2count: 0,
      button3count: 0,
    }
  }

   button1 (button) {
    this.setState((previousValue, _props) => ({
      button1count: previousValue.button1count + 1,
    }))
    if (Number(button.target.innerHTML) % 2 === 0) {
      button.target.className = 'red';
    } else {
      button.target.className = 'green';
    }
    console.log(button.target.className);

  }
   button2 (button) {
    this.setState((previousValue, _props) => ({
      button2count: previousValue.button2count + 1,
    }))
    if (Number(button.target.innerHTML) % 2 === 0) {
      button.target.className = 'red';
    } else {
      button.target.className = 'green';
    }
    console.log(button.target.className);
  }
   button3 (button) {
    this.setState((previousValue, _props) => ({
      button3count: previousValue.button3count + 1,
    }))
    if (Number(button.target.innerHTML) % 2 === 0) {
      button.target.className = 'red';
    } else {
      button.target.className = 'green';
    }
    console.log(button.target.className);

  }


  render() {
    return (
      <div>
        <button className = 'green' onClick={this.button1}>{this.state.button1count}</button>
        <button className = 'green' onClick={this.button2}>{this.state.button2count}</button>
        <button className = 'green' onClick={this.button3}>{this.state.button3count}</button>
        <h1>{this.state.button1count + this.state.button2count + this.state.button3count}</h1>
      </div>
    )
  }
}

export default App;
