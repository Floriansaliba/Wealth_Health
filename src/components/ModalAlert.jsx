import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

export const ModalAlert = ({text, closeModal}) => {
    
  return (
    <div className='modal-background' >
      <div className='modal-container'>
        <p className='modal-text'>{text}</p>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className='modal-btn'
          onClick={()=>{closeModal()}}
        />
      </div>
    </div>
  )
}

export default ModalAlert
