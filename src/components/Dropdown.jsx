import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Dropdown.module.scss'
import { IoIosArrowDown } from 'react-icons/io'

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={styles.dropdown}
      onMouseEnter={(e) => setIsOpen(true)}
      onMouseLeave={(e) => setIsOpen(!isOpen)}
    >
      <div className={styles.dropdownIconContainer}>
        <div className={styles.dropdownBtn}>For producers</div>
        <IoIosArrowDown className={styles.arrowSign} />
      </div>
      {isOpen && (
        <div className={styles.dropdownContent}>
          <div
            className={styles.dropdowmItem}
            onClick={(e) => setIsOpen(false)}
          >
            <Link to="samples">Samples</Link>
          </div>
          <div
            className={styles.dropdowmItem}
            onClick={(e) => setIsOpen(false)}
          >
            <Link to="drumkits">Kits</Link>
          </div>
          <div
            className={styles.dropdowmItem}
            onClick={(e) => setIsOpen(false)}
          >
            <Link to="sounds">Sounds</Link>
          </div>
        </div>
      )}
    </div>
  )
}
