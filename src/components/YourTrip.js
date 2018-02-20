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
    const { routeList, routeStopes, routeDirection } = this.props;
    const { onDirectionClick, onStopClick, onRouteClick } = this.props;

    console.log('Array', routeDirection)
    return (
      <Grid container>
        <Grid.Column width={3} />
        <Grid.Column width={10}>
          <Routes
            routeList={routeList}
            routeStopes={routeStopes}
            routeDirection={routeDirection}
            onRouteClick={onRouteClick}
            onDirectionClick={onDirectionClick}
            onStopClick={onStopClick}
          />
          <NextBus />
        </Grid.Column>
        <Grid.Column width={3} />
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  let routeList = state.routeListReducer.list.route;
  if (Array.isArray(routeList)) {
    routeList = routeList.map(route => {
      return {
        text: route.title,
        value: route.title,
        //title: route.title,
        //tag: route.tag
      }
    });
  }
  let routeStopes = Object.assign([], state.routeListReducer.stops.route).stop;
  if (Array.isArray(routeStopes)) {
    routeStopes = routeStopes.map(stop => {
      return {
        text: stop.title,
        value: stop.stopId,
        //lon: stop.lon,
        //title: stop.title,
        //stopId: stop.stopId,
        //tag: stop.tag,
        //lat: stop.lat
      }
    });
  }
  let routeDirection = Object.assign([], state.routeListReducer.stops.route).direction;
  if (Array.isArray(routeDirection)) {
    routeDirection = routeDirection.map(direction => {
      return {
        text: direction.name,
        value: direction.name,
        //"title": "South - 99 Arrow Rd towards Arrow Rd",
        //"useForUI": "true",
        //"tag": "99_0_99",
        //"name": "South",
        //"branch": "99"
      }
    });
  }
  return {
    routeList,
    routeStopes,
    routeDirection,
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    onDirectionClick: (id) => (
      dispatch({
        type: 'CHANGE_DIRECTION',
        id: id,
      })
    ), 
    onStopClick: (id) => (
      dispatch({
        type: 'SELECT_STOP',
        id: id,
      })
    ),
    onRouteClick: () => (
      dispatch({
        type: 'CHANGE_ROUTELIST',
      })
    )
  }
);

export const YourNextTrip = connect(
  mapStateToProps,
  mapDispatchToProps
)(YourTrip);

