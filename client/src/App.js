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

      <Route path="/marks">
        <Navbar/>
        <Marks/>
      </Route>

      <Route path="/leaderboard">
        <Leaderboard/>
      </Route>
    </>
  );
}

export default App;
