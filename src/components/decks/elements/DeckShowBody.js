import React, { Component } from 'react'
import styled from 'styled-components'

const StyledBody = styled.div`
  width: 100%
  height: 100%;
  background-image: radial-gradient(#1C8B0E, #16700B, #051702);
  display: table;
`

class DeckShowBody extends Component {
  render() {
    return(
      <StyledBody {...this.props}/>
    )
  }
}

export default DeckShowBody
