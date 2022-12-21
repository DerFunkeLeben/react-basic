import React, { useState } from 'react'

import TodoList from './TodoList'

const TodoListWrap = ({
    todos,
    handleAdd,
    handleDelete,
    handleEdit,
    activeTodoId,
}) => {
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearchChange = e => {
        setSearchQuery(e.target.value)
    }

    return (
        <div className='list-wrapper'>
            <div className='list-wrapper__header' value={'qq'}>
                <input
                    className='list-wrapper__search'
                    onChange={handleSearchChange}
                    value={searchQuery}
                    placeholder='Поиск'
                />
                <div className='list-wrapper__btn' onClick={handleAdd}>
                    &times;
                </div>
            </div>

            <TodoList
                todos={todos}
                searchQuery={searchQuery}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                activeTodoId={activeTodoId}
            />
        </div>
    )
}

export default TodoListWrap
