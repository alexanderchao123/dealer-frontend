import React, { Component, Fragment } from 'react'
import { Grid, withStyles } from '@material-ui/core'

const styles = {
  root: {
    width: '80%',
    margin: '0px auto',
    overflow: 'hidden',
  },
}

class DeckGridContainer extends Component {
  render() {
    const { classes } = this.props

    return(
      <Fragment>
        <Grid {...this.props}
          container
          spacing={8}
          className={classes.root}
        />
      </Fragment>
    )
  }
}

export default withStyles(styles)(DeckGridContainer)
