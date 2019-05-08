import React, { Component } from 'react'

class DeckContainer extends Component {
  constructor() {
    super()
    this.state = {
      decks: []
    }
  }

  render() {
    let decks = this.state.decks.map(deck => {
      return <h1>{deck.id}</h1>
    })

    return(
      <div>
        <h1>Deck Container</h1>
        {decks}
      </div>
    )
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/decks')
    .then(response => response.json())
    .then(json => this.setState({
      decks: [...json]
    }))
  }
}

export default DeckContainer
