import React, {Component} from 'react';
import Hello from './components/Hello';
import './Test.css';


export default class App extends Component {
  render() {
    return (
      <div className="warni">
        <Hello namaDepan="Andiana" namaBelakang="Saptono"/>
      </div>
    );
  }
}