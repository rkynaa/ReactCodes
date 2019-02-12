import React, {Component} from 'react';
import Array from './components/Array';
import './Test.css';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      texts : [],
      color : '',
      number : 0
    }
  }
  componentDidMount(){
    this.setState(
      {
        texts: ['React itu asyik', 'React itu mudah','React itu cool'],
        color: 'green'
      }
    )
  }

  ChangeColor(){
    const number = this.state.number +1;
    if (this.state.color === 'green'){
      this.setState(
        {color: 'blue'}
      )
    } else {
      this.setState(
        {color: 'green'}
      )
    }
    this.setState(
      {number}
    )
  }

  render() {
    let texts = this.state.texts.map(function(text){
      return(
        <Array text = {text}/>
      )
    })
    let style = {color : this.state.color}
      return(
        <div className="warna" style = {style}>
          <div id="mine">
            Hello World!~
          </div>
          <div>
            React JS is great!
          </div>
          <div onClick={()=>this.ChangeColor()}>
            {texts}
          </div>
          <div>
            {this.state.number}
          </div>
        </div>
      );
  }
}