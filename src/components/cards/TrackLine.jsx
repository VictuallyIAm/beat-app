import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/TrackLine.module.scss'
// import '../../styles/bootstrap.css'
import { PlayPause } from '../PlayPause'
import { BeatModal } from '../BeatModal'

export const TrackLine = ({
  title,
  description,
  srcUrl,
  imageUrl,
  duration,
}) => {
  return (
    <>
      <div className={styles.TrackContainer}>
        <div className={styles.trackInfoLeft}>
          <div className={styles.playIconContainer}>
            <PlayPause />
          </div>
          <div className={styles.iconContainer}>
            <img src={imageUrl} alt="logo" />
          </div>
          <div className={styles.titleContainer}>
            <p>{title}</p>
          </div>
        </div>
        <div className={styles.costil}></div>
        <div className={styles.TrackInfoRight}>
          <span>{duration}</span>
          <button className={styles.btn}>{`Buy`}</button>
        </div>
      </div>
      <hr></hr>
    </>
  )
}
