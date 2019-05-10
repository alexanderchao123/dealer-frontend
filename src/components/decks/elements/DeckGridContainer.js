import React, { Component, Fragment } from 'react'
import { Grid, withStyles } from '@material-ui/core'

const styles = {
  container: {
    maxWidth: '1000px',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '250px',
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
          className={classes.container}
        />
      </Fragment>
    )
  }
}

export default withStyles(styles)(DeckGridContainer)
