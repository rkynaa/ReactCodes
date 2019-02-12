import React from 'react';
import Child from './Child';
export default class Mine extends React.Component {

  constructor(){
    super();
    this.state = {
      //texts : ['React itu Asyik', 'React itu mudah','React itu Cool']
        texts : [] , color : '',counter : 0

    }
  }

  componentDidMount(){
    this.setState(
      {
        texts : ['React itu Asyik', 'React itu mudah','React itu Cool'],
        color:'green'
      }
    )

  }

  changeColor(){
    if (this.state.color === 'green') {
      this.setState({color : 'blue'})
    } else {
      this.setState({color : 'green'})
    }
    this.setState(
      {
        counter : this.state.counter + 1
      }
    )
  }
  render(){
    let texts = this.state.texts.map(function(text) {
      return (
        <Child text = {text}/>
      )
    })
    let style = {color : this.state.color}
      return (
        <div style={style} onClick={()=>this.changeColor()}>
          <div id="mine">
              Halo Dunia JS
          </div>
          <div>
            React JS is cool
          </div>
            {texts}
            {this.state.counter}
        </div>
      );
  }
}
