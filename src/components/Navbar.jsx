import React from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>logo</div>
      <ul className={styles.navList}>
        <li>Beats</li>
        <li>
          <select>
            <option>Sounds</option>
            <option>Drumkits</option>
          </select>
        </li>
        <li>About me</li>
        <li>Contacts</li>
      </ul>
    </div>
  )
}

export default Navbar
