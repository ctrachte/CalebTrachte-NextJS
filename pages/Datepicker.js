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

const Datepicker = () => {
  const datepickerRef = useRef(null);
  const aboutRef = useRef(null);
  const dependenciesRef = useRef(null);
  const gettingStartedRef = useRef(null);

  const DatepickerScroll = () => datepickerRef.current.scrollIntoView();
  const AboutScroll = () => aboutRef.current.scrollIntoView();
  const GettingStartedScroll = () => gettingStartedRef.current.scrollIntoView();
  const DependenciesScroll = () => dependenciesRef.current.scrollIntoView();

  // run this function from an event handler or an effect to execute scroll
  return (
    <div className="container">
      <Head></Head>
      <Header />
      <div id="about-container">
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={dependenciesRef}>
          <Dependencies />
        </div>
        <div ref={gettingStartedRef}>
          <GettingStarted />
        </div>
      </div>
      <SideMenu
        DatepickerScroll={DatepickerScroll}
        AboutScroll={AboutScroll}
        GettingStartedScroll={GettingStartedScroll}
        DependenciesScroll={DependenciesScroll}
      />
      <div className="parent-datepicker-container" ref={datepickerRef}>
        <MomentDatepicker style={styles} />
      </div>

      <Footer />
    </div>
  );
};

export default Datepicker;
