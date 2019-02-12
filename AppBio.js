import React, {Component} from 'react';
import Job from './components/Job';
import Family from './components/Family';
import School from './components/School';
import './Test.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Job nJob = "Programmer" nPlace = "Google" locatePlace = "Jakarta"/>
        <Family nameMom = "Ajeng" nameDad = "Andi" nOldSib = {2} nYoungSib = {2} />
        <School nSchool = "State University of Jakarta" nPlace = "Jakarta" nTerm = {4} />
      </div>
    );
  }
}