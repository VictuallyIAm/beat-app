import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BeatCard } from '../components/cards/BeatCard'
import { db } from '../firebase/config'
import { STORE_PRODUCTS } from '../redux/features/productSlice'
import styles from '../styles/Beats.module.css'

const Drumkits = () => {
  const [kits, setKits] = useState([])
  const [isCardOpen, setIsCardOpen] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    getKits()
  }, [])

  const getKits = () => {
    try {
      const kitRef = collection(db, 'Kit')
      const q = query(kitRef, orderBy('createdAt', 'desc'))

      onSnapshot(q, (snapshot) => {
        const allKits = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setKits(allKits)
        dispatch(STORE_PRODUCTS({ products: allKits }))
      })
    } catch (error) {}
  }

  return (
    <div>
      <div id="kits">
        <div className={styles.cards}>
          {kits.map((kit) => {
            return (
              <BeatCard
                key={kits.id}
                title={kits.title}
                description={kits.description}
                src={kits.srcUrl}
                imgSrc={kits.imageUrl}
                duration={kits.duration}
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

export default Drumkits
