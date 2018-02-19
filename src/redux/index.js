import { combineReducers } from 'redux';
import { routeListReducer, routeStopsReducer} from './reducers';

const rootReducer = combineReducers({
  routeListReducer,
  routeStopsReducer
})

export default rootReducer;



//export const reducer = Redux.combineReducers({
//  routeList: routeListReducer,
//  //routeStops: routeStopsReducer,
//  //stopPredication: stopPredicationReducer
//});