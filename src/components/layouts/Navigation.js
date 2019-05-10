import React, { Component } from 'react'
import NavigationAppBar from './elements/NavigationAppBar'
import NavigationToolbar from './elements/NavigationToolbar'
import NavigationTypography from './elements/NavigationTypography'
import NavigationUnorderedList from './elements/NavigationUnorderedList'
import NavigationList from './elements/NavigationList'
import NavigationLink from './elements/NavigationLink'

class Navigation extends Component {
  render() {
    return(
      <NavigationAppBar>
        <NavigationToolbar>
          <NavigationTypography>
            <NavigationList>
              <NavigationLink to="/">Deal-It</NavigationLink>
            </NavigationList>
          </NavigationTypography>
          <NavigationUnorderedList>
            <NavigationList>
              <NavigationLink to="/decks">View Decks</NavigationLink>
            </NavigationList>
            <NavigationList>
              <NavigationLink to="/decks/new">Create Deck</NavigationLink>
            </NavigationList>
          </NavigationUnorderedList>
        </NavigationToolbar>
      </NavigationAppBar>
    )
  }
}

export default Navigation
