import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="/trollMeme.jpg" className="App-logo" alt="logo" />
          <h1 className="App-title">
            Hello World!
          </h1>
        </header>
        <p className="App-intro">
          Let's Code!!
        </p>
      </div>
    );
  }
}

export default App;
