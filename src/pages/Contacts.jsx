import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import styles from '../styles/Contact.module.scss'
import { toast } from 'react-toastify'

const Contacts = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        'template_n5m22uw',
        form.current,
        'Qy5EvY0m13ER3oFiB'
      )
      .then(
        (result) => {
          toast.success('Message sent successfully!')
        },
        (error) => {
          toast.error(error.text)
        }
      )
    e.target.reset()
  }

  return (
    <section>
      <div className={`container ${styles.contact}`}>
        <div className={styles.section}>
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <input type="text" name="user_name" placeholder="Name" required />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <textarea
                name="message"
                placeholder="Your message"
                cols="30"
                rows="5"
              ></textarea>
              <button type="submit" className={styles.btn}>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contacts
