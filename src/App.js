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
import Disc from './components/Disc/Disc'
import Fb from './components/Feedback/Feedback'

function App() {
  return (
    <Router >
      <Switch> 
        <Route exact path="/"><Background/></Route>
        <Route exact path="/spray"><Spray/></Route>
        <Route exact path="/disclaimer"><Disc/></Route>
        <Route exact path="/feedback"><Fb/></Route>
      </Switch>
    </Router>

  );
}

export default App;
