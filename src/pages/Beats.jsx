import React, { useEffect } from 'react'
import { useState } from 'react'
import 'react-bootstrap'
import styles from '../styles/Beats.module.scss'
import { TrackLine } from '../components/cards/TrackLine'
import { Slider } from '../components/slider/Slider'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase/config'
import { toast } from 'react-toastify'
import { STORE_PRODUCTS } from '../redux/features/productSlice'
import { useDispatch } from 'react-redux'
import { BsSearch } from 'react-icons/bs'

const Beats = () => {
  const [beats, setBeats] = useState([])

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
      <div className={styles.search}>
        <form className={styles.form}>
          <div className={styles.searchForm}>
            <input type="text" placeholder="Search for anything" />
            <button type="submit">
              <BsSearch size={25} />
            </button>
          </div>
          <p>or</p>
          <button className={styles.btn}>Even get more</button>
        </form>
      </div>

      <div id="beats">
        {beats.map((beat) => {
          return (
            <TrackLine
              beats={beats}
              beat={beat}
              key={beat.id}
              tagOne={beat.tagOne}
              tagTwo={beat.tagTwo}
              bpm={beat.bpm}
              price={beat.price}
              index={beats.indexOf(beat)}
              title={beat.title}
              description={beat.description}
              srcUrl={beat.srcUrl}
              imageUrl={beat.imageUrl}
            />
          )
        })}
      </div>
    </>
  )
}

export default Beats
