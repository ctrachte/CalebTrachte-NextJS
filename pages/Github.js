import Footer from '../components/footer';
import Header from '../components/header';
import Head from 'next/head';
import { motion } from 'framer-motion';

function Github({ profile }) {
  return (
      <div>
        <Head></Head>
        <Header/>
            {
              <div>{profile.bio}</div>
            }
        <Footer />
      </div>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get user profile
  const res = await fetch('https://api.github.com/users/ctrachte');
  const profile = await res.json();

  return {
    props: {
      profile,
    },
  }
}

export default Github