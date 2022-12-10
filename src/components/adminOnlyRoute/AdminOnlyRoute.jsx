import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectEmail } from '../../redux/features/authSlice'
import styles from './adminOnly.module.css'

const AdminOnlyRoute = ({ children }) => {
  const userEmail = useSelector(selectEmail)
  if (
    userEmail === 'babymontaigne@gmail.com' ||
    userEmail === 'test@gmail.com'
  ) {
    return children
  }
  return (
    <section className={styles.container}>
      <h2>This page can only be viewed by admin</h2>
      <br></br>
      <Link to="/">
        <button className={styles.btn}>&larr; Go back</button>
      </Link>
    </section>
  )
}
export const AdminOnlyLink = ({ children }) => {
  const userEmail = useSelector(selectEmail)
  if (
    userEmail === 'babymontaigne@gmail.com' ||
    userEmail === 'test@gmail.com'
  ) {
    return children
  }
  return null
}

export default AdminOnlyRoute
