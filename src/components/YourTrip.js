import React from 'react';
import { Grid} from 'semantic-ui-react'
import { connect } from 'react-redux';

import { Routes } from './Routes';
import { NextBus } from './NextBus';

class YourTrip extends React.Component {
  render() {
    const { routeList, routeStopes, routeDirection, minutes } = this.props;
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
          <NextBus minutes={minutes}/>
        </Grid.Column>
        <Grid.Column width={3} />
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  let routeList = state.loadRoutesReducer.routes;
  if (Array.isArray(routeList)) {
    routeList = routeList.map(route => {
      return {
        text: route.title,
        value: route.title,
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
      }
    });
  }

  let southStopes = state.loadStopsReducer.stops;
  let northStopes = [];
  if (Array.isArray(southStopes)) {
    southStopes = southStopes.filter(stop => {
      if (Array.isArray(stopsGroup[0])) {
        let index = stopsGroup[0].find(s => s.tag === stop.tag);
        if (index) {
          return true;
        }
        northStopes.push(stop);
      }
      return false;
    }).map(stop => {
      return {
        text: stop.title,
        value: stop.stopId,
      }
    });
  }

  if (Array.isArray(northStopes)) {
    northStopes = northStopes.map(stop => {
      return {
        text: stop.title,
        value: stop.stopId,
      }
    });
  }

  let predictions = state.loadPredicationsReducer.direction.prediction;
  let minutes = -1;
  if (Array.isArray(predictions)) {
    predictions = predictions.map(prediction => prediction.minutes);
    minutes = predictions[0];
  }

  let routeStopes = state.changeDirectionReducer === 'South' ? southStopes : northStopes;

  return {
    routeList,
    routeStopes,
    routeDirection,
    minutes
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    onDirectionClick: (direction) => (
      dispatch({
        type: 'CHANGE_DIRECTION',
        direction: direction,
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
