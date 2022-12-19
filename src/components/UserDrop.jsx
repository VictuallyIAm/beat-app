import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/UserDrop.module.scss'
import { IoIosArrowDown } from 'react-icons/io'

export const UserDrop = ({ displayName, userLogout }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={styles.dropdown}
      onMouseEnter={(e) => setIsOpen(true)}
      onMouseLeave={(e) => setIsOpen(!isOpen)}
    >
      <div className={styles.dropdownIconContainer}>
        <div className={styles.dropdownBtn}>Hi, {displayName}</div>
        <IoIosArrowDown className={styles.arrowSign} />
      </div>
      {isOpen && (
        <div className={styles.dropdownContent}>
          <div
            className={styles.dropdowmItem}
            onClick={(e) => setIsOpen(false)}
          >
            <Link to="orders">My orders</Link>
          </div>
          <div
            className={styles.dropdowmItem}
            onClick={(e) => setIsOpen(false)}
          >
            <Link onClick={userLogout}>Log Out</Link>
          </div>
        </div>
      )}
    </div>
  )
}
