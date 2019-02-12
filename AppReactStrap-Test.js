import React, { Component } from 'react';
import Tombol from './components/Tombol';
import Header from './components/Header';
import JumbotronDemo from './components/Jumbotron';
import Slide from './components/Slide';
import Kartu from './components/Kartu';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Slide/>
        <JumbotronDemo/>
        <Kartu/>
        <Tombol/>
      </div>
    );
  }
}