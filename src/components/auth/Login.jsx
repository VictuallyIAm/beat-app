import React, { useState } from 'react'
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'
import ClickAwayListener from '@mui/base/ClickAwayListener'

import { ToastContainer, toast } from 'react-toastify'
import { auth } from '../../firebase/config'
import 'react-toastify/dist/ReactToastify.css'
import styles from './auth.module.scss'
import { Link } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
import { LoginCard } from '../cards/LoginCard'
import { Loader } from '../loader/Loader'

export const Login = ({
  isLoginOpen,
  isRegisterOpen,
  isResetOpen,
  setIsLoginOpen,
  setIsRegisterOpen,
  setIsResetOpen,
}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const loginUser = (e) => {
    e.preventDefault()
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        setIsLoading(false)
        setIsLoginOpen(false)
      })
      .catch((error) => {
        toast.error(error.message)
        setIsLoading(false)
      })
  }
  const provider = new GoogleAuthProvider()
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // const user = result.user
        toast.success('Logged In')
        setIsLoginOpen(false)
      })
      .catch((error) => {
        toast.error(error.message)
      })
  }
  const handleClickAway = () => {
    setIsLoginOpen(false)
  }

  const openRegister = (e) => {
    setIsRegisterOpen(true)
    setIsLoginOpen(false)
  }
  const openReset = (e) => {
    setIsResetOpen(true)
    setIsLoginOpen(false)
  }
  return (
    <>
      {' '}
      <ToastContainer></ToastContainer>
      <div
      // onClick={(e) => {
      //   if (e.path.includes(document.getElementById('LoginCard')[0]))
      //     setIsLoginOpen(false)
      // }}
      >
        <section className={`container ${styles.auth}`}>
          <LoginCard
            isLoginOpen={isLoginOpen}
            isRegisterOpen={isRegisterOpen}
            isResetOpen={isResetOpen}
            setIsLoginOpen={setIsLoginOpen}
            setIsRegisterOpen={setIsRegisterOpen}
            setIsResetOpen={setIsResetOpen}
          >
            <div className={styles.form}>
              <h3>Sign up</h3>

              <form onSubmit={loginUser}>
                <input
                  type="text"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {isLoading ? (
                  <button type="submit" className={styles.btnLoading}>
                    {isLoading ? <Loader /> : `Log in`}
                  </button>
                ) : (
                  <button type="submit" className={styles.btn}>
                    {isLoading ? <Loader /> : `Log in`}
                  </button>
                )}

                <div className={styles.links}>
                  <Link onClick={openReset}>Reset Password</Link>
                </div>
              </form>
              <button className={styles.btn} onClick={signInWithGoogle}>
                <FaGoogle className={styles.gooSign} /> Sign up With Google
              </button>
              <span className={styles.register}>
                <Link onClick={openRegister}>Create an account</Link>
              </span>
            </div>
          </LoginCard>
        </section>
      </div>
    </>
  )
}
