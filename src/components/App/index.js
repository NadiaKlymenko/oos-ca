import React, { Component } from 'react';
import logo from '../../assets/images/logo.png';
import CrewContainer from '../CrewContainer';
import Filters from '../Filters';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">OpenOceanStudio: Crew Applications</h1>
        </header>
        <Filters />
        <div className="App-container">
          <div data-test="column-applied" className="App-column">
            <CrewContainer name="Applied" hiringStage="applied" />
          </div>
          <div data-test="column-interviewing" className="App-column">
            <CrewContainer name="Interviewing" hiringStage="interviewing" />
          </div>
          <div data-test="column-hired" className="App-column">
            <CrewContainer name="Hired" hiringStage="hired" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
