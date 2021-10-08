import Footer from '../components/footer';
import Header from '../components/header';
import Head from 'next/head';
import { motion } from 'framer-motion';

function Github({ posts }) {
  return (

        <div className="container">
        <Head></Head>
        <Header/>
        <ul>
      {profiles.map((profile) => (
        <li>{profile.title}</li>
      ))}
    </ul>
        <Footer />
      </div>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://api.github.com/users/ctrachte');
  const profiles = await res.json();
  console.log(profiles)

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      profiles,
    },
  }
}

export default Github