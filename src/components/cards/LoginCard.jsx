import React from 'react'
import ClickAwayListener from 'react-click-away-listener'
import styles from '../../styles/LoginCard.module.scss'

export const LoginCard = ({
  children,
  cardClass,
  isLoginOpen,
  isRegisterOpen,
  isResetOpen,
  setIsLoginOpen,
  setIsRegisterOpen,
  setIsResetOpen,
}) => {
  return (
    <ClickAwayListener
      onClickAway={() => {
        if (isLoginOpen) setIsLoginOpen(false)
        if (isRegisterOpen) setIsRegisterOpen(false)
        if (isResetOpen) setIsResetOpen(false)
      }}
    >
      <div className={`${styles.card} ${cardClass}`}>{children}</div>
    </ClickAwayListener>
  )
}
