import React, { useEffect } from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { Link, NavLink } from 'react-router-dom'
import styles from '../styles/Navbar.module.scss'
import logo from '../data/images/logo.png'
import { BiPurchaseTag } from 'react-icons/bi'
import { Login } from './auth/Login'
import { Register } from './auth/Register'
import { Reset } from './auth/Reset'
import { Dropdown } from './Dropdown'
import { onAuthStateChanged, signOut } from '@firebase/auth'
import { auth } from '../firebase/config'
import { useDispatch } from 'react-redux'
import {
  SET_ACTIVE_USER,
  REMOVE_ACTIVE_USER,
} from '../redux/features/authSlice'
import ShowOnLogin, { ShowOnLogout } from './hiddenLinks/HiddenLinks'
import AdminOnlyRoute, { AdminOnlyLink } from './adminOnlyRoute/AdminOnlyRoute'
import { UserDrop } from './UserDrop'

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const [isResetOpen, setIsResetOpen] = useState(false)
  const [displayName, setDisplayName] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.displayName === null) {
          const uOne = user.email.substring(0, user.email.indexOf('@'))
          const uName = uOne.charAt(0).toUpperCase() + uOne.slice(1)
          setDisplayName(uName)
        } else setDisplayName(user.displayName)

        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.displayName : displayName,
            userID: user.uid,
          })
        )
      } else {
        setDisplayName('')
        dispatch(REMOVE_ACTIVE_USER())
      }
    })
  }, [dispatch, displayName])

  const userLogout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        toast.error(error.message)
      })
  }

  return (
    <>
      <ToastContainer></ToastContainer>
      <div className={styles.overtop}>
        <header
          onClick={(e) => {
            if (isResetOpen) setIsResetOpen(false)
            if (isLoginOpen) setIsLoginOpen(false)
            if (isRegisterOpen) setIsRegisterOpen(false)
          }}
        >
          <div className={styles.header}>
            <div className={styles.logo}>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <nav>
              <div>
                <ul>
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? `${styles.activeLink}` : ''
                      }
                    >
                      Beats
                    </NavLink>
                  </li>
                  <li>
                    <Dropdown />
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        isActive ? `${styles.activeLink}` : ''
                      }
                    >
                      About me
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contacts"
                      className={({ isActive }) =>
                        isActive ? `${styles.activeLink}` : ''
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li>
                    <AdminOnlyLink>
                      <Link to="/admin/home">
                        <button className={styles.btn}>Administrate</button>
                      </Link>
                    </AdminOnlyLink>
                  </li>
                </ul>
              </div>
            </nav>
            <div className={styles.rightNav}>
              <ShowOnLogout>
                <p onClick={(e) => setIsLoginOpen(!isLoginOpen)}>
                  Sign In <BiPurchaseTag />
                </p>
              </ShowOnLogout>

              <ShowOnLogin>
                <UserDrop userLogout={userLogout} displayName={displayName} />
              </ShowOnLogin>
            </div>
          </div>
        </header>
      </div>
      {isLoginOpen && (
        <Login
          isLoginOpen={isLoginOpen}
          isRegisterOpen={isRegisterOpen}
          isResetOpen={isResetOpen}
          setIsLoginOpen={setIsLoginOpen}
          setIsRegisterOpen={setIsRegisterOpen}
          setIsResetOpen={setIsResetOpen}
        />
      )}
      {isRegisterOpen && (
        <Register
          isLoginOpen={isLoginOpen}
          isRegisterOpen={isRegisterOpen}
          isResetOpen={isResetOpen}
          setIsLoginOpen={setIsLoginOpen}
          setIsRegisterOpen={setIsRegisterOpen}
          setIsResetOpen={setIsResetOpen}
          displayName={displayName}
          setDisplayName={setDisplayName}
        />
      )}
      {isResetOpen && (
        <Reset
          isLoginOpen={isLoginOpen}
          isRegisterOpen={isRegisterOpen}
          isResetOpen={isResetOpen}
          setIsLoginOpen={setIsLoginOpen}
          setIsRegisterOpen={setIsRegisterOpen}
          setIsResetOpen={setIsResetOpen}
        />
      )}
    </>
  )
}

export default Navbar
