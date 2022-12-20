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
          isModalOpen={isModalOpen}
          songs={songs}
          song={song}
          tagOne={tagOne}
          tagTwo={tagTwo}
          tagThree={tagThree}
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
          <img src={imageUrl} alt="logo" onClick={() => setIsModalOpen(true)} />
          <div className={styles.trackDescription}>
            <div className={styles.title}>
              <PlayPause song={song} songs={songs} index={index} />
              <div>
                <p onClick={() => setIsModalOpen(true)}>{`${title}`}</p>
                <span onClick={() => setIsModalOpen(true)}>
                  Montaigne Beats
                </span>
              </div>
            </div>
            <div className={styles.title}>
              <button
                className={styles.btn}
                onClick={() => setIsModalOpen(true)}
              >
                ${price}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
