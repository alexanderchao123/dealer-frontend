import React, { Component } from 'react'
import styled from 'styled-components'

const StyledBody = styled.div`
  height: 100%;
  background-image: radial-gradient(#2a603b, black);
`

class DeckBody extends Component {
  render() {
    return(
      <StyledBody {...this.props}/>
    )
  }
}

export default DeckBody
