import * as types from './actionTypes';
import initialState from './state';
export function loadRoutesReducer(state = initialState.route, action) {
  switch (action.type) {
    case types.LOAD_ROUTES_SUCCESS:
      if (!state.loaded) {
        return Object.assign({}, { loaded: true, routes: action.routes });
      }
      return state;
    default:
      return state;
  }
}

export function loadStopsReducer(state = initialState.stop, action) {
  switch (action.type) {
    case types.LOAD_STOPS_SUCCESS:
      if (!state.loaded) {
        return Object.assign({}, { loaded: true, stops: action.stops, nouth: action.stops, south: action.stops });
      }
      return state;
    default:
      return state;
  }
}

export function loadDirectionsReducer(state = initialState.direction, action) {
  switch (action.type) {
    case types.LOAD_DIRECTION_SUCCESS:
      if (!state.loaded) {
        return Object.assign({}, { loaded: true, directions: action.directions });
      }
      return state;
    default:
      return state;
  }
}

export function loadPredicationsReducer(state = initialState.predications, action) {
  switch (action.type) {
    case types.LOAD_PREDICATION_SUCCESS:
      if (!state.loaded) {
        return Object.assign({}, { loaded: true, direction: action.direction });
      }
      return state;
    default:
      return state;
  }
}

export function changeDirectionReducer(state = initialState.currentDir, action) {
  switch (action.type) {
    case types.CHANGE_DIRECTION:
      return action.direction;
    default:
      return state;
  }
}

export function changeStopReducer(state = {}, action) {
  switch (action.type) {
    case types.CHANGE_STOP:
      //alert('changeStopReducer');
      return state;
    default:
      return state;
  }
}
