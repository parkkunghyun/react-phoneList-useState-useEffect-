import React from 'react'

const Modal = ({title,content, onClose}) => {
  return (
    <>
        <div className='modal-black'>

        </div>
        <div className='modal-wrap'>
            <header>
                <h2>{title}</h2>
            </header>
            <div className='content'>
                {content}
            </div>
            <footer>
                <button onClick={onClose}>확인</button>
            </footer>
        </div>
    </>
  )
}

export default Modal