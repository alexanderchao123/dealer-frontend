import React, { Component, Fragment } from 'react'
import { Grid, withStyles } from '@material-ui/core'

const styles = {
  root: {
    height: '100%',
  },
}

class DeckGridContainer extends Component {
  render() {
    const { classes } = this.props

    return(
      <Fragment>
        <Grid {...this.props}
          item
          className={classes.root}
        />
      </Fragment>
    )
  }
}

export default withStyles(styles)(DeckGridContainer)
