import React, { useEffect } from 'react'
import {
  setActiveSong,
  playPause,
  setCurrentSongs,
} from '../redux/features/playerSlice'
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

export const PlayPause = ({ song, songs, index }) => {
  const dispatch = useDispatch()
  const { currentIndex, isPlaying, activeSong } = useSelector(
    (state) => state.player
  )
  useEffect(() => {
    dispatch(setCurrentSongs(songs))
  }, [songs])

  const handlePlayPause = () => {
    if (!isPlaying) {
      dispatch(setActiveSong({ song: song, index: index }))
      dispatch(playPause(true))
    } else {
      if (songs.includes(activeSong)) {
        dispatch(setActiveSong({ song: song, index: index }))
        dispatch(playPause(false))
      } else {
        dispatch(setActiveSong({ song: song, index: index }))
        dispatch(playPause(true))
      }
    }
  }

  return isPlaying && currentIndex === index && activeSong === song ? (
    <FaPauseCircle
      size={35}
      className="text-gray-300"
      onClick={handlePlayPause}
    />
  ) : (
    <FaPlayCircle
      size={35}
      className="text-gray-300"
      onClick={handlePlayPause}
    />
  )
}
