import React from 'react'
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'

export const PlayPause = ({ isPlaying, activeSong, song }) => {
  return isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle size={35} className="text-gray-300" />
  ) : (
    <FaPlayCircle size={35} className="text-gray-300" />
  )
}
