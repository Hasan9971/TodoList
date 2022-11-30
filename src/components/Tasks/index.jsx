import Task from '../Task'
import style from './tasks.module.css'

const Tasks = ({ tasks, onComplete, onDelete }) => {
    const tasksQuantity = tasks.length;
    const completedTasks = tasks.filter(task => task.isCompleted).length;
  return (
    <section className={style.tasks}>
        <header className={style.header}>
            
            <div>
                <p>Create tasks</p>
                <span>{tasksQuantity}</span>
            </div>

            <div>
                <p className={style.textPurple}>Completed </p>
                <span>{completedTasks} of {tasksQuantity}</span>
            </div>

        </header>

        <div className={style.list}>
            {tasks.map(task => ( <Task key={task.id} task={task} onComplete={onComplete} onDelete={onDelete} /> ))}
        </div>
    </section>
  )
}

export default Tasks