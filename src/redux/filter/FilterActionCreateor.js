import { FILTER_TOGGLED_COLOR, FILTER_STATUS_CHECK } from './FilterActionType'

// 1. filter toggle color  2. statius check

// 1. filter toggle color
export const filter_toggle_color = (color, change_type) => {
  return {
    type: FILTER_TOGGLED_COLOR,
    payload: {
      color,
      change_type,
    },
  }
}

// 2. statius check
export const filter_status_check = (status) => {
  return {
    type: FILTER_STATUS_CHECK,
    payload: status,
  }
}
