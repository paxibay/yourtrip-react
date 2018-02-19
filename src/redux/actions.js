import * as types from './actionTypes';
import routeApi from '../api/routeApi';

export function loadListSuccess(routeList) {
  return { type: types.LOAD_LIST_SUCCESS, routeList };
}

export function loadStopsSuccess(routeStops) {
  return { type: types.LOAD_STOPS_SUCCESS, routeStops };
}

// make async call to api, handle promise, dispatch action when promise is resolved
export function loadRoutes() {
  return function (dispatch) {
    return routeApi.fetchList().then(routeList => {
      dispatch(loadListSuccess(routeList));
    }).catch(error => {
      throw (error);
    });
  };
}