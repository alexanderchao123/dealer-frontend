import React, { Component } from 'react'

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rank: props.rank,
      suit: props.suit
    }
  }

  render() {
    return(
      <h3>This card is the {this.state.rank} of {this.state.suit}</h3>
    )
  }
}

export default Card
