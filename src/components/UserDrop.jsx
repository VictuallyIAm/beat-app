import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Dropdown.module.css'
import { IoIosArrowDown } from 'react-icons/io'

export const UserDrop = ({ userName, userLogout }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={styles.dropdown}
      onMouseEnter={(e) => setIsOpen(true)}
      onMouseLeave={(e) => setIsOpen(!isOpen)}
    >
      <div className={styles.dropdownIconContainer}>
        <div className={styles.dropdownBtn}>Hi, {userName}</div>
        <IoIosArrowDown className={styles.arrowSign} />
      </div>
      {isOpen && (
        <div className={styles.dropdownContent}>
          <div
            className={styles.dropdowmItem}
            onClick={(e) => setIsOpen(false)}
          >
            <Link>My stuff</Link>
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
