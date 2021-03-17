// index.js 
import { combineReducers, createStore } from 'redux'
import * as model from './model'

const reducers = combineReducers({
  ...model
});

const store = createStore(reducers)
export default store;