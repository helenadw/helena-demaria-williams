import React from 'react'
import * as styles from './contact-details.module.css'

const ContactDetails = () => {
    return (
        <div>
            <p className={styles.title}>Say Hello</p>
            <p><a className={styles.link} href='mailto:hi@hcdw.co'>hi@hcdw.co</a></p>
            <p className={styles.title}>Find me here</p>
            <p><a className={styles.link} href='https://www.linkedin.com/in/helenadw/' target='blank'>LinkedIn</a></p>
            <p><a className={styles.link} href='https://github.com/hcdw' target='blank'>GitHub</a></p>
        </div>
    )
}

export default ContactDetails