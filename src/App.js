import React, { Component } from 'react';
import './App.css';
import './components/master/MasterComponent'
import MasterComponent from './components/master/MasterComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MasterComponent/>
      </div>
    );
  }
}

export default App;
