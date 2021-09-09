import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Diagnoses } from './containers/Diagnoses.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/diagnoses">
          <Diagnoses/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
