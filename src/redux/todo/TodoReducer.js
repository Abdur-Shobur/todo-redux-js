import {
  TODO_ADDED,
  TODO_ALL_COMPLETED,
  TODO_CLEARED,
  TODO_COLOR_SELECTED,
  TODO_DELETED,
  TODO_TOGGLED,
} from './TodoactionType'
import initialState from './TodoInitialState'

const get_maxId = (state) => {
  const mx_id = state.reduce((mx_id, todo) => Math.max(todo.id, mx_id), -1)
  return mx_id + 1
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADDED:
      return [
        ...state,
        {
          id: get_maxId(state),
          text: action.payload,
          complete: false,
        },
      ]
    case TODO_TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo
        }

        return {
          ...todo,
          complete: !todo.complete,
        }
      })

    case TODO_COLOR_SELECTED:
      const { todo_id, color } = action.payload
      return state.map((todo) => {
        if (todo.id !== todo_id) {
          return todo
        }

        return {
          ...todo,
          color: color,
        }
      })

    case TODO_DELETED:
      return state.filter((todo) => todo.id !== action.payload)

    case TODO_ALL_COMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          complete: true,
        }
      })

    case TODO_CLEARED:
      return state.filter((todo) => !todo.complete)

    default:
      return state
  }
}
export default todoReducer
