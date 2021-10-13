import Footer from '../components/footer'
import Head from 'next/head'
import MomentDatepicker from '../components/moment-datepicker'

function Datepicker() {
  return (
    <div className="container">
      <Head></Head>
      <MomentDatepicker />
      <Footer />
    </div>
  )
}

export default Datepicker
