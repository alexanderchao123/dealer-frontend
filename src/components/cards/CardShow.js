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
      <div>
        <h3>{this.props.card.rank} of {this.props.card.suit}</h3>
        <img alt="" src={require(`../../assets/images/${this.props.card.rank + this.props.card.suit}.png`)} />
      </div>
    )
  }
}

export default CardShow
