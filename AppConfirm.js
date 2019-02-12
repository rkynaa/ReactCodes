import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Clicker(){
  function HandleClick(e){
    var inp = window.confirm('Apakah ini Rakyan?');
    if (inp == true){
      alert('Hello Rakyan!');
    } else {
      alert('Hello... wait, who are you?');
    }
    e.preventDefault();
  }
  
  return (
    <a href="#" onClick={HandleClick}>
      Coba klik!
    </a>
  )
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
          <Clicker/>
        </header>
      </div>
    );
  }
}


// function FunctionAge(props){
//   return <span>{props.age}</span>
// }

// function FunctionAddr(props){
//   return <span>{props.addr}</span>
// }

// function FunctionDOB(props){
//   return <span>{props.DOB}</span>
// }

// function Greetings(props){
//   return (
//     <div align="center">
//       <table border="1">
//         <thead>
//           <tr>
//             <th>
//               <h3>Name</h3>
//             </th>
//             <th>
//               <h3>Age</h3>
//             </th>
//             <th>
//               <h3>Address</h3>
//             </th>
//             <th>
//               <h3>Date of Birth</h3>
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>
//               <h4>{props.name}</h4>
//             </td>
//             <td>
//               <h4><FunctionAge age = {props.age}/></h4>
//             </td>
//             <td>
//               <h4>
//                 <FunctionAddr addr = {props.addr}/>
//               </h4>
//             </td>
//             <td>
//               <h4>
//                 <FunctionDOB DOB = {props.DOB}/>
//               </h4>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   )
// }

// function App(){
//   return (
//     <div>
//       Test Fungsi
//       <Greetings name="Rakyan" age="20" addr="Jakarta" DOB="03-09-1999"/>
//     </div>
//   )
// }

export default App;
