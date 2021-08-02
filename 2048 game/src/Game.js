import React from 'react';
import './styles/HomeV1.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import HomeV1 from "./pages/HomeV1";
import App from "./App"
import Rules from './pages/Rules';

function Game() {
  return (
  
    <div >
        <Router>
                <Switch>
                <Route path="/" exact component={HomeV1}></Route>
                <Route path="/app" exact component={App}></Route>
                <Route path="/rules" exact component={Rules}></Route>
                </Switch> 
        </Router>
    </div>
      
  );
}

export default Game;
