import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/ChooseTerm.module.scss'

const ChooseTerm = ({ title, imageUrl }) => {
  return (
    <>
      <div className={styles.head}>
        <h1>Choose license type</h1>
      </div>
      <div className={styles.terms}>
        <div className={styles.left}>
          <img src={imageUrl} alt="logo" />
          <div>{title}</div>
          <span>Montaigne Beats</span>
        </div>
        <div className={styles.right}>
          <div className={styles.term}>
            <div>
              <h2>Basic License</h2>
              <h3>MP3</h3>
              <Link to="/licensing">Learn more about usage terms</Link>
            </div>
            <div>
              <button className={styles.btn}>$19.95</button>
            </div>
          </div>
          <div className={styles.term}>
            <div>
              <h2>Basic PRO</h2>
              <h3>MP3 and WAV</h3>
              <Link to="/licensing">Learn more about usage terms</Link>
            </div>
            <div>
              <button className={styles.btn}>$29.95</button>
            </div>
          </div>
          <div className={styles.term}>
            <div>
              <h2>Unlimited</h2>
              <h3>MP3, WAV and TRACK STEMS</h3>
              <Link to="/licensing">Learn more about usage terms</Link>
            </div>
            <div>
              <button className={styles.btn}>$74.99</button>
            </div>
          </div>
          <div className={styles.term}>
            <div>
              <h2>Exclusive License</h2>
              <h3>MP3, WAV and TRACK STEMS</h3>
              <Link to="/licensing">Learn more about usage terms</Link>
            </div>
            <div>
              <button className={styles.btn}>$244.99</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChooseTerm
