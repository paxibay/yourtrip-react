import { combineReducers } from 'redux';
import {
  routeListReducer,
  changeRouteListReducer,
  changeDirectionReducer,
  selectStopReducer
} from './reducers';

const rootReducer = combineReducers({
  routeListReducer,
  changeRouteListReducer,
  changeDirectionReducer,
  selectStopReducer
})

export default rootReducer;
