import { TodoItem } from '../ToDoItem/ToDoItem'
import './todoList.css'
import { useState } from 'react'

const tasksPerRow = 10

export const ToDoList = ({ todoList, markTaskComplete, deleteTask }) => {    
  const incompleteTasks = todoList.filter((item) => !item.complete).length
  
  const text =
    incompleteTasks > 0
      ? `${incompleteTasks}/${todoList.length} incomplete tasks`
      : todoList.length > 0 && 'All tasks completed'

  const [nextLoad, setNextLoad] = useState(tasksPerRow)

  const handleLoadMore = () => {
    setNextLoad(nextLoad + tasksPerRow)
  }

  const handleLoadLess = () => {
    setNextLoad(nextLoad - tasksPerRow)
  }

  return (
    <div className='container'>
      <div className='container-header'>
        <h1 className='container-header_title'>Your ToDo List</h1>
        <small className='container-header_subtitle'>{text}</small>
      </div>
      <div className='content-body'>
        {todoList.length > 0 ? (
          todoList
            .slice(0, nextLoad)
            .map((todo) => (
              <TodoItem
                todo={todo}
                key={todo.id}
                markTaskComplete={markTaskComplete}
                deleteTask={deleteTask}
              />
            ))
        ) : (
          <p className='no-todo'>No tasks in your list</p>
        )}
      </div>
      {todoList.length > nextLoad && (
        <button className='btn btn-load' onClick={handleLoadMore}>
          Load more
        </button>
      )}
      {nextLoad > tasksPerRow && (
        <button className='btn btn-load' onClick={handleLoadLess}>
          Load less
        </button>
      )}
    </div>
  )
}
