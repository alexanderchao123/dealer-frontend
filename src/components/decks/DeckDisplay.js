import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class DeckDisplay extends Component {
  render() {
    return(
      <Link to={`/decks/${this.props.deck.id}`}>
        Deck Name: {this.props.deck.name}
      </Link>
    )
  }
}

export default DeckDisplay
