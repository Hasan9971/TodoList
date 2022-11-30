import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const LOCAL_STORAGE_KEY = 'todo:savedtasks'

const App = () => {
    const [tasks,setTasks] = useState([]);

    const loadSavedTasks = () => {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
        // console.log(saved)
        if(saved){
            setTasks(JSON.parse(saved))
        }
    }

    useEffect(()=>{
        loadSavedTasks()
    },[])

    const setTasksAndSave = (newTasks) => {
        setTasks(newTasks);
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(newTasks));
    }

    const addTask = (taskTitle) => {
        setTasksAndSave([
            ...tasks, {
                id:crypto.randomUUID(),
                title:taskTitle,
                isCompleted: false
            }
        ])
    }


    const deleteTaskById = (taskId) => {
        const newTasks = tasks.filter(task => task.id !== taskId);
        setTasksAndSave(newTasks)
    }


const toggleTaskCompletedById = (taskId) => {
    const newTask = tasks.map(task => {
        if(task.id === taskId){
            return {
                ...task,
                isCompleted: !task.isCompleted
            }
        }
        return task;
    });
    setTasksAndSave(newTask)
}

  return (
    <div>
        <Header onAddTask={addTask} />
        <Tasks
           tasks={tasks}
           onDelete={deleteTaskById}
           onComplete={toggleTaskCompletedById}
        />
    </div>
  )
}

export default App