import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { db } from '../firebase/config'
import { STORE_PRODUCTS } from '../redux/features/productSlice'
import styles from '../styles/Beats.module.css'
import { BeatCard } from '../components/cards/BeatCard'

const Sounds = () => {
  const [sounds, setSounds] = useState([])
  const [isCardOpen, setIsCardOpen] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    getSounds()
  }, [])

  const getSounds = () => {
    try {
      const soundRef = collection(db, 'Sound')
      const q = query(soundRef, orderBy('createdAt', 'desc'))

      onSnapshot(q, (snapshot) => {
        const allSounds = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setSounds(allSounds)
        dispatch(STORE_PRODUCTS({ products: allSounds }))
      })
    } catch (error) {}
  }
  return (
    <div id="sounds">
      <div>
        <div className={styles.cards}>
          {sounds.map((sound) => {
            return (
              <BeatCard
                key={sounds.id}
                title={sounds.title}
                description={sounds.description}
                src={sounds.srcUrl}
                imgSrc={sounds.imageUrl}
                duration={sounds.duration}
                // isPlaying={isPlaying}
                // isCardOpen={isCardOpen}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Sounds
