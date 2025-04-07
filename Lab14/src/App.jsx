import React from 'react'
import Routes from './routes'
import { BrowserRouter } from 'react-router-dom'
import Header from './layouts/header/header'
import ToDoPage from './pages/to-do/to-do'
const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes/>
     <Header/>
     </BrowserRouter>
      <ToDoPage/>
    </div>
  )
}

export default App

