import React from 'react'
import notes from '../images/notes.png'
import double_tick from '../images/double-tick.png'
import plus from '../images/plus.png'
import { useDispatch } from 'react-redux'
import {
  todo_added,
  todo_all_completed,
  todo_clear_completed,
} from '../redux/todo/TodoActionCreator'
function Header() {
  const dispatch = useDispatch()
  const todo_handler = (e) => {
    e.preventDefault()
    const todo_name = e.target.todoName.value
    console.log(todo_name)
    dispatch(todo_added(todo_name))
    e.target.reset()
  }
  const complete_handler = () => {
    dispatch(todo_all_completed())
  }
  const clear_handler = () => {
    dispatch(todo_clear_completed())
  }
  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md "
        onSubmit={todo_handler}
      >
        <img src={notes} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          name="todoName"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url(${plus})] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          onClick={complete_handler}
          className="flex space-x-1 cursor-pointer"
        >
          <img className="w-4 h-4" src={double_tick} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li onClick={clear_handler} className="cursor-pointer">
          Clear completed
        </li>
      </ul>
    </div>
  )
}

export default Header
