import { configureStore, combineReducers } from '@reduxjs/toolkit'
import authReducer from './features/authSlice'
import playerReducer from './features/playerSlice'
import productReducer from './features/productSlice'
import filterReducer from './features/filterSlice'
import cartReducer from './features/cartSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  player: playerReducer,
  product: productReducer,
  filter: filterReducer,
  cart: cartReducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store
