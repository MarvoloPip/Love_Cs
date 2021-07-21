import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";

// importing other stuff

// import style sheet
import './App.css';
// import components
import Spray from './components/Spray/Spray';
import Background from './components/Background/Background';


function App() {
  return (
    <div>
    {/* <BrowserRouter>
        <Switch>
          <Route path="/" component={App} exact/>
          <Route path="/spray" component={Spray} exact/>
        </Switch>
      </BrowserRouter> */}

    <Background />
    </div>

  );
}

export default App;
