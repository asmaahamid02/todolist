import { Header } from './components/Header/Header'
import { ToDoList } from './components/ToDoList/ToDoList'
import './App.css'

function App() {
  const todoList = [
    {
      id: 1,
      title: 'Learn React',
      image:
        'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
    },
    {
      id: 2,
      title: 'Learn Redux',
      image: 'https://cdn.iconscout.com/icon/free/png-512/redux-283024.png',
    },
    {
      id: 3,
      title: 'Learn Node',
      image: 'https://cdn.iconscout.com/icon/free/png-512/node-js-1174925.png',
    },
    {
      id: 4,
      title: 'Learn Express',
      image: 'https://cdn.iconscout.com/icon/free/png-512/express-283284.png',
    },
  ]
  return (
    <div className='app'>
      <Header />
      <ToDoList todoList={todoList} />
    </div>
  )
}

export default App
