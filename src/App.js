import { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'

import TodoList from './components/TodoList'
import TodoDetails from './components/TodoDetails'

import { upsertTodo, deleteTodo, getTodos } from './api/firebase'
import './App.css'

function App() {
    const [todos, setTodos] = useState([])
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

    const handleDelete = async id => {
        await deleteTodo(id)
        setTodos(prev => prev.filter(todo => todo.id !== id))

        if (activeTodoId === id) {
            setActiveTodo(null)
        }
    }

    const handleEdit = id => {
        setActiveTodo(todos.find(todo => todo.id === id))
    }

    const handleSave = async todoData => {
        await upsertTodo(todoData)
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

    const init = async () => {
        const allTodos = await getTodos()
        setTodos(allTodos)
    }

    useEffect(() => {
        init()
    }, [])

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
