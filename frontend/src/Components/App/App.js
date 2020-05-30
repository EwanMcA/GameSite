import React from 'react';
import { Link, Router } from '@reach/router';

import './App.css';
import Home from '../Home/Home'
import GamePage from '../GamePage/GamePage'

const App = () => {
    return (
        <div className="app">
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="PlanIt">PlanIt</Link>
            </nav>
            <Router>
                <Home path="/" />
                <GamePage path=":gameUrl" />
            </Router>
        </div>
    );
}

export default App;