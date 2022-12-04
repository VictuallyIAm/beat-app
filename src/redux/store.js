import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { getDefaultMiddleware } from '@reduxjs/toolkit'
import authReducer from './features/authSlice'
import playerReducer from './features/playerSlice'
import productReducer from './features/productSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  player: playerReducer,
  product: productReducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store
