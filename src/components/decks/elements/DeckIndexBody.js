import React, { Component } from 'react'
import styled from 'styled-components'

const StyledBody = styled.div`
  height: 100%;
  background-color: #FFFFFF;
  text-align: center;
`

class HomeBody extends Component {
  render() {
    return(
      <StyledBody {...this.props}/>
    )
  }
}

export default HomeBody
