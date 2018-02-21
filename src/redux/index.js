import { combineReducers } from 'redux';
import {
  loadRoutesReducer,
  loadStopsReducer,
  loadDirectionsReducer,
  loadPredicationsReducer,
  changeStopReducer,
  changeDirectionReducer,
  extractGroupsReducer
} from './reducers';

const rootReducer = combineReducers({
  loadRoutesReducer,
  loadStopsReducer,
  loadDirectionsReducer,
  loadPredicationsReducer,
  changeStopReducer,
  changeDirectionReducer,
  extractGroupsReducer
})

export default rootReducer;
