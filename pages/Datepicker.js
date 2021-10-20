import Footer from '../components/footer'
import Head from 'next/head'
import Header from '../components/header'
import MomentDatepicker from '../components/moment-datepicker'
import styles from '../components/moment-datepicker.module.css'

function Datepicker() {
  return (
    <div className="container">
      <Head></Head>
      <Header/>
      <MomentDatepicker style={styles}/>
      <Footer />
    </div>
  )
}

export default Datepicker
