import React, { useEffect, useState, memo } from 'react'

const TodoDetails = ({ todo, handleSave, handleCancel }) => {
    const [todoData, setTodoData] = useState(todo)
    const { title, description } = todoData

    const handleFieldChange = e => {
        const { name, value } = e.target
        setTodoData(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const saveTodo = () => {
        handleSave(todoData)
    }

    useEffect(() => {
        setTodoData(todo)
    }, [todo])

    return (
        <div className='details-wrapper'>
            <input
                className='details-wrapper__title'
                onChange={handleFieldChange}
                value={title}
                name='title'
                placeholder='Название'
            />
            <textarea
                className='details-wrapper__text'
                onChange={handleFieldChange}
                value={description}
                name='description'
                placeholder='Описание'
            />

            <div className='details-wrapper__btns-wrap'>
                <button className='details-wrapper__btn' onClick={handleCancel}>
                    Cancel
                </button>
                <button className='details-wrapper__btn' onClick={saveTodo}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default memo(TodoDetails)
