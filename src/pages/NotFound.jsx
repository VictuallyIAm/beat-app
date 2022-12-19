import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/NotFound.module.scss'

const NotFound = () => {
  return (
    <div className={styles.empty}>
      <p className={styles.p}>Seems like we don't have this page here...</p>
      <br />
      <button className={styles.btnTwo}>
        <Link to="/beat-app">&larr; Continue shopping</Link>
      </button>
    </div>
  )
}

export default NotFound
