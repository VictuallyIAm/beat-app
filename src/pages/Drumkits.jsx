import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BeatCard } from '../components/cards/BeatCard'
import { db } from '../firebase/config'
import { STORE_PRODUCTS } from '../redux/features/productSlice'
import styles from '../styles/Beats.module.scss'

const Drumkits = () => {
  const [kits, setKits] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    getKits()
  }, [])

  const getKits = () => {
    setIsLoading(true)
    try {
      const kitRef = collection(db, 'Kit')
      const q = query(kitRef, orderBy('createdAt', 'desc'))

      onSnapshot(q, (snapshot) => {
        const allKits = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setKits(allKits)
        setIsLoading(false)
        dispatch(STORE_PRODUCTS({ products: allKits }))
      })
    } catch (error) {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <div className={styles.lorem}>
        <div className={styles.cards}>
          {kits.map((kit) => {
            return (
              <BeatCard
                songs={kits}
                song={kit}
                price={kit.price}
                index={kits.indexOf(kit)}
                tagOne={kit.tagOne}
                tagTwo={kit.tagTwo}
                key={kit.id}
                title={kit.title}
                description={kit.description}
                srcUrl={kit.srcUrl}
                imageUrl={kit.imageUrl}
                createdAt={kit.createdAt}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Drumkits
