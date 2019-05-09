import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom';
import DeckIndex from '../components/decks/DeckIndex'
import DeckNew from '../components/decks/DeckNew'
import DeckShow from '../components/decks/DeckShow'

class DeckContainer extends Component {
  render() {
    return(
      <Fragment>
        <Switch>
          <Route path='/decks/new' component={DeckNew}/>
          <Route path='/decks/:id' component={DeckShow}/>
          <Route path='/decks' component={DeckIndex}/>
        </Switch>
      </Fragment>
    )
  }
}

export default DeckContainer
