import React from 'react'
import styles from '../styles/About.module.scss'

const About = () => {
  return (
    <div className={styles.body}>
      <div className={styles.left}>
        <div className={styles.image}>
          <img src="https://i.ibb.co/yhHbH8h/about.jpg" alt="about" />
        </div>
        <div className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto optio
          nobis nemo iure quisquam deleniti, porro, voluptas ipsa accusamus,
          ipsum delectus commodi consequatur ea temporibus pariatur impedit
          doloribus praesentium? Qui dolorem porro vel dignissimos, ab minima
          quasi voluptatem iure repudiandae eveniet nam, rem nobis, autem eius
          excepturi obcaecati rerum sit adipisci eos mollitia dolorum nesciunt
          cumque. Doloribus itaque iste dignissimos fuga placeat, delectus
          consequatur rerum nostrum, adipisci sit quod maiores?
        </div>
      </div>
      <div className={styles.right}>
        <div>
          <a href="/#">Instagram</a>
        </div>
        <div>
          <a href="/#">Youtube</a>
        </div>
        <div>
          <a href="/#">Soundcloud</a>
        </div>
        <div>
          <a href="/#">Facebook</a>
        </div>
        <div>
          <a href="/#">Twitter</a>
        </div>
      </div>
    </div>
  )
}

export default About
