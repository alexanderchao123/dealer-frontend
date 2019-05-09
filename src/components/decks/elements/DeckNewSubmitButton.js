import React, { Component, Fragment } from 'react'
import { Button, withStyles } from '@material-ui/core'

const styles = {
  root: {
    width: '100%',
    height: '45px',
    margin: '5px 0px',
    borderRadius: '0px',
    fontSize: '22px',
    fontWeight: '600',
    color: '#2A603B',
    backgroundColor: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#FFFFFF',
    },
  },
}

class DeckNewSubmitButton extends Component {
  render() {
    const { classes } = this.props
    return(
      <Fragment>
        <Button {...this.props}
          type="submit"
          classes={{
            root: classes.root
          }}
        />
      </Fragment>
    )
  }
}

export default withStyles(styles)(DeckNewSubmitButton)
