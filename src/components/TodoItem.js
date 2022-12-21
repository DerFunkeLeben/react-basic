import React from 'react'

const TodoItem = ({ todo, handleDelete, handleEdit, isActive }) => {
    const { title, id } = todo

    const deleteTodo = e => {
        e.stopPropagation()
        handleDelete(id)
    }

    return (
        <li
            className={`task-wrapper ${isActive ? 'task-wrapper--active' : ''}`}
            onClick={() => handleEdit(id)}
        >
            <p className='task-wrapper__title' data-placeholder='Настройте задачу ...'>
                {title}
            </p>
            <div className='task-wrapper__btn' onClick={deleteTodo}>
                &times;
            </div>
        </li>
    )
}

export default TodoItem
