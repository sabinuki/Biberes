import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Default } from './Default';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Default} />
      </Switch>
    </Router>
  );
}

export default App;
