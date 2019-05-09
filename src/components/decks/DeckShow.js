import React, { Component } from 'react'
import CardShow from '../cards/CardShow'

class DeckShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: []
    }
  }

  drawCards = () => {
    let id = this.props.match.params.id
    fetch(`http://localhost:3000/api/v1/decks/${id}/draw`)
    .then(response => response.json())
    .then(json => this.setState({cards: json}))
  }

  clickHandler = (event) => {
    this.drawCards()
  }

  displayCards = (card, index) => {
    return <CardShow key={index} card={card}/>
  }

  renderCards = () => {
    return this.state.cards.map(this.displayCards)
  }

  render() {
    return(
      <div>
        <h1>Deck Show</h1>
        {this.renderCards()}
        <button type='button' onClick={this.clickHandler}>Draw</button>
      </div>
    )
  }
}

export default DeckShow
