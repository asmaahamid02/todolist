import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './todoItem.css'

export const TodoItem = ({ todo, markTaskComplete, deleteTask }) => {
  const handleClick = (id) => {
    // e.preventDefault()
    // console.log(e.currentTarget.id)
    // markTaskComplete(e.currentTarget.id)
    markTaskComplete(id)
  }

  const handleDelete = (id) => {
    deleteTask(id)
  }

  return (
    <div className='todo-item'>
      <div className='todo-item_details' onClick={() => handleClick(todo.id)}>
        <img className='todo-image' src={todo.image} alt={todo.title} />
        <div className='todo-info'>
          <p className={todo.complete ? 'todo-title purple' : 'todo-title'}>
            {todo.title}
          </p>
          {todo.complete && (
            <p className={todo.complete && 'complete'}>
              <FontAwesomeIcon icon={faCheck} color='green' />
            </p>
          )}
        </div>
      </div>
      <button className='btn btn-delete' onClick={() => handleDelete(todo.id)}>
        <FontAwesomeIcon icon={faTrash} color='red' />
      </button>
    </div>
  )
}
