import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { ADD_TO_CART } from '../../redux/features/cartSlice'
import styles from '../../styles/ChooseTerm.module.scss'

const ChooseTerm = ({
  title,
  imageUrl,
  beat,
  priceBasic,
  priceBasicPro,
  priceUnlimited,
  priceExclusive,
}) => {
  const dispatch = useDispatch()
  const addToCart = (item, price, license) => {
    dispatch(ADD_TO_CART({ item, price, license }))
  }
  return (
    <>
      <div className={styles.head}>
        <h1>Choose license type</h1>
      </div>
      <div className={styles.terms}>
        <div className={styles.left}>
          <img src={imageUrl} alt="logo" />
          <div>{title}</div>
          <span>Montaigne Beats</span>
        </div>
        <div className={styles.right}>
          <div className={styles.term}>
            <div>
              <h2>Basic License</h2>
              <h3>MP3</h3>
              <Link to="/licensing">Learn more about usage terms</Link>
            </div>
            <div>
              <button
                className={styles.btn}
                onClick={() => addToCart(beat, priceBasic, 'Basic')}
              >
                ${priceBasic}
              </button>
            </div>
          </div>
          <div className={styles.term}>
            <div>
              <h2>Basic PRO</h2>
              <h3>MP3 and WAV</h3>
              <Link to="/licensing">Learn more about usage terms</Link>
            </div>
            <div>
              <button
                className={styles.btn}
                onClick={() => addToCart(beat, priceBasicPro, 'BasicPRO')}
              >
                ${priceBasicPro}
              </button>
            </div>
          </div>
          <div className={styles.term}>
            <div>
              <h2>Unlimited</h2>
              <h3>MP3, WAV and TRACK STEMS</h3>
              <Link to="/licensing">Learn more about usage terms</Link>
            </div>
            <div>
              <button
                className={styles.btn}
                onClick={() => addToCart(beat, priceUnlimited, 'Unlimited')}
              >
                ${priceUnlimited}
              </button>
            </div>
          </div>
          <div className={styles.term}>
            <div>
              <h2>Exclusive License</h2>
              <h3>MP3, WAV and TRACK STEMS</h3>
              <Link to="/licensing">Learn more about usage terms</Link>
            </div>
            <div>
              <button
                className={styles.btn}
                onClick={() => addToCart(beat, priceExclusive, 'Exclusive')}
              >
                ${priceExclusive}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChooseTerm
