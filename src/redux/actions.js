import * as types from './actionTypes';
import routeApi from '../api/routeApi';

export function loadRoutesSuccess(routes) {
  return {
    type: types.LOAD_ROUTES_SUCCESS,
    routes
  };
}

export function loadStopsSuccess(stops) {
  return {
    type: types.LOAD_STOPS_SUCCESS,
    stops
  };
}

export function loadDirectionsSuccess(directions) {
  return {
    type: types.LOAD_DIRECTION_SUCCESS,
    directions
  };
}

export function loadPredicationSuccess(direction) {
  return {
    type: types.LOAD_PREDICATION_SUCCESS,
    direction
  };
}

export function changeDirection(direction) {
  return {
    type: types.CHANGE_DIRECTION,
    direction
  }; 
}

export function changeStop(stop) {
  return {
    type: types.CHANGE_STOP,
    stop
  };
}

export function extractStopGroups() {
  return {
    type: types.EXTRACT_GROUPS,
  };
}

// make async call to api, handle promise, 
// dispatch action when promise is resolved
export function loadData() {
  return function (dispatch, getState) {
    dispatch(() =>
      Promise.all([
        dispatch(loadRoutes()),
        dispatch(loadStops()),
        dispatch(loadDirections()),
        dispatch(loadPrediction()),
      ])
    );
  };
}


export function loadRoutes() {
  return function (dispatch) {
    routeApi.fetchList().then(routes => {
      dispatch(loadRoutesSuccess(routes.route));
    });
  };
}

export function loadStops() {
  return function (dispatch) {
    routeApi.fetchStops().then(stops => {
      dispatch(loadStopsSuccess(stops.route.stop));
    });
  };
}

export function loadDirections() {
  return function (dispatch) {
    routeApi.fetchStops().then(stops => {
      dispatch(loadDirectionsSuccess(stops.route.direction));
    });
  };
}

export function loadPrediction() {
  return function (dispatch) {
    routeApi.fetchPredication().then(prediction => {
      dispatch(loadPredicationSuccess(prediction.predictions.direction));
    });
  };
}


