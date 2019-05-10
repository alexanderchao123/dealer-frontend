import React, { Component } from 'react'
import DeckHeader from './elements/DeckHeader'
import DeckDisplay from './DeckDisplay'
import DeckIndexBody from './elements/DeckIndexBody'
import DeckIndexWrapper from './elements/DeckIndexWrapper'
import { Grid, Paper, withStyles } from '@material-ui/core'

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: `0 ${theme.spacing.unit * 3}px`,
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing.unit}px auto`,
    padding: theme.spacing.unit * 2,
  },
})

class DeckIndex extends Component {
  constructor() {
    super()
    this.state = {
      decks: []
    }
  }

  getDecksAPI = () => {
    return fetch('http://localhost:3000/api/v1/decks')
  }

  loadDecks = () => {
    this.getDecksAPI()
    .then(res => res.json())
    .then(decks => this.setState({decks: decks}))
  }

  displayDecks = (deck, index) => {
    const { classes } = this.props
    return(<Paper key={index} className={classes.paper}>
        <Grid container wrap="nowrap" spacing={16}>
          <Grid item xs zeroMinWidth>
            <DeckDisplay deck={deck}/>
          </Grid>
        </Grid>
      </Paper>
  )}

  componentDidMount() {
    this.loadDecks()
  }

  render() {
    const { classes } = this.props
    let decks = this.state.decks.map(this.displayDecks)
    console.log(this.state)

    return(
      <DeckIndexBody>
        <DeckIndexWrapper className={classes.root}>
          <DeckHeader>Decks Index</DeckHeader>
          {decks}
        </DeckIndexWrapper>
      </DeckIndexBody>
    )
  }
}

export default withStyles(styles)(DeckIndex)
