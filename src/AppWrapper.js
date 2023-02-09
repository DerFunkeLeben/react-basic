import { ToastContainer } from 'react-toastify'
import App from './App'

import 'react-toastify/dist/ReactToastify.css'

const AppWrapper = () => {
    return (
        <>
            <App />
            <ToastContainer
                position='top-right'
                autoClose={4000}
                hideProgressBar={false}
                closeOnClick
                rtl={false}
                draggable
                theme='dark'
            />
        </>
    )
}

export default AppWrapper
