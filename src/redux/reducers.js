import * as Redux from 'redux'
import * as types from './actionTypes';

import initialState from './state';
export function routeListReducer(state = initialState.routeList, action) {
  switch (action.type) {
    case types.LOAD_LIST_SUCCESS:
      console.log('action.routeList', action.routeList);
      return action.routeList;
    default:
      return state;
  }
}

export function routeStopsReducer(state = initialState.routeStops, action) {
  switch (action.type) {
    case types.LOAD_STOPS_SUCCESS:
      console.log('action.routeStops', action.routeStops);
      return state;
    default:
      return state;
  }
}

//function stopPredicationReducer(state = initialState.stopPredication, action = {}) {
//  switch (action.type) {
//    case types.PREDICATION_SUCCESS:
//      console.log('action.routeList', action.stopPredication);
//      return action.stopPredication
//    default:
//      return state;
//  }
//}


