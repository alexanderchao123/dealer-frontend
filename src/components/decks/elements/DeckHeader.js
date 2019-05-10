import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

const StyledHeader = styled.h1`
  color: #1C8B0E;
  margin: 50px 0px;
  font-size: 35px;
`

class DeckHeader extends Component {
  render() {
    return(
      <Fragment>
        <StyledHeader {...this.props}/>
      </Fragment>
    )
  }
}

export default DeckHeader
