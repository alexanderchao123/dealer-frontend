import React, { Component } from 'react'

class CardShow extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     rank: props.card.rank,
  //     suit: props.card.suit
  //   }
  // }

  render() {
    return(
      <h3>{this.props.card.rank} of {this.props.card.suit}</h3>
    )
  }
}

export default CardShow
