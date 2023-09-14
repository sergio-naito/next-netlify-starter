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
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

      </main>

      <Footer />
    </div>
      <script>
        window.embeddedChatbotConfig = {
        chatbotId: "l_Je4sUJN7THZ-GoO3ir6",
        domain: "www.chatbase.co"
        }
        </script>
        <script
        src="https://www.chatbase.co/embed.min.js"
        chatbotId="l_Je4sUJN7THZ-GoO3ir6"
        domain="www.chatbase.co"
        defer>
        </script>

  )
}
