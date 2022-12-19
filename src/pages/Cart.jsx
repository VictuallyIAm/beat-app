import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaTrashAlt } from 'react-icons/fa'
import {
  CALCULATE_SUBTOTAL,
  CALCULATE_TOTAL_QUANTITY,
  CLEAR_CART,
  REMOVE_FROM_CARD,
  selectCartItems,
  selectCartTotalAmount,
  selectCartTotalQuantity,
} from '../redux/features/cartSlice'
import styles from '../styles/Cart.module.scss'
import PaypalButton from '../components/PaypalButton'

const Cart = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotalAmount = useSelector(selectCartTotalAmount)
  const cartTotalQuantity = useSelector(selectCartTotalQuantity)
  const dispatch = useDispatch()

  const removeFromCart = (cart) => {
    dispatch(REMOVE_FROM_CARD(cart))
  }

  const clearCart = () => {
    dispatch(CLEAR_CART())
  }

  useEffect(() => {
    dispatch(CALCULATE_SUBTOTAL())
    dispatch(CALCULATE_TOTAL_QUANTITY())
  }, [dispatch, cartItems])

  return (
    <section>
      <div>
        {cartItems.length === 0 ? (
          <div className={styles.empty}>
            <p className={styles.p}>Your cart is empty</p>
            <br />
            <button className={styles.btnTwo}>
              <Link to="/beat-app">&larr; Continue shopping</Link>
            </button>
          </div>
        ) : (
          <div>
            <div className={styles.head}>
              <h1>Cart review</h1>
              <button className={styles.btnTwo} onClick={clearCart}>
                Clear cart
              </button>
            </div>
            <div className={styles.section}>
              <div className={styles.items}>
                {cartItems.map((cart, index) => {
                  const { id, title, imageUrl } = cart.item
                  const { price } = cart
                  const { license } = cart
                  return (
                    <div key={id} className={styles.cart}>
                      <div>
                        <img src={imageUrl} alt="logo" className={styles.img} />
                      </div>
                      <div className={styles.title}>
                        {title} by Montaigne beats
                      </div>
                      <div className={styles.price}>${price}</div>
                      <div className={styles.license}>
                        {license ? (
                          <Link to="/beat-app/licensing">
                            <button className={styles.licBtn}>
                              {license} license
                            </button>
                          </Link>
                        ) : (
                          '-'
                        )}
                      </div>
                      <div className={styles.icon}>
                        <FaTrashAlt
                          size={19}
                          color={'red'}
                          onClick={() => removeFromCart(cart)}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className={styles.checkout}>
                <div className={styles.totalItems}>
                  <div>Items</div>
                  <div>{cartTotalQuantity}</div>
                </div>
                <div className={styles.totalCost}>
                  <div>Total</div>
                  <div>${cartTotalAmount.toFixed(2)}</div>
                </div>
                <div className={styles.forgot}>
                  Didn't forget something?{' '}
                  <Link to="/beat-app">Continue shopping</Link>
                </div>
                <div className={styles.btnOne}>
                  <PaypalButton products={cartItems} />
                </div>
                <div className={styles.agree}>
                  By clicking the button you accept the product(s) License
                  Agreement(s)
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Cart
