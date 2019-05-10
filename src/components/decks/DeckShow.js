import React, { Component } from 'react'
import DeckShowBody from './elements/DeckShowBody'
import DeckShowWrapper from './elements/DeckShowWrapper'
import CardShow from '../cards/CardShow'
import DeckDrawButton from './elements/DeckDrawButton'
import DeckGridContainer from './elements/DeckGridContainer'
import DeckGrid from './elements/DeckGrid'

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
    return(
      <DeckGrid item xs={2} sm={2} md={2}>
        <CardShow key={index} card={card}/>
      </DeckGrid>
    )
  }

  renderCards = () => {
    return this.state.cards.map(this.displayCards)
  }

  render() {
    return(
      <DeckShowBody>
        <DeckGridContainer>
          {this.renderCards()}
        </DeckGridContainer>
        <DeckDrawButton onClick={this.clickHandler}>Draw Cards</DeckDrawButton>
      </DeckShowBody>
    )
  }
}

export default DeckShow
