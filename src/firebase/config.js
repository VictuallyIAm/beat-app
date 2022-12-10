import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: 'montaignebeats-app.firebaseapp.com',
  projectId: 'montaignebeats-app',
  storageBucket: 'montaignebeats-app.appspot.com',
  messagingSenderId: '452220549899',
  appId: '1:452220549899:web:177200657ea0f32d61000e',
  measurementId: 'G-FYNDLNWGEN',
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
