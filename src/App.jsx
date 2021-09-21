import React, { useEffect, useState } from "react";
import axios from "axios";
import Tasks from "./components/Tasks";
import Header from './components/Header'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import {v4 as uuidv4} from 'uuid'

import "./App.css"
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";


const App = () => {
  const [tasks, setTasks] = useState([
    {
      id:1,
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id:2,
      title: 'Ler Livros',
      completed: true
    }
  ]);

  useEffect(() => {
    const fetchTask = async () => {
      const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10')
      setTasks(data)
    }
    fetchTask()
  },[] )

  const hadleTaksClick = (taskId) =>{
    const newTask = tasks.map((task) => {
      if(task.id === taskId) return {...task, completed: !task.completed}
      return task
    })

    setTasks(newTask)
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false
    }]

    setTasks(newTasks)
  }

  const handleTaskDeletion = (taskId) =>{
    const newTasks = tasks.filter(tasks => tasks.id !== taskId)
    setTasks(newTasks)
  }

  return (
  <Router>
      <div className="container">
        <Header />
        <Route 
          path="/"
          exact
          render={() => (
            <>
                  <AddTask 
                    handleTaskAddition={handleTaskAddition} />
                  <Tasks 
                    tasks={tasks} 
                    hadleTaksClick={hadleTaksClick} 
                    handleTaskDeletion={handleTaskDeletion}
              />
            </>
          )}
        /> 
          <Route path="/:taskTitle" exact component={TaskDetails} /> 
      </div>
  </ Router>
  )
}

export default App;