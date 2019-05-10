import React, { Component, Fragment } from 'react'
import { Grid, withStyles } from '@material-ui/core'

const styles = {
  root: {
    maxWidth: '1000px',
    marginLeft: 'auto',
    marginRight: 'auto',
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
          justify='center'
          className={classes.root}
        />
      </Fragment>
    )
  }
}

export default withStyles(styles)(DeckGridContainer)
