import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import TodoList from './components/TodoList'
import TodoDetails from './components/TodoDetails'

import todosData from './temp.json'
import './App.css'

function App() {
    const [todos, setTodos] = useState(todosData)
    const [activeTodoId, setActiveTodo] = useState()

    const activeTodo = todos.find(todo => todo.id === activeTodoId)

    const handleAdd = () => {
        const newTodo = {
            id: uuid(),
            title: '',
            description: '',
        }

        setTodos(prev => [...prev, newTodo])
    }

    const handleDelete = id => {
        setTodos(prev => prev.filter(todo => todo.id !== id))

        if (activeTodoId === id) {
            setActiveTodo(null)
        }
    }

    const handleEdit = id => {
        setActiveTodo(id)
    }

    const handleSave = todoData => {
        setTodos(prev => prev.map(todo => (todo.id === activeTodoId ? todoData : todo)))

        setActiveTodo(null)
    }

    const handleCancel = () => {
        setActiveTodo(null)
    }

    return (
        <div className='AppWrapper'>
            <div className='App'>
                <TodoList
                    todos={todos}
                    handleAdd={handleAdd}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    activeTodoId={activeTodoId}
                />
                {!!activeTodo && (
                    <TodoDetails
                        todo={activeTodo}
                        handleSave={handleSave}
                        handleCancel={handleCancel}
                    />
                )}
            </div>
        </div>
    )
}

export default App
