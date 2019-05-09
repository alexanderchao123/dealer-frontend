import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/layouts/Home'
import DeckContainer from './containers/DeckContainer'
import './App.css';

class App extends Component {
  render() {
    return(
      <Fragment>
        <Switch>
          <Route path='/decks' component={DeckContainer}/>
          <Route path='/' component={Home}/>
        </Switch>
      </Fragment>
    )
  }
}

export default App;
