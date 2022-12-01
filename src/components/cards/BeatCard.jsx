import React from 'react'
import styles from '../../styles/BeatsCard.module.css'
import { FaPlay } from 'react-icons/fa'

export const BeatCard = ({
  title,
  description,
  src,
  imgSrc,
  duration,
  isPlaying,
  isCardOpen,
}) => {
  return (
    <div className={styles.cardBody}>
      <div className={styles.card}>
        <img src={imgSrc} alt="" />
        <div className={styles.overlay}>
          <div className={styles.play}>
            <FaPlay className={styles.fa}></FaPlay>
          </div>
        </div>
        <div className={styles.trackDescription}>
          <p>
            {`${title}`}
            <br />
            {`${description}`}
          </p>
        </div>
      </div>
    </div>
  )
}
