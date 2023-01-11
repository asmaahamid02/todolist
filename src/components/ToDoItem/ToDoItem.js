import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './todoItem.css'

export const TodoItem = ({ todo }) => {
    return (
        <div className='todo-item'>
            <img className='todo-image' src={todo.image} alt={todo.title} />
            <div className='todo-info'>

            <p className={todo.complete ? 'todo-title purple' : 'todo-title'}>{todo.title}</p>
            {todo.complete &&
            <p className={todo.complete && 'complete'}>
                <FontAwesomeIcon icon={faCheck} color="green"/> 
            </p> }
            </div>
            <button className='btn btn-delete'>
                <FontAwesomeIcon icon={faTrash} color="red"/>
            </button>
        </div>
    )
}