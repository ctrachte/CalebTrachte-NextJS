import Footer from '../components/footer';
import Header from '../components/header';
import Head from 'next/head';
import { motion } from 'framer-motion';

function Github() {
  return (
    <div className="container">
      <Head></Head>
      <Header/>
      <Footer />
    </div>
  )
}

export default Github
