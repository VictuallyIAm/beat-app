import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { selectUserName } from '../../../redux/features/authSlice'
import styles from './AdminNavbar.module.scss'

export const AdminNavbar = () => {
  const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : '')

  const userName = useSelector(selectUserName)
  return (
    <div className={styles.navbar}>
      <div className={styles.user}>
        <FaUserCircle size={40} color="#fff"></FaUserCircle>
        <h4>{userName}</h4>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="viewproducts" className={activeLink}>
              View products
            </NavLink>
          </li>
          <li>
            <NavLink to="addproduct/ADD" className={activeLink}>
              Add product
            </NavLink>
          </li>
          <li>
            <NavLink to="orders" className={activeLink}>
              Orders
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
