// index.js 
import { combineReducers, createStore } from 'redux'
import * as home from './home'
import * as login from './login'

const reducers = combineReducers({
  ...home,
  ...login
});

const store = createStore(reducers)
export default store;