import { combineReducers } from 'redux';
import * as recipesReducer from './recipes'
import * as navigationReducer from './navigation'
import * as navTabsReducer from './nav_tabs'

export default combineReducers(Object.assign(
  recipesReducer,
  navigationReducer,
  navTabsReducer
));
