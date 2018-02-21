import React from 'react';
import { Grid} from 'semantic-ui-react'
import { connect } from 'react-redux';

import { Routes } from './Routes';
import { NextBus } from './NextBus';

class YourTrip extends React.Component {
  render() {
    const { routeList, routeStopes, routeDirection } = this.props;
    const { onDirectionClick, onStopClick, onRouteClick } = this.props;
    
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
  //console.log('routeListaa', state.loadStopsReducer);
  let routeList = state.loadRoutesReducer.routes;
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

  let routeDirection = state.loadDirectionsReducer.directions;
  let stopsGroup = [];
  if (Array.isArray(routeDirection)) {
    routeDirection = routeDirection.map(direction => {
      stopsGroup.push(direction.stop);
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

  let southStopes = state.loadStopsReducer.stops;
  let northStopes = [];
  if (Array.isArray(southStopes)) {
    southStopes = southStopes.filter(stop => {
      if (Array.isArray(stopsGroup[0])) {
        let index = stopsGroup[0].find(s => s.tag == stop.tag);
        if (index) {
          return true;
        }
        northStopes.push(stop);
      }
    }).map(stop => {
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

  if (Array.isArray(northStopes)) {
    northStopes = northStopes.map(stop => {
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

  console.log('southStopes', southStopes);
  console.log('northStopes', northStopes);

  let routeStopes = false ? southStopes : northStopes;

  return {
    routeList,
    routeStopes,
    routeDirection
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
        type: 'CHANGE_STOP',
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
