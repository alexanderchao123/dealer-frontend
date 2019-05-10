import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import DeckNewBody from './elements/DeckNewBody'
import DeckHeader from './elements/DeckHeader'
import DeckNewFormWrapper from './elements/DeckNewFormWrapper'
import DeckNewForm from './elements/DeckNewForm'
import DeckNewInput from './elements/DeckNewInput'
import DeckNewSubmitButton from './elements/DeckNewSubmitButton'

class DeckNew extends Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  postDecksAPI = () => {
    return fetch('http://localhost:3000/api/v1/decks', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({deck: this.state})
    })
  }

  createDeck = () => {
    this.postDecksAPI()
    .then(res => res.json())
    .then(deck => {
      console.log(deck)
      this.props.history.push(`/decks/${deck.id}`)
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.createDeck()
  }

  render() {
    return(
      <DeckNewBody>
        <DeckNewFormWrapper>
          <DeckNewForm onSubmit={this.handleSubmit}>
            <DeckHeader>Create A Deck</DeckHeader>
            <DeckNewInput
              type='text'
              name='name'
              value={this.state.name}
              placeholder='Name of Deck'
              onChange={this.handleChange}
            />
            <DeckNewSubmitButton>Submit</DeckNewSubmitButton>
          </DeckNewForm>
        </DeckNewFormWrapper>
      </DeckNewBody>
    )
  }
}

export default withRouter(DeckNew)
