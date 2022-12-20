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
import { useDispatch, useSelector } from 'react-redux'
import { BsSearch } from 'react-icons/bs'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { Loader } from '../components/loader/Loader'
import {
  FILTER_BY_SEARCH,
  selectFilteredProducts,
} from '../redux/features/filterSlice'

const Beats = () => {
  const [beats, setBeats] = useState([])
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const filteredBeats = useSelector(selectFilteredProducts)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(FILTER_BY_SEARCH({ beats: beats, search: search }))
  }, [beats, dispatch, search])

  useEffect(() => {
    getBeats()
  }, [])

  const getBeats = () => {
    setIsLoading(true)
    try {
      const beatRef = collection(db, 'Beat')
      const q = query(beatRef, orderBy('createdAt', 'desc'))

      onSnapshot(q, (snapshot) => {
        const allBeats = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setBeats(allBeats)
        setIsLoading(false)
        dispatch(STORE_PRODUCTS({ products: allBeats }))
      })
    } catch (error) {
      toast.error(error.message)
      setIsLoading(false)
    }
  }
  const firstTags = beats.map((beat) => {
    return beat.tagOne
  })
  const uniqueTagOne = [...new Set(firstTags)]

  const secondTags = beats.map((beat) => {
    return beat.tagTwo
  })
  const uniqueTagTwo = [...new Set(secondTags)]

  const thirdTags = beats.map((beat) => {
    return beat.tagThree
  })
  const uniqueTagThree = [...new Set(thirdTags)]

  const uniqueTags = uniqueTagOne.concat(uniqueTagTwo, uniqueTagThree)
  return (
    <>
      {isLoading && <Loader />}
      <Slider />
      <div className={styles.search}>
        <form className={styles.form}>
          <div className={styles.searchForm}>
            <input
              type="text"
              placeholder="Search for anything"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search ? (
              <IoCloseCircleOutline
                className={styles.icon}
                size={20}
                onClick={() => setSearch('')}
              />
            ) : (
              <button type="submit">
                <BsSearch size={25} />
              </button>
            )}
          </div>
          <p>or</p>
          <button className={styles.btn}>Even get more</button>
        </form>
      </div>
      <div className={styles.tags}>
        {uniqueTags.map((tag) => {
          return (
            <div
              className={styles.tag}
              key={uniqueTags.indexOf(tag)}
              onClick={() => setSearch(tag)}
            >
              #{tag}
            </div>
          )
        })}
      </div>

      <div id="beats">
        {filteredBeats.map((beat) => {
          return (
            <TrackLine
              setSearch={setSearch}
              beats={beats}
              beat={beat}
              key={beat.id}
              tagOne={beat.tagOne}
              tagTwo={beat.tagTwo}
              tagThree={beat.tagThree}
              bpm={beat.bpm}
              priceBasic={beat.priceBasic}
              priceBasicPro={beat.priceBasicPro}
              priceUnlimited={beat.priceUnlimited}
              priceExclusive={beat.priceExclusive}
              index={beats.indexOf(beat)}
              title={beat.title}
              description={beat.description}
              srcUrl={beat.srcUrl}
              imageUrl={beat.imageUrl}
              createdAt={beat.createdAt}
            />
          )
        })}
      </div>
    </>
  )
}

export default Beats
