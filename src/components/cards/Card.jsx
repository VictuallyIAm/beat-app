import styles from '../../styles/Card.module.scss'

export const Card = ({ children, cardClass }) => {
  return <div className={`${styles.card} ${cardClass}`}>{children}</div>
}
