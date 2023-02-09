import React, { useState } from 'react'

import TodoItem from '../TodoItem/TodoItem'
import './TodoList.scss'

const TodoList = ({ todos, handleAdd, activeTodoId, ...props }) => {
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearchChange = e => {
        setSearchQuery(e.target.value)
    }

    const filteredTodos = todos.filter(todo => {
        const titleL = todo.title.toLowerCase()
        return titleL.includes(searchQuery)
    })

    const listIsEmpty = !filteredTodos.length

    return (
        <div className='wrapper list-wrapper'>
            <div className='list-wrapper__header'>
                <input
                    className='list-wrapper__search'
                    onChange={handleSearchChange}
                    value={searchQuery}
                    placeholder='Поиск'
                />
                <div className='wrapper__btn list-wrapper__btn' onClick={handleAdd}>
                    &times;
                </div>
            </div>

            {listIsEmpty ? (
                <p className='list-wrapper__empty-caption'>No todos...</p>
            ) : (
                <ul className='list-wrapper__container'>
                    {filteredTodos.map((todo, index) => {
                        const isActive = activeTodoId === todo.id
                        return (
                            <TodoItem
                                todo={todo}
                                isActive={isActive}
                                key={index}
                                {...props}
                            />
                        )
                    })}
                </ul>
            )}
        </div>
    )
}

export default TodoList
