import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import DeckDisplay from './DeckDisplay'

class DeckIndex extends Component {
  constructor() {
    super()
    this.state = {
      decks: []
    }
  }

  displayDecks = (deck, index) => {
    return <DeckDisplay key={index} id={deck.id}/>
  }

  fetchDecks = () => {
    fetch('http://localhost:3000/api/v1/decks')
    .then(response => response.json())
    .then(json => this.setState({decks: [...json]}))
  }

  // createDeck = () => {
  //   fetch('http://localhost:3000/api/v1/decks', {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accepts: "application/json"
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(json => {
  //     this.props.history.push(`/decks/`)
  //   })
  // }

  clickHandler = (event) => {
    
  }

  componentDidMount() {
    this.fetchDecks()
  }

  render() {
    let decks = this.state.decks.map(this.displayDecks)

    return(
      <div>
        <h1>Decks Index</h1>
        {decks}
        <button type='button' onClick={this.clickHandler}>Create a Deck</button>
      </div>
    )
  }
}

export default withRouter(DeckIndex)
