import * as types from './actionTypes';
import routeApi from '../api/routeApi';

export function loadRoutesSuccess(routes) {
  return { type: types.LOAD_ROUTES_SUCCESS, routes };
}

export function changeDirection(id) {
  return { type: types.CHANGE_DIRECTION, id }; 
}

export function selectStop(id) {
  return { type: types.SELECT_STOP, id };
}

// make async call to api, handle promise, dispatch action when promise is resolved
export function loadRouteList() {
  return function (dispatch) {
    routeApi.fetchRoutes().then(routes => {
      dispatch(loadRoutesSuccess(routes));
    }).catch(error => {
      throw (error);
    });
  };
}
