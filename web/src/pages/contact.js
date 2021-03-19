import React from 'react'
import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";

import { responsiveTitle1 } from "../components/typography.module.css";


const Contact = () => {
    return (
        <Layout>
            <SEO title="Contact" />
            <Container>
                <h1 className={responsiveTitle1}>Contact</h1>
                <p>hi@hcdw.co</p>
                <p>LinkedIn</p>
                <p>Github</p>
            </Container>
        </Layout>
        
    )
}

export default Contact