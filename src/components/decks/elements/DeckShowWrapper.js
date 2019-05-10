import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div``

class DeckShowWrapper extends Component {
  render() {
    return(
      <Fragment>
        <StyledWrapper {...this.props}/>
      </Fragment>
    )
  }
}

export default DeckShowWrapper
