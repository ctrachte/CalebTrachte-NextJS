import Footer from '../components/footer'
import Head from 'next/head'
import Header from '../components/header'
import MomentDatepicker from '../components/moment-datepicker'
import styles from '../components/moment-datepicker.module.css'
import SideMenu from '../components/menu'
import React from "react";

function Datepicker() {
  return (
    <div className="container">
      <Head></Head>
      <Header/>
      <SideMenu/>
      <MomentDatepicker style={styles}/>
      <Footer />
    </div>
  )
}

export default Datepicker
