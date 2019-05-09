import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const StyledLink = styled(Link)`
  color: #1C8B0E;
  text-decoration: none;
`

class NavigationLink extends Component {
  render() {
    return(
      <Fragment>
        <StyledLink {...this.props}/>
      </Fragment>
    )
  }
}

export default NavigationLink
