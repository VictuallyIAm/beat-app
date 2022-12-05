import React, { useRef, useState } from 'react'
import { saveAs } from 'file-saver'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'
import { BsDownload, BsShare } from 'react-icons/bs'
import styles from '../../styles/TrackLine.module.scss'
import { PlayPause } from '../PlayPause'

export const TrackLine = (props) => {
  const {
    beat,
    srcUrl,
    title,
    imageUrl,
    index,
    beats,
    bpm,
    price,
    tagOne,
    tagTwo,
  } = props

  // const download = (url) => {
  //   const storage = getStorage()
  //   getDownloadURL(ref(storage, `${title}`))
  //     .then((url) => {
  //       const xhr = new XMLHttpRequest()
  //       xhr.responseType = 'blob'
  //       xhr.onload = (event) => {
  //         const blob = xhr.response
  //       }
  //       xhr.open('GET', url)
  //       xhr.send()
  //     })
  //     .catch((error) => {
  //       console.log(error.message)
  //     })
  // }

  return (
    <>
      <div className={styles.TrackContainer}>
        <div className={styles.trackInfoLeft}>
          <div className={styles.playIconContainer}>
            <PlayPause song={beat} songs={beats} index={index} />
          </div>
          <div className={styles.iconContainer}>
            <img src={imageUrl} alt="logo" />
          </div>
          <div className={styles.titleContainer}>
            <p>{title}</p>
          </div>
        </div>
        <div className={styles.bpm}>{bpm}&nbsp; BPM</div>
        <div className={styles.costil}>
          <div className={styles.tag}>#{tagOne}</div>
          <div className={styles.tag}>#{tagTwo}</div>
        </div>

        <div className={styles.TrackInfoRight}>
          <button className={styles.btn}>
            <BsShare size={25} />
          </button>
          <button className={styles.btn}>
            <BsDownload size={25} />
          </button>
          <button className={styles.btnTwo}>${price}</button>
        </div>
      </div>
    </>
  )
}
