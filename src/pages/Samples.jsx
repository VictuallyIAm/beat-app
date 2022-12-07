import React, { useEffect, useState } from 'react'
import styles from '../styles/Beats.module.scss'
import { BeatCard } from '../components/cards/BeatCard'
import { useDispatch } from 'react-redux'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase/config'
import { STORE_PRODUCTS } from '../redux/features/productSlice'
import { Loader } from '../components/loader/Loader'

const Samples = () => {
  const [samples, setSamples] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    getSamples()
  }, [])

  const getSamples = () => {
    setIsLoading(true)
    try {
      const sampleRef = collection(db, 'Sample')
      const q = query(sampleRef, orderBy('createdAt', 'desc'))

      onSnapshot(q, (snapshot) => {
        const allSamples = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setSamples(allSamples)
        setIsLoading(false)
        dispatch(STORE_PRODUCTS({ products: allSamples }))
      })
    } catch (error) {
      setIsLoading(false)
    }
  }

  return (
    <>
      {isLoading && <Loader />}
      <div className={styles.lorem}>
        <div>
          <div className={styles.cards}>
            {samples.map((sample) => {
              return (
                <BeatCard
                  songs={samples}
                  song={sample}
                  price={sample.price}
                  index={samples.indexOf(sample)}
                  tagOne={sample.tagOne}
                  tagTwo={sample.tagTwo}
                  tagThree={sample.tagThree}
                  key={sample.id}
                  title={sample.title}
                  description={sample.description}
                  srcUrl={sample.srcUrl}
                  imageUrl={sample.imageUrl}
                  createdAt={sample.createdAt}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Samples
