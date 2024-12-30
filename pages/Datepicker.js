import Footer from "../components/footer";
import Head from "next/head";
import Header from "../components/header";
import MomentDatepicker from "../components/moment-datepicker";
import styles from "../components/moment-datepicker.module.css";
import React, { useRef } from "react";
import About from "../components/about";
import GettingStarted from "../components/docs/getting-started";
import Contributing from "../components/docs/contributing";
import Dependencies from "../components/docs/dependencies";
import Donate from "../components/docs/donate";
import BrowserSupport from "../components/docs/browser-support";
import Value from "../components/docs/methods/methods";

const Datepicker = () => {
  const datepickerRef = useRef(null);
  const aboutRef = useRef(null);
  const dependenciesRef = useRef(null);
  const gettingStartedRef = useRef(null);
  const contributingRef = useRef(null);
  const donateRef = useRef(null);
  const browserSupportRef = useRef(null);
  const valueRef = useRef(null);
  // run this function from an event handler or an effect to execute scroll
  return (
    <div className="container">
      <Head></Head>
      <Header />
      <div id="about-container">
        <div ref={aboutRef}>
          <h1
            id="datepicker-title"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              textAlign:"center"
            }}
          >
            Moment-Datepicker-JS
          </h1>
          <About />
        </div>
        <div ref={dependenciesRef}>
          <Dependencies />
        </div>
        <div ref={gettingStartedRef}>
          <GettingStarted />
        </div>
        <div ref={valueRef}>
          <Value />
        </div>
        <div ref={contributingRef}>
          <Contributing />
        </div>
        <div ref={browserSupportRef}>
          <BrowserSupport />
        </div>
        <div ref={donateRef}>
          <Donate />
        </div>
      </div>
      <div id="sandbox-container"className="parent-datepicker-container" ref={datepickerRef}>
        <MomentDatepicker style={styles} />
      </div>

      <Footer />
    </div>
  );
};

export default Datepicker;
