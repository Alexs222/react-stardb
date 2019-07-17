import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';

import SwapiService from '../../services/swapi-service.js';
import DammySwapiService from '../../services/dummy-swapi-service.js';
import ErrorBoundry from '../error-boundry/error-boundry';

import { SwapiServiceProvider } from '../swapi-servis-context';

import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  SecretPage,
  LoginPage
} from '../pages'

import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import StarshipDetails from '../sw-components/starships-details';


export default class App extends Component {

  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false
  }

  onLogin = () => {
    this.setState(
      {isLoggedIn: true}
    )
  }


  onServiceShange = () => {
    this.setState (({swapiService}) => {
        const Service = swapiService instanceof SwapiService ? DammySwapiService : SwapiService;
        return {
          swapiService: new Service()
        }
    })
  }

  render() {
    const { isLoggedIn } = this.state;

    return (

      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService} >
          <Router>
            <div className="stardb-app container">
              <Header 
                onServiceShange={this.onServiceShange}
              />

              <RandomPlanet />

              <Switch>
                <Route path='/' render={() => <h2>Wilcom to StarDb</h2>} exact />
                <Route path='/people/:id?' component={PeoplePage} exact />
                <Route path='/planets' component={PlanetsPage} exact />
                <Route path='/starships' component={StarshipsPage} exact/>
                <Route path="/starships/:id"
                      render={({ match }) => {
                        const { id } = match.params;
                        return <StarshipDetails itemId={id} />
                      }}/>
                <Route path="/login"
                        render= {() =>{
                          return <LoginPage
                          isLoginIn={isLoggedIn}
                          onLogin={this.onLogin} />
                        }}  />
                <Route path="/secret" 
                        render= {() => {
                          return <SecretPage isLoginIn={isLoggedIn}/>
                        }} />
                <Route render={() => { return <h2>Page not found</h2> }} />
              </Switch>
              
            </div>
          </Router>
          
        </SwapiServiceProvider>
      
      </ErrorBoundry>

    );
  }
};


