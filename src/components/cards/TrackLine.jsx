import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaPlay, FaPause } from 'react-icons/fa'
import styles from '../../styles/TrackLine.module.css'
import { RiShoppingBagLine } from 'react-icons/ri'

export const TrackLine = ({ title, description, src, imgSrc, duration }) => {
  return (
    <>
      <div className={styles.TrackContainer}>
        <div className={styles.trackInfoLeft}>
          <div className={styles.playIconContainer}>
            <FaPlay />
          </div>
          <div className={styles.iconContainer}>
            <img src={imgSrc} alt="" />
          </div>
          <div className={styles.titleContainer}>
            <p>{title}</p>
          </div>
        </div>
        <div className={styles.costil}></div>
        <div className={styles.TrackInfoRight}>
          <span>{duration}</span>
          <button className={styles.btn}>
            <RiShoppingBagLine />
            {`    Buy`}
          </button>
        </div>
      </div>
    </>
  )
}
