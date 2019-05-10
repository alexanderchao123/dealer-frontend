import React, { Component } from 'react'
import styled from 'styled-components'

const StyledBody = styled.div`
  height: 100%;
  text-align: center;
  background-color: #FFFFFF;
`

class HomeBody extends Component {
  render() {
    return(
      <StyledBody {...this.props}/>
    )
  }
}

export default HomeBody
