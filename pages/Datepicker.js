import Footer from "../components/footer";
import Head from "next/head";
import Header from "../components/header";
import MomentDatepicker from "../components/moment-datepicker";
import styles from "../components/moment-datepicker.module.css";
import SideMenu from "../components/menu";
import React, { useEffect, useRef, useState, createRef } from "react";
import About from "../components/docs/about";
import GettingStarted from "../components/docs/getting-started";
import Contributing from "../components/docs/contributing";
import Dependencies from "../components/docs/dependencies";
import Donate from "../components/docs/donate";
import BrowserSupport from "../components/docs/browser-support";

const Datepicker = () => {
  const datepickerRef = useRef(null);
  const aboutRef = useRef(null);
  const dependenciesRef = useRef(null);
  const gettingStartedRef = useRef(null);
  const contributingRef = useRef(null);
  const donateRef = useRef(null);
  const browserSupportRef = useRef(null);

  const DatepickerScroll = () => datepickerRef.current.scrollIntoView();
  const AboutScroll = () => aboutRef.current.scrollIntoView();
  const GettingStartedScroll = () => gettingStartedRef.current.scrollIntoView();
  const DependenciesScroll = () => dependenciesRef.current.scrollIntoView();
  const ContributingScroll = () => contributingRef.current.scrollIntoView();
  const DonateScroll = () => donateRef.current.scrollIntoView();
  const BrowserSupportScroll = () => browserSupportRef.current.scrollIntoView();

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
              width: "50%",
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
      <SideMenu
        DatepickerScroll={DatepickerScroll}
        AboutScroll={AboutScroll}
        GettingStartedScroll={GettingStartedScroll}
        DependenciesScroll={DependenciesScroll}
        ContributingScroll={ContributingScroll}
        DonateScroll={DonateScroll}
        BrowserSupportScroll={BrowserSupportScroll}
      />
      <div className="parent-datepicker-container" ref={datepickerRef}>
        <MomentDatepicker style={styles} />
      </div>

      <Footer />
    </div>
  );
};

export default Datepicker;
