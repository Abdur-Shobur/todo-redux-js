import React from 'react'
import { useDispatch } from 'react-redux'
import cancel from '../images/cancel.png'
import {
  todo_color_selected,
  todo_deleted,
  todo_toggled,
} from '../redux/todo/TodoActionCreator'
function Todo({ todo }) {
  const dispatch = useDispatch()
  const { id, text, complete, color } = todo

  const toggle_handler = (id) => {
    dispatch(todo_toggled(id))
  }
  const color_select_handler = (id, color) => {
    dispatch(todo_color_selected(id, color))
  }
  const delete_handler = (id) => {
    dispatch(todo_deleted(id))
  }
  return (
    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div
        className={`rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
          complete && 'border-green-500 focus-within:border-green-500'
        }`}
      >
        <input
          checked={complete}
          type="checkbox"
          onChange={() => toggle_handler(id)}
          className="opacity-0 absolute rounded-full cursor-pointer "
        />
        {complete && (
          <svg
            className="fill-current w-3 h-3 text-green-500 pointer-events-none"
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        )}
      </div>

      <div className={`select-none flex-1  ${complete && 'line-through'}`}>
        {text}
      </div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${
          color === 'green' && 'bg-green-500'
        }`}
        onClick={() => color_select_handler(id, 'green')}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${
          color === 'yellow' && 'bg-yellow-500'
        }`}
        onClick={() => color_select_handler(id, 'yellow')}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${
          color === 'red' && 'bg-red-500'
        }`}
        onClick={() => color_select_handler(id, 'red')}
      ></div>

      <img
        onClick={() => delete_handler(id)}
        src={cancel}
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Cancel"
      />
    </div>
  )
}

export default Todo
