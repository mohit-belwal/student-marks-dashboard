import React from 'react';
import {Route} from "react-router-dom";
import Navbar from '../src/components/Navbar';
import Home from '../src/components/Home';
import Marks from '../src/components/Marks';
import Leaderboard from './components/Leaderboard';
import './App.css';

function App() {
  return (
    <>
      <Route exact path="/">
        <Navbar/>
        <Home/>
      </Route>

      <Route exact path="/marks">
        <Navbar/>
        <Marks/>
      </Route>

      <Route exact path="/leader-board">
        <Leaderboard/>
      </Route>
    </>
  );
}

export default App;
