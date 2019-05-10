import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

const StyledParagraph = styled.p`
  font-size: 22px;
  /* width: 50%; */
`

class HomeParagraph extends Component {
  render() {
    return(
      <Fragment>
        <StyledParagraph {...this.props}/>
      </Fragment>
    )
  }
}

export default HomeParagraph
