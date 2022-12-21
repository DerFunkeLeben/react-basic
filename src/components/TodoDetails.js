import React from 'react'

const TodoDetails = () => {
    return (
        <div className='details-wrapper'>
            <input className='details-wrapper__title' value={'Title'}/>
            <textarea className='details-wrapper__text' value={'Text'}/>

            <div className='details-wrapper__btns_wrap'>
                <button className='details-wrapper__btn'>Cancel</button>
                <button className='details-wrapper__btn'>Add</button>
            </div>
        </div>
    )
}

export default TodoDetails
