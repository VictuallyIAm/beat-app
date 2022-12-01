import React from 'react'
import loader from '../../data/images/loader.gif'
import styles from './Loader.scss'

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <img src={loader} alt="Loading..." />
    </div>
  )
}
