import React, { useEffect } from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { Link, NavLink } from 'react-router-dom'
import styles from '../styles/Navbar.module.scss'
import logo from '../data/images/logo.png'
import { FiShoppingCart } from 'react-icons/fi'
import { Login } from './auth/Login'
import { Register } from './auth/Register'
import { Reset } from './auth/Reset'
import { Dropdown } from './Dropdown'
import { onAuthStateChanged, signOut } from '@firebase/auth'
import { auth } from '../firebase/config'
import { useDispatch, useSelector } from 'react-redux'
import {
  SET_ACTIVE_USER,
  REMOVE_ACTIVE_USER,
} from '../redux/features/authSlice'
import ShowOnLogin, { ShowOnLogout } from './hiddenLinks/HiddenLinks'
import { AdminOnlyLink } from './adminOnlyRoute/AdminOnlyRoute'
import { UserDrop } from './UserDrop'
import {
  CALCULATE_SUBTOTAL,
  CALCULATE_TOTAL_QUANTITY,
  selectCartTotalAmount,
  selectCartTotalQuantity,
} from '../redux/features/cartSlice'

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const [isResetOpen, setIsResetOpen] = useState(false)
  const [scrollPage, setScrollPage] = useState(false)
  const [displayName, setDisplayName] = useState('')
  const dispatch = useDispatch()

  const fixNavbar = () => {
    if (window.scrollY > 60) {
      setScrollPage(true)
    } else {
      setScrollPage(false)
    }
  }
  window.addEventListener('scroll', fixNavbar)

  const cartTotalQuantity = useSelector(selectCartTotalQuantity)
  const cartSubtotal = useSelector(selectCartTotalAmount)

  useEffect(() => {
    dispatch(CALCULATE_TOTAL_QUANTITY())
    dispatch(CALCULATE_SUBTOTAL())
  }, [dispatch])

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

  const cart = (
    <Link to="cart">
      <span className={styles.cart}>
        <div>${cartSubtotal.toFixed(2)}</div>
        <div className={styles.a}>
          <FiShoppingCart size={20} />
          <div className={styles.p}>{cartTotalQuantity}</div>
        </div>
      </span>
    </Link>
  )

  return (
    <>
      <ToastContainer></ToastContainer>
      <div className={scrollPage ? `${styles.fixed}` : null}>
        <header
          onClick={(e) => {
            if (isResetOpen) setIsResetOpen(false)
            if (isLoginOpen) setIsLoginOpen(false)
            if (isRegisterOpen) setIsRegisterOpen(false)
          }}
        >
          <div className={styles.header}>
            <div className={styles.logo}>
              <Link to="/beat-app">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <nav>
              <div>
                <ul>
                  <li>
                    <NavLink to="/beat-app">Beats</NavLink>
                  </li>
                  <li>
                    <Dropdown />
                  </li>
                  <li>
                    <NavLink
                      to="about"
                      className={({ isActive }) =>
                        isActive ? `${styles.activeLink}` : ''
                      }
                    >
                      About me
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="contacts"
                      className={({ isActive }) =>
                        isActive ? `${styles.activeLink}` : ''
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="licensing"
                      className={({ isActive }) =>
                        isActive ? `${styles.activeLink}` : ''
                      }
                    >
                      Lisense
                    </NavLink>
                  </li>
                  <li>
                    <AdminOnlyLink>
                      <Link to="admin/home">
                        <button className={styles.btn}>Administrate</button>
                      </Link>
                    </AdminOnlyLink>
                  </li>
                </ul>
              </div>
            </nav>
            <div className={styles.rightNav}>
              <div>{cart}</div>
              <ShowOnLogout>
                <p
                  className={styles.sign}
                  onClick={(e) => setIsLoginOpen(!isLoginOpen)}
                >
                  Sign In
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
