import React, { useEffect, useState } from 'react'
import styles from '../styles/Beats.module.css'
import { BeatCard } from '../components/cards/BeatCard'
import { useDispatch } from 'react-redux'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase/config'
import { STORE_PRODUCTS } from '../redux/features/productSlice'
import { BeatModal } from '../components/BeatModal'

const Samples = () => {
  const [samples, setSamples] = useState([])
  const [isCardOpen, setIsCardOpen] = useState(false)
  const dispatch = useDispatch()
  const [modalShow, setModalShow] = React.useState(false)

  useEffect(() => {
    getSamples()
  }, [])

  const getSamples = () => {
    try {
      const sampleRef = collection(db, 'Sample')
      const q = query(sampleRef, orderBy('createdAt', 'desc'))

      onSnapshot(q, (snapshot) => {
        const allSamples = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setSamples(allSamples)
        dispatch(STORE_PRODUCTS({ products: allSamples }))
      })
    } catch (error) {}
  }

  return (
    <div id="samples">
      <div>
        <div className={styles.cards}>
          {samples.map((sample) => {
            return (
              <BeatCard
                key={samples.id}
                title={samples.title}
                description={samples.description}
                src={samples.srcUrl}
                imgSrc={samples.imageUrl}
                duration={samples.duration}
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

export default Samples
