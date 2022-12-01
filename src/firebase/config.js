import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

export const firebaseConfig = {
  apiKey: 'AIzaSyBma82pXNoNq7h8Hlcv162fL1adFXWPV-I',
  authDomain: 'montaignebeats-app.firebaseapp.com',
  projectId: 'montaignebeats-app',
  storageBucket: 'montaignebeats-app.appspot.com',
  messagingSenderId: '452220549899',
  appId: '1:452220549899:web:177200657ea0f32d61000e',
  measurementId: 'G-FYNDLNWGEN',
}

export const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
