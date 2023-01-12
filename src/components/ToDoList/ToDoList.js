import { TodoItem } from '../ToDoItem/ToDoItem'
import './todoList.css'

export const ToDoList = ({ todoList , markTaskComplete}) => {
  return (
    <div className='container'>
      <h1 className='container-header'>Your ToDo List</h1>
      <div className='content-body'>      
          {todoList.length > 0 ? (
            todoList.map((todo) => (
             <TodoItem todo={todo} key={todo.id} markTaskComplete={markTaskComplete}/>
            ))
          ) : (
            <p className='no-todo'>No tasks in your list</p>
          )}
      </div>
    </div>
  )
}
