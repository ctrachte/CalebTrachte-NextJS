import Head from 'next/head'
import styles from '../styles/contact.module.css'
import { useState } from 'react'

export default function ContactGmail() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    
    const handleSubmit = (e) => { 
        e.preventDefault()
        console.log('Sending')
    //   let data = {
    //       name,
    //       email,
    //       message
    //     }
    //   fetch('/api/contactGmail', {
    //       method: 'POST',
    //       headers: {
    //         'Accept': 'application/json, text/plain, */*',
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(data)
    //     }).then((res) => {
    //       console.log('Response received')
    //       if (res.status === 200) {
    //         console.log('Response succeeded!')
    //         setSubmitted(true)
    //         setName('')
    //         setEmail('')
    //         setBody('')
    //       }
    //     })
      }
  return (
    <div className="container">
      <Head>
        <title>Caleb Trachte</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <div className={styles.container}>
            < form className={styles.main} >
                < formGroup className={styles.inputGroup} >
                    < label htmlFor='name'>Name</label>
                    < input type='text' onChange={(e)=>{setName(e.target.value)}} name='name' className={styles.inputField} />
                </formGroup>
                < formGroup className={styles.inputGroup} >
                    < label htmlFor='email'>Email</label>
                    < input type='email' onChange={(e)=>{setEmail(e.target.value)}} name='email' className={styles.inputField} />
                </formGroup>
                < formGroup className={styles.inputGroup} >
                    < label htmlFor='message'>Message</label>
                    < input type='text' onChange={(e)=>{setMessage(e.target.value)}} name='message' className={styles.inputField} />
                </formGroup>
                < input type='submit' onClick={(e)=>{handleSubmit(e)}}/>
            </form >
        </div>
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
      #linkedInImage {
        background-image: url("/LinkedIn_logo_initials.png");
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

        @media only screen and (min-width: 992px) {
          .card-list {
            max-width: 1200px;
          }
        }

        .headerText, .title {
          text-align: center;
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
