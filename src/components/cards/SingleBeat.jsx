import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import WaveSurfer from 'wavesurfer.js'
import styled from 'styled-components'
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa'
import styles from '../../styles/SingleBeat.module.scss'
import { HiOutlineMusicNote } from 'react-icons/hi'
import { MdDateRange } from 'react-icons/md'
import { playPause } from '../../redux/features/playerSlice'
import { useDispatch } from 'react-redux'
import ClickAwayListener from 'react-click-away-listener'
import { Loader } from '../loader/Loader'

const SingleBeat = ({
  isModalOpen,
  audio,
  beats,
  beat,
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
  const dispatch = useDispatch()
  const containerRef = useRef()
  const waveSurferRef = useRef(true)
  const [isPlaying, toggleIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const date = new Date(createdAt.seconds * 1000)
  const createDate =
    date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()

  useEffect(() => {
    const waveSurfer = WaveSurfer.create({
      container: containerRef.current,
      responsive: true,
      barWidth: 2,
      barHeight: 0.5,
      cursorWidth: 0,
      waveColor: 'gray',
      progressColor: '#add8e6',
    })
    waveSurfer.load(srcUrl)
    waveSurfer.on('ready', () => {
      waveSurferRef.current = waveSurfer
    })

    return () => {
      waveSurfer.destroy()
    }
  }, [srcUrl, isModalOpen, isLoading])

  return (
    <>
      <div className={styles.header}>
        <div className={styles.img}>
          <img src={imageUrl} alt="songLogo" />
        </div>
        <div className={styles.info}>
          <div className={styles.title}>
            <button
              onClick={() => {
                dispatch(playPause(false))
                waveSurferRef.current.playPause()
                toggleIsPlaying(waveSurferRef.current.isPlaying())
              }}
              type="button"
            >
              {isPlaying ? (
                <FaPauseCircle size="3em" />
              ) : (
                <FaPlayCircle size="3em" />
              )}
            </button>
            <div>{title}</div>
          </div>
          <div className={styles.description}>{description}</div>
          <div className={styles.addInfo}>
            <HiOutlineMusicNote />
            <div>{bpm} &nbsp;BPM</div>
            <MdDateRange />
            <div>{createDate}</div>
          </div>
          <div className={styles.lastLine}>
            <div className={styles.buttons}>
              <button className={styles.btnTwo}>Buy</button>
              <button className={styles.btnTwo}>Share</button>
            </div>
            <div className={styles.tags}>
              <div>#{tagOne}</div>
              <div>#{tagTwo}</div>
              <div>#{tagThree}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.visual}>
        <WaveSurferWrap>
          <div ref={containerRef} />
        </WaveSurferWrap>
      </div>
    </>
  )
}

SingleBeat.propTypes = {
  audio: PropTypes.string.isRequired,
}

const WaveSurferWrap = styled.div`
  align-items: center;
`

export default SingleBeat
