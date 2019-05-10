import React, { Component, Fragment } from 'react'
import { Grid, withStyles } from '@material-ui/core'

const styles = {
  item: {
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
          className={classes.item}
        />
      </Fragment>
    )
  }
}

export default withStyles(styles)(DeckGridContainer)
