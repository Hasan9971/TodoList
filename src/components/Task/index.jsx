import style from './task.module.css';
import { TbTrash } from 'react-icons/tb'
import { BsFillCheckCircleFill } from 'react-icons/bs'

const Task = ({ task, onComplete, onDelete }) => {
  return (
    <div className={style.task}>

        <button className={style.checkContainer} onClick={() => onComplete(task.id)}>
            {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
        </button>

        <p className={task.isCompleted ? style.textCompleted : ''}>{task.title}</p>

        <button className={style.deleteButton} onClick={()=> onDelete(task.id)}>
            <TbTrash size={20}/>
        </button>
    </div>
  )
}

export default Task