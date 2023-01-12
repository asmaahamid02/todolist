import { TodoItem } from '../ToDoItem/ToDoItem'
import './todoList.css'

export const ToDoList = ({ todoList, markTaskComplete }) => {
    const incompleteTasks  = todoList.filter((item) => !item.complete).length 
    const text = incompleteTasks > 0 ? `${incompleteTasks} incomplete tasks` : 'All tasks completed'
  return (
    <div className='container'>
      <div className='container-header'>
        <h1 className='container-header_title'>Your ToDo List</h1>       
         <small className='container-header_subtitle'>{text}</small>                    
      </div>
      <div className='content-body'>
        {todoList.length > 0 ? (
          todoList.map((todo) => (
            <TodoItem
              todo={todo}
              key={todo.id}
              markTaskComplete={markTaskComplete}
            />
          ))
        ) : (
          <p className='no-todo'>No tasks in your list</p>
        )}
      </div>
    </div>
  )
}
