import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import { Home } from './containers/Home';
import { BeerStyles } from './containers/BeerStyles';
import { BeerStyle } from './containers/BeerStyle';
import { Breweries } from './containers/Breweries';
import { Brewery } from './containers/Brewery';
import { SignUp } from './containers/SignUp';
import { SignIn } from './containers/SignIn';
import { StyleChart } from './containers/StyleChart';
import { NewBreweryForm } from 'containers/NewBreweryForm';
import { Index as AdminIndex } from 'containers/admin/Index';
import { BreweryUserForm } from 'containers/admin/BreweryUserForm';

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
            <Route exact path="/breweries">
              <Breweries />
            </Route>
            <Route exact path="/breweries/:id"
            render={({ match }) =>
              <Brewery match={match} />
            }>
            </Route>
            <Route exact path="/styles">
              <BeerStyles />
            </Route>
            <Route exact path="/styles/:id"
            render={({ match }) =>
              <BeerStyle match={match} />
            }>
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
            <Route exact path="/newbreweryform">
              <NewBreweryForm />
            </Route>
            <Route exact path="/admin">
              <AdminIndex />
            </Route>
            <Route exact path="/admin/brewery-user-form">
              <BreweryUserForm />
            </Route>
          </Switch>
        </main>
      </div>
    )
  }
}
