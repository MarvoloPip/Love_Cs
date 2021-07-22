import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// importing other stuff

// import style sheet
import './App.css';
// import components
import Spray from './components/Spray/Spray';
import Background from './components/Background/Background';


function App() {
  return (
    <Router >
      <Switch> 
        <Route exact path="/"><Background/></Route>
        <Route exact path="/spray"><Spray/></Route>
      </Switch>
    </Router>

  );
}

export default App;
