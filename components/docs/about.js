import { render } from "react-dom";
import React, { useEffect, useRef, useState, createRef } from 'react'
import showdown from "showdown";
// export default function About() {

//   useEffect(() => {
//     let markdown = render(<Markdown>{markdown}</Markdown>, document.body);
//   });
//   return(markdown)
// }

const About = (props) => {
  return(
  <div>
  <h2 id="about-the-project">About The Project</h2>
  <p>There are many great datepickers available on GitHub, however, I didn&#39;t find one that really suited my needs. The hardest thing to find is a datepicker that can do a specific combination of features.</p>
  <p>Here&#39;s a few other reasons:</p>
  <ul>
  <li>I hate (unnecessary) dependencies like jQuery</li>
  <li>I want the code to be as lightweight and portable as possible.</li>
  <li>I want programmable features that HTML5 <code>&lt;input type=&quot;date&quot;/&gt;</code> doesn&#39;t offer </li>
  </ul>
  <p>Of course, no one datepicker will serve all projects since your needs may be different. So I&#39;ll be adding more to this API in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue.</p>
  <p>I am the creator, and currently contribute and maintain this project almost entirely myself. I have reviewed and accepted some pull requests along the way however, and I am happy to review and merge any helpful PRs as soon as I find time. If you want to contribute checkout the <a href="#contributing">Contributing</a> section!</p>
  </div>
  );
}

export default About