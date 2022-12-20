import * as React from 'react'
import Layout from '../components/layout.js'

// Step 2: Define your component
const IndexPage = () => {
    return (
        <main>
            <Layout pageTitle="Home">
                <p> This is the Home page </p>
            </Layout>
        </main>
    )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage