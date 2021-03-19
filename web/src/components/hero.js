import React from 'react'
import { Link } from 'gatsby'

import { responsiveTitle1 } from "../components/typography.module.css";
import { responsiveTitle4 } from "../components/typography.module.css";


const Hero = () => {
    return (
        <>
        <h1 className={responsiveTitle1}>Helena DeMaria-Williams — Front End Developer based in London.</h1>
        <h4 className={responsiveTitle4}>Currently working with clients at <a href='https://hcdw.co' target='blank'>HCDW</a>. Building <a href='https://gwaith.io' target='blank'>gwaith.io</a>.</h4>
        </>
    )
}

export default Hero