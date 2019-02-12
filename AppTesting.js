import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

function FunctionAge(props){
  return <span>{props.age}</span>
}

function FunctionAddr(props){
  return <span>{props.addr}</span>
}

function FunctionDOB(props){
  return <span>{props.DOB}</span>
}

function TabBody(props){
  return (
    <span>
      <tbody>
        <tr>
          <td>
            <h5>
              {props.name}
            </h5>
          </td>
          <td>
            <h5>
              <FunctionAge age={props.age}/>
            </h5>
          </td>
          <td>
            <h5>
              <FunctionAddr addr={props.addr}/>
            </h5>
          </td>
          <td>
            <h5>
              <FunctionDOB DOB={props.DOB}/>
            </h5>
          </td>
        </tr>
      </tbody>
    </span>
  )
}

function Greetings(props){
  return (
    <div align="center">
      <table border="1">
        <thead>
          <tr>
            <th>
              <h3>Name</h3>
            </th>
            <th>
              <h3>Age</h3>
            </th>
            <th>
              <h3>Address</h3>
            </th>
            <th>
              <h3>Date of Birth</h3>
            </th>
          </tr>
        </thead>
        <TabBody name={props.name} age={props.age} addr={props.addr} DOB={props.DOB}/>
      </table>
    </div>
  )
}

function App(){
  return (
    <div>
      Test Fungsi
      <Greetings name="Rakyan" age="20" addr="Jakarta" DOB="03-09-1999"/>
    </div>
  )
}

export default App;
