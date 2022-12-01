import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { IoLogoSoundcloud } from 'react-icons/io5'
import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineCopyrightCircle,
  AiFillTwitterCircle,
} from 'react-icons/ai'
import styles from '../styles/Footer.module.css'
import { Link } from 'react-router-dom'

const date = new Date()
const year = date.getFullYear()

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footerLinks}>
          <a href="https://www.instagram.com/montaignebeats" target="_blank">
            <BsInstagram />
          </a>
          <a href="https://soundcloud.com/montaignebeats" target="_blank">
            <IoLogoSoundcloud />
          </a>
          <a href="https://www.facebook.com/montaignebeats/" target="_blank">
            <AiFillFacebook />
          </a>
          <a
            href="https://www.youtube.com/channel/UCMO5qyUEZ1KE4nXoAg3bYXA"
            target="_blank"
          >
            <AiFillYoutube />
          </a>
          <a href="https://twitter.com/BeatsMontaigne" target="_blank">
            <AiFillTwitterCircle />
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer
