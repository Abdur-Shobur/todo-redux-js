import { combineReducers } from 'redux'
import filterReducer from './filter/FilterReducer'
import todoReducer from './todo/TodoReducer'
const rootReducer = combineReducers({
  todo: todoReducer,
  filter: filterReducer,
})

export default rootReducer
