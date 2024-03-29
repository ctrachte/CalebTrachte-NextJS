
import momentDatepicker from 'moment-datepicker-js'
//With newer versions of React you can use and manipulate the DOM via hooks like this:
import React, { useEffect, useRef, useState } from 'react'
import Form from './form'

const Datepicker = () => {

  const myContainer = useRef(null);

  let datepicker;

  useEffect(() => {
    // reset container and options for datepicker
    let initialOptions = {
      presetMenu: true,
      singleDate: false,
      autoClose: false,
      timePicker: true,
      leadingTrailingDates: true,
      clearDates: true,
      defaults: false,
      militaryTime: false,
      // max: moment("08/14/2022"),
      // min: new Date("08/14/2021"),
      // defaults: [new Date('08/14/2023'),new Date('08/14/2023')],
      menuOptions: [{ title: 'My Birthday', values: [new Date('08/14/1993'),new Date('08/14/1993')] }],
      startDateLabel: "Reservation Start: ",
      endDateLabel: "Reservation End: ",
      onChange: function () {
      },
      onSubmit: function () {
      },
      onClose: function () {
      }
    }
    //initialize datepicker with options
    datepicker = initDatepicker(initialOptions);
  })
  //method to initialize datepicker
  function initDatepicker(options) {
    myContainer.current.innerHTML = "";
    options.containerElement = myContainer.current;
    if (options.primaryColor) {
      options.containerElement.style.setProperty('--Primary', options.primaryColor);
      options.containerElement.style.setProperty('--Secondary', options.secondaryColor);
      options.containerElement.style.setProperty('--Shadow', options.shadowColor);
      options.containerElement.style.setProperty('--Selection', options.selectionColor);
      options.containerElement.style.setProperty('--Accent', options.accentColor);
      options.containerElement.style.setProperty('--Trouble', options.troubleColor);
    }
    return new momentDatepicker(options);
  }

  return (
    <>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"
        integrity="sha512-qTXRIMyZIFb8iQcfjXWCO8+M5Tbc38Qi5WzdPOYZHIlZpzBHG3L3by84BBBOiRGiEb7KKtAOAs5qYdUiZiQNNQ=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      ></script>
      <h2 className="datepicker-heading">Datepicker Sandbox</h2>

      <Form updateDatepicker={initDatepicker} containerElement={myContainer.current}></Form>
      <div className="datpicker-container"ref={myContainer}></div>
    </>
  )
}

export default Datepicker
