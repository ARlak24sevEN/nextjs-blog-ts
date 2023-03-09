
import Head from 'next/head'
import Layout from '../../../components/layout'

export default function FirstPost() {
  return (
  <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={()=>
        console.log('script leaded conrrectly, window.FB been population')}
      /> */}
      <h1>First Post</h1>
      {/* <h2>
        <Link href="/">Back to home</Link>
      </h2> */}
      </Layout>
  
  )
}
