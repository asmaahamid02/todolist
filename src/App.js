import { Header } from './components/Header/Header'
import { ToDoList } from './components/ToDoList/ToDoList'
import './App.css'
import { ToDoForm } from './components/ToDoForm/ToDoForm'
import { useState } from 'react'

function App() {
  const initialData = [
    {
      id: 1,
      title: 'Learn React',
      image:
        'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
        complete: true,
    },
    {
      id: 2,
      title: 'Learn Redux',
      image: 'https://cdn.iconscout.com/icon/free/png-512/redux-283024.png',
      complete: true,
    },
    {
      id: 3,
      title: 'Learn Node',
      image: 'https://cdn.iconscout.com/icon/free/png-512/node-js-1174925.png',
      complete: false,
    },
    {
      id: 4,
      title: 'Learn Express',
      image: 'https://cdn.iconscout.com/icon/free/png-512/express-283284.png',
      complete: false,
    },
  ]

  const [todoList, setTodoList] = useState(initialData)

  const addNewItem = (item) => {
    let newTodoList = [...todoList]
    newTodoList = [...newTodoList, {id: todoList.length + 1, ...item}]
    setTodoList(newTodoList)
  }

  const markTaskComplete = (id) => {
    console.log('from app' , id)
    let newTodoList = todoList.map((item) => (item.id === Number(id) ? {...item, complete: !item.complete} : {...item}))
    setTodoList(newTodoList)
  }

  return (
    <div className='app'>
      <Header />
      <ToDoForm addNewItem={addNewItem} />
      <ToDoList todoList={todoList} markTaskComplete={markTaskComplete}/>
    </div>
  )
}

export default App
