import React, { useRef, useState } from 'react'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'
import { BsDownload, BsShare } from 'react-icons/bs'
import styles from '../../styles/TrackLine.module.scss'
import { PlayPause } from '../PlayPause'
import Modal from '../Modal'
import SingleBeat from './SingleBeat'
import ChooseTerm from './ChooseTerm'

export const TrackLine = (props) => {
  const {
    beat,
    setSearch,
    title,
    imageUrl,
    index,
    beats,
    bpm,
    price,
    tagOne,
    tagTwo,
    tagThree,
    description,
    srcUrl,
    id,
    createdAt,
  } = props
  const [isModalOneOpen, setIsModalOneOpen] = useState(false)
  const [isModalTwoOpen, setIsModalTwoOpen] = useState(false)

  const download = (url) => {
    const storage = getStorage()
    getDownloadURL(ref(storage, srcUrl))
      .then((url) => {
        const xhr = new XMLHttpRequest()
        xhr.responseType = 'blob'
        xhr.onload = (event) => {
          const blob = xhr.response
        }
        xhr.open('GET', url)
        xhr.send()
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

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
          <div
            className={styles.titleContainer}
            onClick={() => setIsModalOneOpen(true)}
          >
            <p>{title}</p>
          </div>
        </div>
        <div className={styles.bpm}>{bpm}&nbsp; BPM</div>
        <div className={styles.costil}>
          <div className={styles.tag} onClick={() => setSearch(tagOne)}>
            #{tagOne}
          </div>
          <div className={styles.tag} onClick={() => setSearch(tagTwo)}>
            #{tagTwo}
          </div>
          <div className={styles.tag} onClick={() => setSearch(tagThree)}>
            #{tagThree}
          </div>
        </div>

        <div className={styles.TrackInfoRight}>
          <button className={styles.btn}>
            <BsShare size={25} />
          </button>
          {/* <button className={styles.btn} onClick={download}>
            <BsDownload size={25} />
          </button> */}
          <button
            className={styles.btnTwo}
            onClick={() => setIsModalTwoOpen(true)}
          >
            $19.95
          </button>
        </div>
      </div>
      <Modal isModalOpen={isModalOneOpen} setIsModalOpen={setIsModalOneOpen}>
        <SingleBeat
          isModalOpen={isModalOneOpen}
          beats={beats}
          beat={beat}
          tagOne={tagOne}
          tagTwo={tagTwo}
          tagThree={tagThree}
          bpm={bpm}
          price={price}
          title={title}
          description={description}
          srcUrl={srcUrl}
          imageUrl={imageUrl}
          createdAt={createdAt}
        />
      </Modal>
      <Modal isModalOpen={isModalTwoOpen} setIsModalOpen={setIsModalTwoOpen}>
        <ChooseTerm title={title} imageUrl={imageUrl} />
      </Modal>
    </>
  )
}
