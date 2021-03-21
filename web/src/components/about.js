import React from 'react'
import * as styles from './about.module.css'
import img from './icon/profile-photo.jpg'

const AboutDetail = () => {
    return (
        <div className={styles.container}>
            <div className={styles.copyContainer}>
                <p className={styles.largeText}>Hi, I'm Helena.</p>
                <p className={styles.mediumText}>I'm a Front End Developer specialising in React, based in London.</p>
                <p>I love building things that users interact with directly, that used to mean retail installations 
                and events, now I use code as a medium to create brand experiences. </p>
                <p>I'm a self-taught developer with a liberal arts education. I read <a href='https://en.wikipedia.org/wiki/The_Two_Cultures' target='blank'>C.P Snow's 'The Two Cultures'</a> and
                took the ideas very seriously! Creating good product, design, or solutions requires 
                an understanding of the technical and human considerations and balancing the needs of both.</p>
                <p>I worked in Brand Marketing before becoming a developer, the main focus was on creating brand and 
                consumer experience. I bring all of the insights I gained in these roles about how to create memorable, 
                seamless user experiences into my development work.</p>
                <p>Currently I'm working with clients at <a href='https://hcdw.co' target='blank'>HCDW</a>, my web design 
                and digital marketing business and building <a href='https://gwaith.io' target='blank'>Gwaith.io</a>, a 
                jobs board app focussed on the tech industry in Wales.</p>

                <p>If you want to get in touch about projects or to share something interesting, you can reach me at <a href='mailto:hi@hcdw.co'>hi@hcdw.co</a>.</p>
            </div>
            <div className={styles.imgContainer}>
                <img src={img} className={styles.img}/>
            </div>

        </div>
        
    )
}
export default AboutDetail