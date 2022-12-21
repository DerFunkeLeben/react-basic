import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, handleDelete, handleEdit, activeTodoId, searchQuery }) => {
    const filteredTodos = todos.filter(todo => {
        const titleL = todo.title.toLowerCase()
        return titleL.includes(searchQuery)
    })

    if (!filteredTodos.length) {
        return <p className='list-wrapper__empty_caption'>No todos...</p>
    }

    return (
        <ul className='list-wrapper__container'>
            {filteredTodos.map((todo, index) => {
                const isActive = activeTodoId === todo.id
                return (
                    <TodoItem
                        todo={todo}
                        key={index}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                        isActive={isActive}
                    />
                )
            })}
        </ul>
    )
}

export default TodoList
