import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { db } from '../firebase/config'
import { STORE_PRODUCTS } from '../redux/features/productSlice'
import styles from '../styles/Beats.module.scss'
import { BeatCard } from '../components/cards/BeatCard'

const Sounds = () => {
  const [sounds, setSounds] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    getSounds()
  }, [])

  const getSounds = () => {
    setIsLoading(true)
    try {
      const soundRef = collection(db, 'Sound')
      const q = query(soundRef, orderBy('createdAt', 'desc'))

      onSnapshot(q, (snapshot) => {
        const allSounds = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setSounds(allSounds)
        setIsLoading(false)
        dispatch(STORE_PRODUCTS({ products: allSounds }))
      })
    } catch (error) {
      setIsLoading(false)
    }
  }
  return (
    <div className={styles.lorem}>
      <div>
        <div className={styles.cards}>
          {sounds.map((sound) => {
            return (
              <BeatCard
                songs={sounds}
                song={sound}
                price={sound.priceBasic}
                index={sounds.indexOf(sound)}
                tagOne={sound.tagOne}
                tagTwo={sound.tagTwo}
                key={sound.id}
                title={sound.title}
                description={sound.description}
                srcUrl={sound.srcUrl}
                imageUrl={sound.imageUrl}
                createdAt={sound.createdAt}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Sounds
