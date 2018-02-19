import React from 'react';
import { Grid} from 'semantic-ui-react'

import { Routes } from './Routes';
import { NextBus } from './NextBus';

export class YourTrip extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
    }
  }
  
  componentDidMount() {

    fetch('json/route-list.json')
      .then((response) => response.json())
      .then((json) =>
        console.log('parsed json', json)
      ).catch(function (ex) {
        console.log('parsing failed', ex)
      })
  
  }

  render() {
    return (
      <Grid container>
        <Grid.Column width={3} />
        <Grid.Column width={10}>
          <Routes />
          <NextBus />
        </Grid.Column>
        <Grid.Column width={3} />
      </Grid>
    )
  }
}

