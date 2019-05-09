import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import DeckDisplay from './DeckDisplay'
import DeckShowBody from './elements/DeckShowBody'

class DeckIndex extends Component {
  constructor() {
    super()
    this.state = {
      decks: []
    }
  }

  getDecksAPI = () => {
    return fetch('http://localhost:3000/api/v1/decks')
  }

  loadDecks = () => {
    this.getDecksAPI()
    .then(res => res.json())
    .then(decks => this.setState({decks: decks}))
  }

  postDecksAPI = () => {
    return fetch('http://localhost:3000/api/v1/decks', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      }
    })
  }

  createDeck = () => {
    this.postDecksAPI()
    .then(res => res.json())
    .then(deck => this.props.history.push(`/decks/${deck.id}`))
  }

  handleClick = (event) => {
    this.createDeck()
  }

  displayDecks = (deck, index) => <DeckDisplay key={index} id={deck.id}/>

  componentDidMount() {
    this.loadDecks()
  }

  render() {
    let decks = this.state.decks.map(this.displayDecks)

    return(
      <DeckShowBody>
        <h1>Decks Index</h1>
        {decks}
        <button type='button' onClick={this.handleClick}>
          Create a Deck
        </button>
      </DeckShowBody>
    )
  }
}

export default withRouter(DeckIndex)
