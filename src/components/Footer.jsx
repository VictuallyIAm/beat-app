import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { IoLogoSoundcloud } from 'react-icons/io5'
import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillTwitterCircle,
} from 'react-icons/ai'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footerLinks}>
          <a
            href="https://www.instagram.com/montaignebeats"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>
          <a
            href="https://soundcloud.com/montaignebeats"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoSoundcloud />
          </a>
          <a
            href="https://www.facebook.com/montaignebeats/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillFacebook />
          </a>
          <a
            href="https://www.youtube.com/channel/UCMO5qyUEZ1KE4nXoAg3bYXA"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillYoutube />
          </a>
          <a
            href="https://twitter.com/BeatsMontaigne"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillTwitterCircle />
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer
