import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

const StyledHeader = styled.h1`
  color: #1C8B0E;
  margin-bottom: 25px;
  font-size: 35px;
`

class HomeHeader extends Component {
  render() {
    return(
      <Fragment>
        <StyledHeader {...this.props}/>
      </Fragment>
    )
  }
}

export default HomeHeader
