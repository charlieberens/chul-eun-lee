import React from 'react'
import Link from 'next/link'

import styles from '../styles/components/nav.module.scss'

function Nav() {
    return (
        <nav className={styles.nav}>
            <Link href="/"><a className={styles.navLogo}>Chul-eun Lee</a></Link>
            <div className={styles.navLinks}>
                <Link href="/about">About</Link>
                <Link href="/channel">Channel</Link>
                <Link href="/articles">Articles</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </nav>
    )
}

export default Nav
