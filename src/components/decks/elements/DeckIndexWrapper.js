import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  /* width: 25%; */
`

class DeckIndexWrapper extends Component {
  render() {
    return(
      <Fragment>
        <StyledWrapper {...this.props}/>
      </Fragment>
    )
  }
}

export default DeckIndexWrapper
