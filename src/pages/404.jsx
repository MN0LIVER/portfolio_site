import * as React from "react"
import Layout from "@lekoarts/gatsby-theme-jodie/src/components/layout"

const NotFound = () => (
  <Layout>
    <div style={{ textAlign: `center` }}>
      <h1>404</h1>
      <p>Uh oh.... maybe you should refresh?

        or Maybe go <a href="/">Here</a>
      </p>
    </div>
  </Layout>
)

export default NotFound
