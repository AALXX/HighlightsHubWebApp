import '../styles/globals.css'

import Layout from "../Components/Layout/Layout"

function GameHighlightsApp({ Component, pageProps }) {
  return (
    <Layout> 
      <Component {...pageProps} />

    </Layout>  
  )
}

export default GameHighlightsApp
