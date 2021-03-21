import React from 'react'
import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";
import AboutDetail from '../components/about'

import { responsiveTitle1 } from "../components/typography.module.css";


const About = () => {
    return (
        <Layout>
            <SEO title="About" />
            <Container>
                <h1 className={responsiveTitle1}>About</h1>
                <AboutDetail />
            </Container>
        </Layout>
        
    )
}

export default About