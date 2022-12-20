import React, { useRef, useState } from 'react'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'
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
    priceBasic,
    priceBasicPro,
    priceUnlimited,
    priceExclusive,
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
            <div className={styles.titles}>
              <p>{title}</p>
              <span>Montaigne Beats</span>
            </div>
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
          <button
            className={styles.btnTwo}
            onClick={() => setIsModalTwoOpen(true)}
          >
            ${priceBasic}
          </button>
        </div>
      </div>
      <Modal isModalOpen={isModalOneOpen} setIsModalOpen={setIsModalOneOpen}>
        <SingleBeat
          setIsModalOneOpen={setIsModalOneOpen}
          isModalOneOpen={isModalOneOpen}
          isModalTwoOpen={isModalTwoOpen}
          setIsModalTwoOpen={setIsModalTwoOpen}
          beats={beats}
          beat={beat}
          tagOne={tagOne}
          tagTwo={tagTwo}
          tagThree={tagThree}
          bpm={bpm}
          priceBasic={priceBasic}
          priceBasicPro={priceBasicPro}
          priceUnlimited={priceUnlimited}
          priceExclusive={priceExclusive}
          title={title}
          description={description}
          srcUrl={srcUrl}
          imageUrl={imageUrl}
          createdAt={createdAt}
        />
      </Modal>
      <Modal isModalOpen={isModalTwoOpen} setIsModalOpen={setIsModalTwoOpen}>
        <ChooseTerm
          title={title}
          imageUrl={imageUrl}
          beat={beat}
          priceBasic={priceBasic}
          priceBasicPro={priceBasicPro}
          priceUnlimited={priceUnlimited}
          priceExclusive={priceExclusive}
        />
      </Modal>
    </>
  )
}
