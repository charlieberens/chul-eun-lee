import React from 'react'
import styles from '../styles/channel.module.scss'

// Components
import Nav from '../components/nav'; 
import Footer from '../components/footer'; 
import VideoList from '../components/video_list'; 

export default function channel() {
    return (
        <div>
            <Nav/>

            <main className="mc">
                <div>
                    <section className="regSec">
                        <p className="regP">Qui ex quis sint adipisicing eiusmod elit consectetur veniam veniam commodo deserunt nisi ad. Aliqua tempor minim aliqua sunt. Et id culpa voluptate voluptate elit tempor aute. Esse officia anim non mollit Lorem amet. Adipisicing nostrud pariatur aliqua labore.</p>
                    </section>
                    <section className="regSec">
                        <h2 className={styles.videoHeading}>Recent Videos</h2>
                        <VideoList/>
                    </section>
                </div>
            </main>

            <Footer/>
        </div>
    )
}
