import { initializeApp } from 'firebase/app'
import {
    getFirestore,
    collection,
    doc,
    getDocs,
    setDoc,
    deleteDoc,
} from 'firebase/firestore/lite'
import { toast } from 'react-toastify'
import firebaseConfig from './config'

const COL_NAME = 'todos'
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const col = collection(db, COL_NAME)

export const upsertTodo = async todoData => {
    try {
        const { id, title, description } = todoData
        const dataToSend = { title, description }
        const docRef = doc(db, COL_NAME, id)

        await setDoc(docRef, dataToSend)
        toast('Изменения сохранены!')
    } catch (e) {
        toast.error(`Не удалось сохранить задачу 😔`)
        console.error(e)
    }
}

export const deleteTodo = async id => {
    try {
        const docRef = doc(db, COL_NAME, id)
        await deleteDoc(docRef)
        toast('Задача удалена!')
    } catch (e) {
        toast.error(`Не удалось удалить задачу 😔`)
        console.error(e)
    }
}

export const getTodos = async () => {
    try {
        const query = await getDocs(col)
        const todos = query.docs.map(doc => {
            const docData = doc.data()
            return { id: doc.id, ...docData }
        })

        return todos
    } catch (e) {
        toast.error(`Не удалось получить список задач 😔`)
        console.error(e)
    }
}
