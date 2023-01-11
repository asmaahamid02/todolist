import './todoForm.css'

export const ToDoForm = () => {
    return (
        <div className='container'>
            <h1 className='container-header'>Add New Task</h1>
            <form className='form-body'>
                <div className='form-group'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' name='title' id='title' />
                </div>
                <div className='form-group'>
                    <label htmlFor='image'>Image</label>
                    <input type='file' name='image' id='image' />
                </div>
                <button className='btn submit-button'>Add</button>
            </form>
        </div>
    )
}