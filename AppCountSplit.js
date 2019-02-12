import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class TimeDemo extends Component{
  constructor(props){
    super(props)
    this.state = {
      timeCurr : props.start,
      timeOdd : 0,
      timeEven : 0,
    }
  }

  componentDidMount(){
    this.addInterval = setInterval( () => this.increase(), 1000)
  }

  componentWillMount(){
    clearInterval(this.addInterval)
  }

  increase(){
    const time = parseInt(this.state.timeCurr) + 1;
    if (time % 2 === 0){
      this.setState(
        (state,props) =>
        ({
          timeCurr: time,
          timeOdd: state.timeCurr
        })
      )
    } else {
      this.setState(
        (state,props) =>
        ({
          timeCurr: time,
          timeEven: state.timeCurr
        })
      )
    }
  }

  render(){
    return(
      <div>
        {this.state.timeOdd}
        <br/>
        {this.state.timeEven}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <TimeDemo start="1"/>
        </header>
      </div>
    );
  }
}

export default App;
