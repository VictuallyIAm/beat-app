import React from 'react'
import styles from './auth.module.scss'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify'
import { auth } from '../../firebase/config'
import 'react-toastify/dist/ReactToastify.css'
import { LoginCard } from '../cards/LoginCard'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Loader } from '../loader/Loader'

export const Register = ({
  isLoginOpen,
  isRegisterOpen,
  isResetOpen,
  setIsLoginOpen,
  setIsRegisterOpen,
  setIsResetOpen,
}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [Cpassword, setCpassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const registerUser = (e) => {
    e.preventDefault()
    setIsLoading(true)
    if (password !== Cpassword) {
      toast.error('Password confirmation failed')
      setIsLoading(false)
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        setIsLoading(false)
        toast.success('Account created')
        setIsRegisterOpen(false)
        setIsLoginOpen(true)
      })
      .catch((error) => {
        setIsLoading(false)
        toast.error(error.message)
      })
  }

  const openReset = (e) => {
    setIsResetOpen(true)
    setIsRegisterOpen(false)
  }
  const openLogin = (e) => {
    setIsLoginOpen(true)
    setIsRegisterOpen(false)
  }

  return (
    <>
      <ToastContainer></ToastContainer>
      <div
      // onClick={(e) => {
      //   setIsRegisterOpen(false)
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
              <h3>Create an account</h3>

              <form onSubmit={registerUser}>
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
                <input
                  type="password"
                  placeholder="Confirm password"
                  required
                  value={Cpassword}
                  onChange={(e) => setCpassword(e.target.value)}
                />
                {isLoading ? (
                  <button type="submit" className={styles.btnLoading}>
                    {isLoading ? <Loader /> : `Create an account`}
                  </button>
                ) : (
                  <button type="submit" className={styles.btn}>
                    {isLoading ? <Loader /> : `Create an account`}
                  </button>
                )}
                <div className={styles.links}>
                  <Link onClick={openReset}>Reset Password</Link>
                </div>
              </form>

              <span className={styles.register}>
                <Link onClick={openLogin}>
                  Already have an account? Sign up
                </Link>
              </span>
            </div>
          </LoginCard>
        </section>
      </div>
    </>
  )
}
