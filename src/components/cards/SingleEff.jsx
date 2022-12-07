import React from 'react'
import styles from '../../styles/SingleBeat.module.scss'
import { PlayPause } from '../PlayPause'
import { MdDateRange } from 'react-icons/md'
import { Visualizer } from '../Visualizer'

const SingleEff = ({
  songs,
  song,
  tagOne,
  tagTwo,
  tagThree,
  bpm,
  price,
  title,
  description,
  srcUrl,
  imageUrl,
  createdAt,
}) => {
  const date = new Date(createdAt.seconds * 1000)
  const createDate =
    date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()
  return (
    <>
      <div className={styles.header}>
        <div className={styles.img}>
          <img src={imageUrl} alt="songLogo" />
        </div>
        <div className={styles.info}>
          <div className={styles.title}>
            <PlayPause song={song} songs={songs} index={songs.indexOf(song)} />
            <div>{title}</div>
          </div>

          <div className={styles.addInfo}>
            <MdDateRange />
            <div>{createDate}</div>
          </div>
          <div className={styles.lastLine}>
            <div className={styles.buttons}>
              <button className={styles.btnTwo}>Buy</button>
              <button className={styles.btnTwo}>Share</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.description}>{description}</div>
      <div className={styles.visual}>
        {/* <Visualizer srcUrl={srcUrl} song={song} /> */}
      </div>
    </>
  )
}

export default SingleEff
