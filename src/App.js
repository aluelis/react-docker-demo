import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const bgColor1 = process.env.REACT_APP_BG_COLOR_1 || '#222'
const bgColor2 = process.env.REACT_APP_BG_COLOR_2 || '#FFF'
const header = process.env.REACT_APP_HEADER || 'Welcome to this Dockerized React Application'
const description = process.env.REACT_APP_DESCRIPTION || 'Available env variables: REACT_APP_BG_COLOR_1 REACT_APP_BG_COLOR_2 REACT_APP_HEADER REACT_APP_DESCRIPTION'

console.log('env', process.env)
console.log(process.env.REACT_APP_BG_COLOR_1, bgColor1)
console.log(process.env.REACT_APP_BG_COLOR_2, bgColor2)
console.log(process.env.REACT_APP_HEADER, header)
console.log(process.env.REACT_APP_DESCRIPTION, description)


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" style={{backgroundColor: bgColor1}}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{header}</h1>
        </header>
        <p className="App-intro" style={{backgroundColor: bgColor2}}>
          {description}
        </p>
      </div>
    );
  }
}

export default App;
