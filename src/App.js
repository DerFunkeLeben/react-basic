import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import TodoList from './components/TodoList'
import TodoDetails from './components/TodoDetails'

import todosData from './temp.json'
import './App.css'

function App() {
    const [todos, setTodos] = useState(todosData)
    const [activeTodo, setActiveTodo] = useState()

    const activeTodoId = activeTodo?.id

    const handleAdd = () => {
        const newTodo = {
            id: uuid(),
            title: '',
            description: '',
        }

        setActiveTodo(newTodo)
    }

    const handleDelete = id => {
        setTodos(prev => prev.filter(todo => todo.id !== id))

        if (activeTodoId === id) {
            setActiveTodo(null)
        }
    }

    const handleEdit = id => {
        setActiveTodo(todos.find(todo => todo.id === id))
    }

    const handleSave = todoData => {
        setTodos(prev => {
            const index = prev.findIndex(todo => todo.id === activeTodoId)
            if (index > -1) {
                prev[index] = todoData
                return prev
            }
            return [...prev, todoData]
        })

        setActiveTodo(null)
    }

    const handleCancel = () => {
        setActiveTodo(null)
    }

    return (
        <div className='App'>
            <TodoList
                todos={todos}
                handleAdd={handleAdd}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                activeTodoId={activeTodoId}
            />
            {Boolean(activeTodo) && (
                <TodoDetails
                    todo={activeTodo}
                    handleSave={handleSave}
                    handleCancel={handleCancel}
                />
            )}
        </div>
    )
}

export default App
