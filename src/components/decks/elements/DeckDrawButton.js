import React, { Component, Fragment } from 'react'
import { Button, withStyles } from '@material-ui/core'

const styles = {
  root: {
    width: '300px',
    height: '45px',
    margin: '0px 0px 50px 0px',
    borderRadius: '0px',
    fontSize: '22px',
    fontWeight: '600',
    color: '#1C8B0E',
    backgroundColor: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#FFFFFF',
    },
  },
}

class DeckDrawButton extends Component {
  render() {
    const { classes } = this.props
    return(
      <Fragment>
        <Button {...this.props}
          type="button"
          classes={{
            root: classes.root
          }}
        />
      </Fragment>
    )
  }
}

export default withStyles(styles)(DeckDrawButton)
