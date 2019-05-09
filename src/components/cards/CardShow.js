import React, { Component } from 'react'
import styled from 'styled-components'

const CardBody = styled.div`
  border: 1px solid black;
  height: 200px;
  width: 150px;
`

const CardImage = styled.img`
  height: 100%;
  width: 100%;
`

// <img alt="" src={require(`../../assets/images/${this.props.card.rank + this.props.card.suit}.png`)} />
class CardShow extends Component {
  render() {
    return(
      <CardBody>
        <CardImage alt="" src={require(`../../assets/images/${this.props.card.rank + this.props.card.suit}.png`)}/>
      </CardBody>
    )
  }
}

export default CardShow
