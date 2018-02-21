import { combineReducers } from 'redux';
import {
  loadRoutesReducer,
  loadStopsReducer,
  loadDirectionsReducer,
  loadPredicationsReducer,
  changeStopReducer,
  changeDirectionReducer,
} from './reducers';

const rootReducer = combineReducers({
  loadRoutesReducer,
  loadStopsReducer,
  loadDirectionsReducer,
  loadPredicationsReducer,
  changeStopReducer,
  changeDirectionReducer,
})

export default rootReducer;
