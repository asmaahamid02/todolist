import { Header } from './Header/Header'
import { ToDoForm } from './ToDoForm/ToDoForm'
import { ToDoList } from './ToDoList/ToDoList'
import { useState } from 'react'
import { Layout } from './Layout'

export const Home = () => {
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
    {
      id: 5,
      title: 'Learn React',
      image:
        'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
      complete: true,
    },
    {
      id: 6,
      title: 'Learn Redux',
      image: 'https://cdn.iconscout.com/icon/free/png-512/redux-283024.png',
      complete: true,
    },
    {
      id: 7,
      title: 'Learn Node',
      image: 'https://cdn.iconscout.com/icon/free/png-512/node-js-1174925.png',
      complete: false,
    },
    {
      id: 8,
      title: 'Learn Express',
      image: 'https://cdn.iconscout.com/icon/free/png-512/express-283284.png',
      complete: false,
    },
    {
      id: 9,
      title: 'Learn React',
      image:
        'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
      complete: true,
    },
    {
      id: 10,
      title: 'Learn Redux',
      image: 'https://cdn.iconscout.com/icon/free/png-512/redux-283024.png',
      complete: true,
    },
    {
      id: 11,
      title: 'Learn Node',
      image: 'https://cdn.iconscout.com/icon/free/png-512/node-js-1174925.png',
      complete: false,
    },
    {
      id: 12,
      title: 'Learn Express',
      image: 'https://cdn.iconscout.com/icon/free/png-512/express-283284.png',
      complete: false,
    },
  ]

  const [todoList, setTodoList] = useState(initialData)

  const addNewItem = (item) => {
    let newTodoList = [...todoList]
    newTodoList = [...newTodoList, { id: todoList.length + 1, ...item }]
    setTodoList(newTodoList)
  }

  const markTaskComplete = (id) => {
    // console.log('from app' , id)
    let newTodoList = todoList.map((item) =>
      item.id === Number(id)
        ? { ...item, complete: !item.complete }
        : { ...item }
    )
    setTodoList(newTodoList)
  }

  const deleteTask = (id) => {
    console.log('from app', id)
    let newTodoList = todoList.filter((item) => item.id !== Number(id))
    setTodoList(newTodoList)
  }

  return (
    <Layout>
      <Header />
      <ToDoForm addNewItem={addNewItem} />
      <ToDoList
        todoList={todoList}
        markTaskComplete={markTaskComplete}
        deleteTask={deleteTask}
      />
    </Layout>
  )
}
