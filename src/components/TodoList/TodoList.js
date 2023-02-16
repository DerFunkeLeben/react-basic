import React, { useState } from 'react'

import TodoItem from '../TodoItem/TodoItem'
import Loader from '../Loader/Loader'

import './TodoList.scss'

const TodoList = ({ todos, handleAdd, activeTodoId, isLoading, ...props }) => {
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearchChange = e => {
        setSearchQuery(e.target.value)
    }

    // был коммент делать запрос на фильтрованные туду
    // не понимаю зачем, если мы и так уже имеем полный их лист
    // и кмк проще его отфильтровать здесь, чем получать всю эту махину с сервера
    // если бы получали порционно, базару нет - нужно делать запрос
    const filteredTodos = todos.filter(todo => {
        const titleL = todo.title.toLowerCase()
        return titleL.includes(searchQuery)
    })

    const listIsEmpty = !isLoading && !filteredTodos.length

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

            {isLoading && <Loader />}

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
