import './todoItem.css'

export const TodoItem = ({ todo }) => {
    return (
        <div className='todo-item'>
            <img className='todo-image' src={todo.image} alt={todo.title} />
            <p className='todo-title'>{todo.title}</p>
        </div>
    )
}