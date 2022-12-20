import * as React from 'react'
import Layout from '../components/layout.js'

const AboutPage = () => {
    return (
        <main>
            <Layout pageTitle="About">
                <p> This is the About page </p>
            </Layout>
        </main>
    )
}

export const Head = () => <title>About Me</title>

export default AboutPage