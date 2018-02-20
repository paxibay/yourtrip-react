import * as types from './actionTypes';
import initialState from './state';
export function routeListReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_ROUTES_SUCCESS:
      return Object.assign([], state, action.routes)
    default:
      return state;
  }
}

export function changeRouteListReducer(state = {}, action) {
  switch (action.type) {
    case types.CHANGE_ROUTELIST:
      // TODO: 
      return state;
    default:
      return state;
  }
}

export function changeDirectionReducer(state = {}, action) {
  switch (action.type) {
    case types.CHANGE_DIRECTION:
      // TODO: 
      return state;
    default:
      return state;
  }
}

export function selectStopReducer(state = {}, action) {
  switch (action.type) {
    case types.SELECT_STOP:
      // TODO: 
      return state;
    default:
      return state;
  }
}
