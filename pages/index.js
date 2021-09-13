import Head from 'next/head'
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Caleb Trachte</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        whileHover={{
          position: 'relative',
          zIndex: 1,
          scale: [1,1.5],
          filter: [
            'hue-rotate(0)',
            'hue-rotate(45deg)',
            'hue-rotate(90deg)',
            'hue-rotate(135deg)',
            'hue-rotate(180deg)',
            'hue-rotate(225deg)',
          ],
          transition: {
            duration: 6
          }
        }}>
        <h1 className="title">
          Caleb Trachte
        </h1>
      </motion.div>
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
            duration: 6
          }
        }}>
        <p className="headerText">PC and Video Game Nerd, Software Developer, Creator of Craft Hot Sauce, Platinum League of Legends Support, Airbnb SuperHost, Married, Reformed 1689. Learn more about me:</p>
      </motion.div>
      <main>

        <ul className="card-list">

          <li className="card">
            <a id="airbnbImage" className="card-image" href="https://www.airbnb.com/h/trachtenhaus" target="_blank">
              <img src="/airbnb-logo-red.jpg" alt="Airbnb Logo" />
            </a>
            <a className="card-description" href="https://www.airbnb.com/h/trachtenhaus"
              target="_blank">
              <h2>Airbnb SuperHost!</h2>
              <p>Caleb Trachte and his wife host guests at their full-service bed and breakfast in Cabot, AR!
              </p>
            </a>
          </li>

          <li className="card">
            <a id="momentDatepickerImage" className="card-image" href="https://www.npmjs.com/package/moment-datepicker-js" target="_blank">
              <img src="/npm-logo.png" alt="NPM Logo" />
            </a>
            <a className="card-description" href="https://www.npmjs.com/package/moment-datepicker-js"
              target="_blank">
              <h2>Moment Datepicker</h2>
              <p>Easily adaptable pure JS driven date range picker, with extensive customizable features.
              </p>
            </a>
          </li>

          <li className="card">
            <a id="githubImage" className="card-image" href="https://www.github.com/ctrachte" target="_blank">
              <img src="/npm-logo.png" alt="NPM Logo" />
            </a>
            <a className="card-description" href="https://www.github.com/ctrachte"
              target="_blank">
              <h2>Open Source Code</h2>
              <p>Learn about side projects I've been working on, demos and tutorials I've taught, and more!
              </p>
            </a>
          </li>

          <li className="card">
            <a id="CAJOfficialLogo" className="card-image" href="https://www.meetup.com/javascript-conway/" target="_blank">
              <img src="/js-AR-official-logo.jpg" alt="Central Arkansas JavaScript Logo" />
            </a>
            <a className="card-description" href="https://www.meetup.com/javascript-conway/" target="_blank">
              <h2>Central Arkansas JavaScript</h2>
              <p>Learn more about the latest JavaScript frameworks, utilities, and tricks through our meetup group! Co-founded by Caleb Trachte, and two other local senior developers.
              </p>
            </a>
          </li>

          <li className="card">
            <a id="sunfireImage" className="card-image" href="https://www.facebook.com/SunfireSauce" target="_blank">
              <img src="/Sunfire-logo.jpg" alt="Sunfire Hot Sauce Logo" />
            </a>
            <a className="card-description" href="https://www.facebook.com/SunfireSauce" target="_blank">
              <h2>Sunfire Hot Sauce</h2>
              <p>Handcrafted, small-batch hot sauce made by Caleb and Amy Trachte in Cabot, Arkansas from fresh garden-grown ingredients. We will be posting current batches so follow us on Facebook and Instagram!
              </p>
            </a>
          </li>

        </ul>
      </main>

      <footer>
        <p>&copy; 2021 Caleb Trachte, powered by NextJS and Vercel.</p>
      </footer>

      <style jsx>{`
      .card-image {
        display: block;
        background: #fff center center no-repeat;
        background-size: cover;
      }
      
      .card-image > img {
        display: block;
        width: 100%;
        opacity: 0; /* visually hide the img element */
      }
      
      #sunfireImage {
        background-image: url("/Sunfire-logo.jpg");
      }
      #airbnbImage {
        background-image: url("/airbnb-logo-red.jpg");
      }
      #CAJOfficialLogo {
        background-image: url("/js-AR-official-logo.jpg");
      }
      #momentDatepickerImage {
        background-image: url("/npm-logo.png");
      }
      #githubImage {
        background-image: url("/github-logo.png");
      }
      
      /* Layout Styles */
      html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        font-size: 16px;
        font-family: sans-serif;
      }
      
      .card-list {
        display: block;
        margin: 1rem auto;
        padding: 0;
        font-size: 0;
        text-align: center;
        list-style: none;
      }
      
      .card {
        display: inline-block;
        width: 90%;
        max-width: 20rem;
        margin: 1rem;
        font-size: 1rem;
        text-decoration: none;
        overflow: hidden;
        background-color: white;
        box-shadow: 0 0 3rem -1rem rgba(0,0,0,0.5);
        transition: transform 0.1s ease-in-out, box-shadow 0.1s;
      }
      
      .card:hover {
        transform: translateY(-0.5rem) scale(1.0125);
        box-shadow: 0 0.5em 3rem -1rem rgba(0,0,0,0.5);
      }
      
      .card-description {
        display: block;
        padding: 1em 0.5em;
        color: #515151;
        text-decoration: none;
      }
      
      .card-description > h2 {
        margin: 0 0 0.5em;
      }
      
      .card-description > p {
        margin: 0;
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

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .headerText {
          width: 100%;
          height: 100px;
          border-bottom: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          margin: 0px;
          color: purple;
        }

        h1 {
          margin-bottom: 0px;
          font-family:  Liberation Mono, Monaco, Courier New, monospace;
          color: purple;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer {
          display: flex;
          justify-content: center;
          align-items: center;
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
          background-color: #F6F6EB;
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
