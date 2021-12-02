import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { colors } from '../utils/styles';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Napa Koi Fish Farm</h1>
    <p>These American bred Koi fish are the most healthy and quality Koi fish in the Bay Area.</p>
    <div       
      style={{
        margin: `0 2rem`,
        maxWidth: 960,
        padding: `1rem 1rem`,
      }}>
      <StaticImage
        src="../images/stock-koi-fish.jpg"
        height={400}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="stock koi fish"
        style={{ marginRight: `2rem` }}
      />
      <StaticImage
        src="../images/stock-koi-fish.jpg"
        height={400}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="stock koi fish"
        style={{ marginRight: `2rem` }}
      />
      <StaticImage
        src="../images/stock-koi-fish.jpg"
        height={400}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="stock koi fish"
      />
    </div>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>
)

export default IndexPage
