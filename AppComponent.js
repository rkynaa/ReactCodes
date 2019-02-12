import React, {Component} from 'react';
import './Test.css';

export default class App extends Component {
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillReceiveProps(){
    console.log('componentWillRecieveProps');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    console.log('render');
    return (
      <p>Hello World!</p>
    );
  }
}