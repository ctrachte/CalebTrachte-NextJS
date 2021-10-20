import momentDatepicker from 'moment-datepicker-js'
//With newer versions of React you can use and manipulate the DOM via hooks like this:
import React, { useEffect, useRef } from 'react'

const Datepicker = () => {
  const myContainer = useRef(null)
  let datepicker
  useEffect(() => {
    datepicker = new momentDatepicker({ containerElement: myContainer.current })
    //    console.log(myContainer.current, datepicker)
  })

  return (
    <>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"
        integrity="sha512-qTXRIMyZIFb8iQcfjXWCO8+M5Tbc38Qi5WzdPOYZHIlZpzBHG3L3by84BBBOiRGiEb7KKtAOAs5qYdUiZiQNNQ=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      ></script>
      <h1>Datepicker</h1>
      <div ref={myContainer}></div>
    </>
  )
}

export default Datepicker
