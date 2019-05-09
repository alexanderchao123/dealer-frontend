import React, { Component } from 'react'
import DeckBody from './elements/DeckBody'
import CardShow from '../cards/CardShow'
import DeckButton from './elements/DeckButton'
import DeckGridContainer from './elements/DeckGridContainer'
import DeckGrid from './elements/DeckGrid'
import { Grid, withStyles } from '@material-ui/core'

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
      <DeckBody>
        <DeckGridContainer>
          <DeckGrid item xs={1} sm={1} md={1}/>
          {this.renderCards()}
          <DeckGrid item xs={1} sm={1} md={1}/>
        </DeckGridContainer>
        <DeckButton onClick={this.clickHandler}>Draw Cards</DeckButton>
      </DeckBody>
    )
  }
}

export default DeckShow
