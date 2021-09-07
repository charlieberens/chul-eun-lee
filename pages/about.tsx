import React from "react";
import styles from "../styles/about.module.scss";

// Components
import Nav from "../components/nav";
import Footer from "../components/footer";
import Image from "next/image";
import Translate from "../components/translate";

export default function About() {
    return (
        <Translate data-file="about.js">
            <Nav />

            <main className="mc">
                <div className={styles.content}>
                    <div className={styles.imgOuter}>
                        <Image
                            data-atl="img alt"
                            placeholder="blur"
                            blurDataURL="/images/filler_face-blur.jpg"
                            src="/images/filler_face.jpg"
                            alt="Chul-eun Lee"
                            width="400"
                            height="400"
                            layout="fixed"
                        />
                    </div>
                    <div className={styles.text}>
                        <h1 data-tl="aboutHeader">About Chul-eun Lee</h1>
                        <p data-tl="aboutMain">
                            Ea ullamco minim anim nisi magna id sunt nulla quis
                            proident laborum elit elit dolore. Ipsum minim
                            mollit esse commodo mollit. Pariatur sunt nostrud
                            incididunt esse. Labore consequat minim anim laboris
                            adipisicing non occaecat. Id commodo tempor magna
                            adipisicing sint id sint eiusmod. Esse nulla aliqua
                            velit minim nisi officia occaecat ut.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </Translate>
    );
}
