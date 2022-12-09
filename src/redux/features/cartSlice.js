import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    ADD_TO_CART(state, action) {
      const productIndex = state.cartItems.findIndex(
        (item) => item.item.id === action.payload.item.id
      )
      if (productIndex >= 0) {
        toast.info('Already in cart', { position: 'top-left' })
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 }
        state.cartItems.push(tempProduct)
        toast.success(`${action.payload.item.title} added to cart`, {
          position: 'top-left',
        })
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    REMOVE_FROM_CARD(state, action) {
      const newCartItem = state.cartItems.filter(
        (item) => item.item.id !== action.payload.item.id
      )
      state.cartItems = newCartItem
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    CLEAR_CART(state, action) {
      state.cartItems = []
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    CALCULATE_SUBTOTAL(state, action) {
      const array = []
      state.cartItems.map((item) => {
        const { price, cartQuantity } = item
        const cartItemAmount = price * cartQuantity
        return array.push(cartItemAmount)
      })
      const totalAmount = array.reduce((a, b) => {
        return a + b
      }, 0)
      state.cartTotalAmount = totalAmount
    },
    CALCULATE_TOTAL_QUANTITY(state, action) {
      const array = []
      state.cartItems.map((item) => {
        const { cartQuantity } = item
        const quantity = cartQuantity
        return array.push(quantity)
      })
      const totalQuantity = array.reduce((a, b) => {
        return a + b
      }, 0)
      state.cartTotalQuantity = totalQuantity
    },
  },
})

export const {
  ADD_TO_CART,
  REMOVE_FROM_CARD,
  CLEAR_CART,
  CALCULATE_SUBTOTAL,
  CALCULATE_TOTAL_QUANTITY,
} = cartSlice.actions
export const selectCartItems = (state) => state.cart.cartItems
export const selectCartTotalQuantity = (state) => state.cart.cartTotalQuantity
export const selectCartTotalAmount = (state) => state.cart.cartTotalAmount

export default cartSlice.reducer
