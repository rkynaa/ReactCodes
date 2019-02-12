import React, {Component} from 'react';
import HelloWorld from './components/HelloWorld';
import './Test.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="warna">
          <HelloWorld nama="Rakyan" alamat="Jakarta" umur="20"/>
        </div>
        <div className="warnaHeader">
          <HelloWorld nama="Udin" alamat="Depok" umur="25"/>
        </div>
        <div className="warnaFooter">
          <HelloWorld nama="Bambang" alamat="Surabaya" umur="17"/>
        </div>
      </div>
    );
  }
}