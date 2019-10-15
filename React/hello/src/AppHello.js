import React, { Component } from 'react';
import HelloWorld from './HelloWorld';

class App extends Component {
  render() {
    return (
      <div className="warni">
        <HelloWorld namaDepan="Dilan" namaBelakang="Ramadhan" />
        <HelloWorld namaDepan="Milea" namaBelakang="Adnan" />
        <HelloWorld namaDepan="Yulia" namaBelakang="Anggraini" />
      </div>
    );
  }
}

export default App;
