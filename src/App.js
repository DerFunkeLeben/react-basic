import { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'

import TodoList from './components/TodoList/TodoList'
import TodoDetails from './components/TodoDetails/TodoDetails'

import { upsertTodo, deleteTodo, getTodos } from './api/firebase'
import './App.css'

function App() {
    const [todos, setTodos] = useState([])
    const [activeTodo, setActiveTodo] = useState()
    const [isLoading, setLoading] = useState(true)

    const activeTodoId = activeTodo?.id

    const initTodoList = async () => {
        setLoading(true)
        const allTodos = await getTodos()
        setLoading(false)

        setTodos(allTodos)
    }

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
        await initTodoList()

        if (activeTodoId === id) {
            setActiveTodo(null)
        }
    }

    const handleEdit = id => {
        setActiveTodo(todos.find(todo => todo.id === id))
    }

    const handleSave = async todoData => {
        await upsertTodo(todoData)
        await initTodoList()

        setActiveTodo(null)
    }

    const handleCancel = () => {
        setActiveTodo(null)
    }

    useEffect(() => {
        initTodoList()
    }, [])

    return (
        <div className='App'>
            <TodoList
                todos={todos}
                handleAdd={handleAdd}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                activeTodoId={activeTodoId}
                isLoading={isLoading}
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
