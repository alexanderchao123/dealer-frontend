import React, { Component, Fragment } from 'react'
import { Grid, withStyles } from '@material-ui/core'

const styles = {
  root: {
    // width: '80%',
    maxWidth: '1000px',
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
          align="center"
          justify="center"
          className={classes.root}
        />
      </Fragment>
    )
  }
}

export default withStyles(styles)(DeckGridContainer)
