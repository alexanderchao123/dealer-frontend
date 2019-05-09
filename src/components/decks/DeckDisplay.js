import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class DeckDisplay extends Component {
  render() {
    return(
      <Link to={`/decks/${this.props.id}`}>
        Deck {this.props.id}
      </Link>
    )
  }
}

export default DeckDisplay
