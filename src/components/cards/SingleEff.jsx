import React, { useEffect, useRef, useState } from 'react'
import styles from '../../styles/SingleBeat.module.scss'
import { PlayPause } from '../PlayPause'
import { MdDateRange } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import WaveSurfer from 'wavesurfer.js'
import styled from 'styled-components'
import { playPause } from '../../redux/features/playerSlice'
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'
import { ADD_TO_CART } from '../../redux/features/cartSlice'

const SingleEff = ({
  isModalOpen,
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
  const dispatch = useDispatch()
  const containerRef = useRef()
  const waveSurferRef = useRef(true)
  const [isPlaying, toggleIsPlaying] = useState(false)

  const addToCart = (item, price) => {
    dispatch(ADD_TO_CART({ item, price }))
  }

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
  }, [srcUrl, isModalOpen])

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

          <div className={styles.addInfo}>
            <MdDateRange />
            <div>{createDate}</div>
          </div>
          <div className={styles.lastLine}>
            <div className={styles.buttons}>
              <button
                className={styles.btnTwo}
                onClick={() => addToCart(song, price)}
              >
                ${price}
              </button>
              <button className={styles.btnTwo}>Share</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.description}>{description}</div>
      <div className={styles.visual}>
        <WaveSurferWrap>
          <div></div>
          <div ref={containerRef} />
        </WaveSurferWrap>
      </div>
    </>
  )
}
SingleEff.propTypes = {
  audio: PropTypes.string.isRequired,
}

const WaveSurferWrap = styled.div`
  //   display: grid;
  //   grid-template-columns: 900px 1fr;
  align-items: center;
  button {
    width: 40px;
    height: 40px;
    border: none;
    color: white;
  }
`

export default SingleEff
