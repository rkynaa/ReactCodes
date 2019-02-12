import React, {Component} from 'react';
import Array from './components/Array';
import './Test.css';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      texts : ['React itu asyik', 'React itu mudah','React itu cool']
    }
  }
  render() {
    let texts = this.state.texts.map(function(text){
      return(
        <Array text = {text}/>
      )
    })
      return(
        <div className="warna">
          <div id="mine">
            Hello World!~
          </div>
          <div>
            React JS is great!
          </div>
          {texts}
        </div>
      );
  }
}