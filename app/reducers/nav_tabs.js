import createReducer from '../lib/createReducer'
import * as types from '../actions/types'
import * as state_keys from '../lib/state_key'

export const searchedRecipes = createReducer({}, {
  [types.SET_SEARCHED_RECIPES](state, action) {
    let newState = {}
    action.recipes.forEach( (recipe) => {
      let id = recipe.href
      newState[id] = Object.assign({}, recipe, { id });
    });
    return newState;
  },

});

export const navigationTabs = createReducer({ index: 0, key: state_keys.PRODUCTS}, {
  [types.NAVIGATION_TABS](state, action) {
    let newState = {}
      newState = Object.assign({}, state, {key : action.key});
    return newState;
  },

});

