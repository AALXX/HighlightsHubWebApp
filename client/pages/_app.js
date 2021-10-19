import '../styles/globals.css'
import Layout from '../Layout/Layout'


function HighlightsHub({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default HighlightsHub
