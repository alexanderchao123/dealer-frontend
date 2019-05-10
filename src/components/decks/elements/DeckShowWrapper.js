import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  flex-grow: 1;
  text-align: center;
  display:table-cell
  vertical-align: middle;
`

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
