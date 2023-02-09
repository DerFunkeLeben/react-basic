import React from 'react'
import cx from 'clsx'
import './TodoItem.scss'

const TodoItem = ({ todo, handleDelete, handleEdit, isActive }) => {
    const { title, id } = todo

    const deleteTodo = e => {
        e.stopPropagation()
        handleDelete(id)
    }

    const editTodo = () => {
        handleEdit(id)
    }

    return (
        <li
            className={cx('task-wrapper', {
                'task-wrapper--active': isActive,
            })}
            onClick={editTodo}
        >
            <p className='task-wrapper__title' data-placeholder='Настройте задачу ...'>
                {title}
            </p>
            <div className='wrapper__btn task-wrapper__btn' onClick={deleteTodo}>
                &times;
            </div>
        </li>
    )
}

export default TodoItem
