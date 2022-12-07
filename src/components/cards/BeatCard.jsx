import React, { useState } from 'react'
import styles from '../../styles/BeatsCard.module.scss'
import Modal from '../Modal'
import { PlayPause } from '../PlayPause'
import SingleEff from './SingleEff'

export const BeatCard = ({
  songs,
  song,
  price,
  index,
  tagOne,
  tagTwo,
  tagThree,
  key,
  title,
  description,
  srcUrl,
  imageUrl,
  createdAt,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <SingleEff
          songs={songs}
          song={song}
          tagOne={tagOne}
          tagTwo={tagTwo}
          tagThree={tagThree}
          // bpm={bpm}
          price={price}
          title={title}
          description={description}
          srcUrl={srcUrl}
          imageUrl={imageUrl}
          createdAt={createdAt}
        />
      </Modal>
      <div className={styles.cardBody}>
        <div className={styles.card}>
          <img src={imageUrl} alt="" onClick={() => setIsModalOpen(true)} />
          <div className={styles.trackDescription}>
            <div className={styles.title}>
              <PlayPause song={song} songs={songs} index={index} />
              <p onClick={() => setIsModalOpen(true)}>{`${title}`}</p>
            </div>
            <div className={styles.title}>
              <button className={styles.btn}>${price}</button>
              <button className={styles.btn}>Add</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
