import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './auth.module.scss'
import { LoginCard } from '../cards/LoginCard'
import { sendPasswordResetEmail } from '@firebase/auth'
import { auth } from '../../firebase/config'
import { toast, ToastContainer } from 'react-toastify'
import { Loader } from '../loader/Loader'

export const Reset = ({
  isLoginOpen,
  isRegisterOpen,
  isResetOpen,
  setIsLoginOpen,
  setIsRegisterOpen,
  setIsResetOpen,
}) => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const resetPassword = (e) => {
    setIsLoading(true)
    e.preventDefault()
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsLoading(false)
        toast.success('Check your email')
        setIsResetOpen(false)
      })
      .catch((error) => {
        setIsLoading(false)
        toast.error(error.message)
      })
  }
  const openRegister = (e) => {
    setIsRegisterOpen(true)
    setIsResetOpen(false)
  }
  const openLogin = (e) => {
    setIsLoginOpen(true)
    setIsResetOpen(false)
  }
  return (
    <>
      <ToastContainer></ToastContainer>
      <div
      // onClick={(e) => {
      //   setIsResetOpen(false)
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
              <h3>Reset your password</h3>

              <form onSubmit={resetPassword}>
                <input
                  type="text"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                {isLoading ? (
                  <button type="submit" className={styles.btnLoading}>
                    {isLoading ? <Loader /> : `Reset password`}
                  </button>
                ) : (
                  <button type="submit" className={styles.btn}>
                    {isLoading ? <Loader /> : `Reset password`}
                  </button>
                )}
                <div className={styles.linksTwo}>
                  <Link onClick={openLogin}>Sign up</Link>
                  <Link onClick={openRegister}>Create an account</Link>
                </div>
              </form>
            </div>
          </LoginCard>
        </section>
      </div>
    </>
  )
}
