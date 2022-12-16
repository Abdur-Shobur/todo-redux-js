import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'

function TodoLists() {
  const todo_lists = useSelector((state) => state.todo)
  const filter = useSelector((state) => state.filter)

  const filter_by_status = (todo) => {
    const { status } = filter
    switch (status) {
      case 'complete':
        return todo.complete
      case 'incomplete':
        return !todo.complete
      default:
        return true
    }
  }
  const filter_by_colors = (todo) => {
    const { color } = filter
    console.log(todo)
    if (color.length > 0) {
      return color.includes(todo.color)
    }
    return true
  }

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todo_lists
        .filter(filter_by_status)
        .filter(filter_by_colors)
        .map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
    </div>
  )
}

export default TodoLists
