import React from 'react'
import styles from '../styles/Modal.module.scss'

const Modal = ({ isModalOpen, setIsModalOpen, children }) => {
  return (
    <div
      className={!isModalOpen ? styles.modal : styles.active}
      onClick={() => setIsModalOpen(false)}
    >
      <div
        className={!isModalOpen ? styles.content : styles.ContentActive}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
