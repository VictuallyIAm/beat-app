import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaTrashAlt } from 'react-icons/fa'
import {
  selectCartItems,
  selectCartTotalAmount,
  selectCartTotalQuantity,
} from '../redux/features/cartSlice'
import styles from '../styles/Cart.module.scss'

const Cart = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotalAmount = useSelector(selectCartTotalAmount)
  const cartTotalQuantity = useSelector(selectCartTotalQuantity)

  return (
    <section>
      <div>
        {cartItems.length === 0 ? (
          <>
            <p>Your cart is empty</p>
            <br />
            <div>
              <Link to="/">&larr; Continue listening</Link>
            </div>
          </>
        ) : (
          <>
            <div className={styles.head}>
              <h1>Cart review</h1>
              <button className={styles.btnTwo}>Clear cart </button>
            </div>
            {cartItems.map((cart, index) => {
              const { id, title, imageUrl } = cart.item
              const { price } = cart
              const { license } = cart
              return (
                <div key={id} className={styles.cart}>
                  <div>
                    <img src={imageUrl} alt="logo" className={styles.img} />
                  </div>
                  <div className={styles.title}>{title} by Montaine beats</div>
                  <div className={styles.price}>${price}</div>
                  <div className={styles.license}>
                    {license ? (
                      <Link to="/licensing">
                        <button className={styles.licBtn}>
                          {license} license
                        </button>
                      </Link>
                    ) : (
                      '-'
                    )}
                  </div>
                  <div className={styles.icon}>
                    <FaTrashAlt size={19} color={'red'} />
                  </div>
                </div>
              )
            })}
          </>
        )}
      </div>
      <div>dfdf</div>
    </section>
  )
}

export default Cart
