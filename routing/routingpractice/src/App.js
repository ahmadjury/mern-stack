import Main from './components/Mian';
import WithId from './components/WithId';
import WithColors from './components/WithColors';
import {Router} from '@reach/router';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/home"/>
        <WithId path="/:id"/>
        <WithColors path="/:word/:colorW/:colorB"/>
      </Router>
    </div>
  );
}

export default App;