import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
      
    
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
<iframe
src="https://www.chatbase.co/chatbot-iframe/l_Je4sUJN7THZ-GoO3ir6"
width="100%"
style="height: 100%; min-height: 700px"
frameborder="0"
></iframe>

    
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

      </main>

      <Footer />
    </div>

  )
}
