import React, { Component } from 'react'
import HomeBody from './elements/HomeBody'
import HomeHeader from './elements/HomeHeader'
import HomeParagraph from './elements/HomeParagraph'

class Home extends Component {
  render() {
    return(
      <HomeBody>
        <HomeHeader>Welcome to Deal-It</HomeHeader>
        <HomeParagraph>
          Deal-It allows you to create a standard deck of 52 cards and draw 5 cards at a time. Click on 'Create Deck' in the navigation bar and input a name for the deck! After you create the deck, you will be re-directed to that specific deck. From there, feel free to draw cards 5 at a time until there are no more cards left. Have fun!
        </HomeParagraph>
      </HomeBody>
    )
  }
}

export default Home
