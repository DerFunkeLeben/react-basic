import React, { useEffect, useState } from 'react'

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

            <div className='details-wrapper__btns_wrap'>
                <button className='details-wrapper__btn' onClick={handleCancel}>
                    Cancel
                </button>
                <button
                    className='details-wrapper__btn'
                    onClick={() => handleSave(todoData)}
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default TodoDetails
