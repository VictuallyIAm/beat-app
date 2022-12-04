import React, { useEffect } from 'react'
import { useState } from 'react'
import 'react-bootstrap'
import styles from '../styles/Beats.module.css'
import { TrackLine } from '../components/cards/TrackLine'
import { Slider } from '../components/slider/Slider'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase/config'
import { toast } from 'react-toastify'
import { STORE_PRODUCTS } from '../redux/features/productSlice'
import { useDispatch } from 'react-redux'
import { BeatModal } from '../components/BeatModal'

const Beats = () => {
  const [beats, setBeats] = useState([])
  const [modalShow, setModalShow] = useState(false)

  const dispatch = useDispatch

  useEffect(() => {
    getBeats()
  }, [])

  const getBeats = () => {
    try {
      const beatRef = collection(db, 'Beat')
      const q = query(beatRef, orderBy('createdAt', 'desc'))

      onSnapshot(q, (snapshot) => {
        const allBeats = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setBeats(allBeats)
        dispatch(STORE_PRODUCTS({ products: allBeats }))
      })
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <>
      <Slider />
      <h1 id="beats"> Some text</h1>
      <div>
        {beats.map((beat) => {
          return (
            <TrackLine
              setModalShow={setModalShow}
              key={beat.id}
              title={beat.title}
              description={beat.description}
              srcUrl={beat.srcUrl}
              duration={beat.duration}
              imageUrl={beat.imageUrl}
              // isPlaying={isPlaying}
            />
          )
        })}
      </div>
    </>
  )
}

export default Beats
