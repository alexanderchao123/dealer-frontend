import React, { Component } from 'react'
import DeckHeader from './elements/DeckHeader'
import DeckDisplay from './DeckDisplay'
import DeckIndexBody from './elements/DeckIndexBody'

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

  displayDecks = (deck, index) => <DeckDisplay key={index} deck={deck}/>

  componentDidMount() {
    this.loadDecks()
  }

  render() {
    let decks = this.state.decks.map(this.displayDecks)

    return(
      <DeckIndexBody>
        <DeckHeader>Decks Index</DeckHeader>
        {decks}
      </DeckIndexBody>
    )
  }
}

export default DeckIndex
