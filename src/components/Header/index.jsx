import style from './header.module.css';
import todoLogo from '../../assets/todoLogo.svg';
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { useState } from 'react';

const Header = ({ onAddTask }) => {
  const [title, setTitle] = useState('')

  const handleSubmit = (event) => { 
    event.preventDefault();
    onAddTask(title);
    setTitle('');
  }

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  }

  return (
    <header className={style.header}>
        
        <img src={todoLogo} />

        <form onSubmit={handleSubmit} className={style.newTaskForm}>
            <input placeholder='add a new task ' type="text" value={title} onChange={onChangeTitle} />
            <button>
                Create 
                <AiOutlinePlusCircle size={20} />
            </button>
        </form>

    </header>
  )
}

export default Header