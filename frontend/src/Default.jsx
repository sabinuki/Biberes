import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import { Diagnoses } from './containers/Diagnoses';
import { SignUp } from './containers/SignUp';
import { SignIn } from './containers/organisms/SignIn';

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
              <Diagnoses />
            </Route>
            <Route exact path="/signup">
              <SignUp />
           </Route>
            <Route exact path="/signin">
              <SignIn />
            </Route>
          </Switch>
        </main>
      </div>
    )
  }
}
