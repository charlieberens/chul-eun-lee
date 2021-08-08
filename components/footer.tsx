import React from 'react'

import styles from '../styles/components/footer.module.scss'

import { SiYoutube, SiFacebook } from "react-icons/si";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.social}>
            <a className={styles.yt} href="https://www.youtube.com/channel/UCSMpUVJquw1QsdnOMnlTt2g"><SiYoutube/></a>
            <a className={styles.fb} href="https://www.facebook.com/%EB%B6%81%ED%95%9C%EC%A0%80%EA%B2%A9tv-101681791491587/"><SiFacebook/></a>
            </div>
        </footer>
    )
}
