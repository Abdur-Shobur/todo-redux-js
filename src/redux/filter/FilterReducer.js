import filterInitialState from './FilterInitialState'
import { FILTER_STATUS_CHECK, FILTER_TOGGLED_COLOR } from './FilterActionType'
const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case FILTER_STATUS_CHECK:
      return {
        ...state,
        status: action.payload,
      }

    case FILTER_TOGGLED_COLOR:
      const { color, change_type } = action.payload
      switch (change_type) {
        case 'added':
          return {
            ...state,
            color: [...state.color, color],
          }
        case 'removed':
          return {
            ...state,
            color: state.color.filter((colors) => colors !== color),
          }

        default:
          return state
      }

    default:
      return state
  }
}

export default filterReducer
