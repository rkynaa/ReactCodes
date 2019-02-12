import React, {Component} from 'react';
import './Test.css';


export default class App extends Component {
  handleClick(){
    alert('i am clicked?!');
  }
  render() {
    return (
      <button onClick={()=>this.handleClick()}>
        Click me!
      </button>
    );
  }
}