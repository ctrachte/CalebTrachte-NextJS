import Head from 'next/head'
import { motion } from 'framer-motion'
import Header from '../components/header'
import Footer from '../components/footer'
import Cards from '../components/cards'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Caleb Trachte</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <motion.div
        whileHover={{
          position: 'relative',
          zIndex: 1,
          scale: [1, 1.1],
          filter: [
            'hue-rotate(0)',
            'hue-rotate(45deg)',
            'hue-rotate(90deg)',
            'hue-rotate(135deg)',
            'hue-rotate(180deg)',
            'hue-rotate(225deg)',
          ],
          transition: {
            duration: 6,
          },
        }}
      >
        <p className="headerText">
          PC and Video Game Nerd, Software Developer, Creator of Craft Hot
          Sauce, Platinum League of Legends Support, Airbnb SuperHost, Married,
          Reformed 1689. Learn more about me:
        </p>
      </motion.div>
      <main>
        <Cards />
      </main>

      <Footer />

      <style jsx>{`
        #logo {
          background-image: url('/logo.jpg');
        }
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        @media only screen and (min-width: 992px) {
          .card-list {
            max-width: 1200px;
          }
        }

        h1 {
          margin-bottom: 0px;
          font-family: Liberation Mono, Monaco, Courier New, monospace;
          color: purple;
        }

        .code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .logo {
          height: 1em;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          background-color: #f6f6eb;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
