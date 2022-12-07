import { createPortal } from 'react-dom'
import loader from '../../data/images/loaderMuch.gif'
import styles from './Loader.module.css'

export const Loader = () => {
  return createPortal(
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <img src={loader} alt="Loading..." />
      </div>
    </div>,
    document.getElementById('loader')
  )
}
