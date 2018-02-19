import React from 'react';
import { Grid} from 'semantic-ui-react'
import { connect } from 'react-redux';

import { Routes } from './Routes';
import { NextBus } from './NextBus';

class YourTrip extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { routes } = this.props;
    //const { blueprint, dispatch } = this.props; routeList, routeStops, stopPredication 
    return (
      <Grid container>
        <Grid.Column width={3} />
        <Grid.Column width={10}>
          <Routes routes={routes} />
          <NextBus />
        </Grid.Column>
        <Grid.Column width={3} />
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  const routes = state;
  console.log('connect state', state)
  return {
    routes,
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    onMessageClick: (id) => (
      dispatch({
        type: 'DELETE_MESSAGE',
        id: id,
      })
    ),
    dispatch: dispatch,
  }
);

export const YourNextTrip = connect(
  mapStateToProps,
  mapDispatchToProps
)(YourTrip);

