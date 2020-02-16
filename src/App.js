import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app-panel">
        <div className="title-block">
          <img src={logo} className="app-logo" alt="logo" />
          <h3>PlanIt</h3>
        </div>
      </div>
      <div className="content-pane">
        Game
      </div>
    </div>
  );
}

export default App;
