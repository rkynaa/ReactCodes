import React, {Component} from 'react';
import Coffee from './components/Coffee';
import Glass from './components/Glass';
import Saucer from './components/Saucer';
import './Test.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Coffee bean="Robusta" waterVolume={1} type="Espresso" />
        <Glass color="red"/>
        <Saucer width={100} />
      </div>
    );
  }
}