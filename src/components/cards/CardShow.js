import React, { Component } from 'react'
import styled from 'styled-components'

const CardImage = styled.img`
  height: 100%;
  width: 100%;
`

class CardShow extends Component {
  render() {
    return(
      <div>
        <CardImage alt="" src={require(`../../assets/images/${this.props.card.rank + this.props.card.suit}.png`)}/>
      </div>
    )
  }
}

export default CardShow
