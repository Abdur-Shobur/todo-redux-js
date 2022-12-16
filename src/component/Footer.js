import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  filter_status_check,
  filter_toggle_color,
} from '../redux/filter/FilterActionCreateor'

function Footer() {
  const todo_list = useSelector((state) => state.todo)
  const filter = useSelector((state) => state.filter)
  const { status, color } = filter
  const dispatch = useDispatch()
  const remaining_complete = todo_list.filter((todo) => !todo.complete).length
  const task_formate = (num) => {
    switch (num) {
      case 0:
        return '0 task'
      case 1:
        return '1 task'

      default:
        return `${num} tasks`
    }
  }

  const status_change = (status) => {
    dispatch(filter_status_check(status))
  }
  const color_change = (col) => {
    if (color.includes(col)) {
      dispatch(filter_toggle_color(col, 'removed'))
    } else {
      dispatch(filter_toggle_color(col, 'added'))
    }
  }
  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{task_formate(remaining_complete)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          onClick={() => status_change('all')}
          className={`cursor-pointer ${
            status === 'all' && 'font-bold text-blue-500'
          }`}
        >
          All
        </li>
        <li>|</li>

        <li
          onClick={() => status_change('incomplete')}
          className={`cursor-pointer ${
            status === 'incomplete' && 'font-bold text-blue-500'
          }`}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          onClick={() => status_change('complete')}
          className={`cursor-pointer ${
            status === 'complete' && 'font-bold text-blue-500'
          }`}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          onClick={() => color_change('green')}
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer   ${
            color.includes('green') && 'bg-green-500'
          }`}
        ></li>
        <li
          onClick={() => color_change('red')}
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            color.includes('red') && 'bg-red-500'
          }`}
        ></li>
        <li
          onClick={() => color_change('yellow')}
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            color.includes('yellow') && 'bg-yellow-500'
          }`}
        ></li>
      </ul>
    </div>
  )
}

export default Footer
