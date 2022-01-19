import Footer from '../components/footer'
import Head from 'next/head'
import Header from '../components/header'
import MomentDatepicker from '../components/moment-datepicker'
import styles from '../components/moment-datepicker.module.css'
import SideMenu from '../components/menu'
import React, { useEffect, useRef, useState, createRef } from 'react'
import About from '../components/docs/about'
import GettingStarted from '../components/docs/getting-started'
const Datepicker = () => {

  const datepickerRef = useRef(null)
  const aboutRef = useRef(null)

  const executeScroll = () => datepickerRef.current.scrollIntoView();    
  // run this function from an event handler or an effect to execute scroll 
  return (
    <div className="container">
      <Head></Head>
      <Header/>
      <SideMenu DatepickerScroll={executeScroll} />
      <div className="parent-datepicker-container" ref={datepickerRef}>
        <MomentDatepicker style={styles}/>
      </div>
      <div id="about-container" ref={aboutRef}>
      </div>
      <About/>
      <Footer />
    </div>
  )
}

export default Datepicker
