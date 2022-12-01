import React from 'react'
import { useState } from 'react'
import beats from '../data/tracks'
import styles from '../styles/Beats.module.css'
import { BeatCard } from '../components/cards/BeatCard'
import { TrackLine } from '../components/cards/TrackLine'
import { Slider } from '../components/slider/Slider'

const Beats = () => {
  const [isCardOpen, setIsCardOpen] = useState(false)

  return (
    <>
      <Slider />
      <div className={styles.cards}>
        <h2 className={styles.announce}> Beats of the week</h2>
        {beats.map((beat) => {
          return (
            <BeatCard
              key={beat.id}
              title={beat.title}
              description={beat.description}
              src={beat.src}
              imgSrc={beat.imgSrc}
              duration={beat.duration}
              // isPlaying={isPlaying}
              isCardOpen={isCardOpen}
            />
          )
        })}
      </div>
      <div>
        {beats.map((beat) => {
          return (
            <TrackLine
              key={beat.id}
              title={beat.title}
              description={beat.description}
              src={beat.src}
              duration={beat.duration}
              imgSrc={beat.imgSrc}
              // isPlaying={isPlaying}
            />
          )
        })}
      </div>
    </>
  )
}

export default Beats
