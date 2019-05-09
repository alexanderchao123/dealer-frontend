import React, { Component } from 'react'
import { Toolbar, withStyles } from '@material-ui/core'

const styles = {
  root: {
    background: '#FFFFFF',
  },
}

class NavigationToolbar extends Component {
  render() {
    const { classes } = this.props

    return(
      <Toolbar {...this.props}
        classes = {{
          root: classes.root
        }}
      />
    )
  }
}

export default withStyles(styles)(NavigationToolbar)
