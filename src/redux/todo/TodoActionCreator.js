import {
  TODO_ADDED,
  TODO_COLOR_SELECTED,
  TODO_DELETED,
  TODO_TOGGLED,
  TODO_ALL_COMPLETED,
  TODO_CLEARED,
} from './TodoactionType'

// 1.todo added  2.toggled  3.color selected
// 4.delete 5.all completed 6.clear completed

// 1. todo added
export const todo_added = (todo) => {
  return {
    type: TODO_ADDED,
    payload: todo,
  }
}

// 2. toggled
export const todo_toggled = (todo_id) => {
  return {
    type: TODO_TOGGLED,
    payload: todo_id,
  }
}

// 0
export const todo_color_selected = (todo_id, color) => {
  return {
    type: TODO_COLOR_SELECTED,
    payload: { todo_id, color },
  }
}

// 4. delete
export const todo_deleted = (todo_id) => {
  return {
    type: TODO_DELETED,
    payload: todo_id,
  }
}

// 5. all completed
export const todo_all_completed = () => {
  return {
    type: TODO_ALL_COMPLETED,
  }
}

// 6. clear completed
export const todo_clear_completed = () => {
  return {
    type: TODO_CLEARED,
  }
}
