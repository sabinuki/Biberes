import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import { Home } from './containers/Home';
import { SignUp } from './containers/SignUp';
import { SignIn } from './containers/SignIn';
import { StyleChart } from './containers/StyleChart';

export class Default extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/signup">
              <SignUp />
           </Route>
            <Route exact path="/signin">
              <SignIn />
            </Route>
            <Route exact path="/style_chart">
              <StyleChart />
            </Route>
          </Switch>
        </main>
      </div>
    )
  }
}
