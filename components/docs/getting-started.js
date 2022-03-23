import React from "react";
export default function GettingStarted() {
  return(
    <div>
      <h2 id="getting-started">Getting Started</h2>
      <h3 id="using-git-and-vanilla-js">Using Git, and Vanilla JS</h3>
      <ol>
        <li>
          Clone the repo
          <code>git clone https://github.com/ctrachte/Datepicker.js</code>
        </li>
        <li>
          Comment out lines 1 through 12 of <code>Datepicker.js</code> to
          implement with pure Vanilla JS, HTML and CSS.
        </li>
        <li>
          Open <code>Datepicker.html</code> in your browser of choice to view
          and test behavior.
        </li>
        <li>
          Place the Datepicker.js and moment.js files in the appropriate
          directory in your project{" "}
          <em>
            (for many, that will be your bundled JS helpers or packages
            directory)
          </em>
          .
        </li>
        <li>
          Adjust the options as necessary for your needs, be sure to supply the
          Datepicker options with the appropriate container HTML element node.
        </li>
      </ol>
      <h3 id="using-npm-react-next-js-">Using NPM (React, Next.js)</h3>
      <ol>
        <li>
          Install the npm package:
          <code>npm i --save moment-datepicker-js</code>
        </li>
        <li>
          In your Node Modules directory, You may delete Datepicker.html,
          DatepickerSmall.css, and Datepicker_V1.0.0.gif, you will not need
          these files.{" "}
        </li>
        <li>
          <p>
            Import the Datepicker, and move/scope the DatepickerSmall.css and
            moment.js files in the appropriate places in your project. Below is
            a basic example component that should work in Next.js or React for
            simple implementations:
          </p>
        </li>
        <li>
          <p>
            Adjust the options as necessary for your needs, be sure to supply
            the Datepicker options with the appropriate container HTML element
            node. <em>See usage section below</em>
          </p>
        </li>
      </ol>
      <h2 id="usage">Usage</h2>
      <p>1.) You will first need a recent version of Moment.js installed. </p>
      <ul>
        <li>
          You can use the one included in the helpers folder of this project{" "}
          <em> _</em>RECOMMENDED<em>_ </em>
        </li>
        <li>
          or download the latest version from{" "}
          <a href="https://momentjs.com/">their website</a>.
        </li>
      </ul>
      <p>
        2.) Download and add the Datepicker.js and Datepicker.css files to their
        appropriate directories in your project.
      </p>
      <ul>
        <li>
          you will need to reference them in your project in a way that they are
          in scope to the code you are initializing the datepicker with.{" "}
        </li>
      </ul>
      <p>
        3.) Below are all the options you can enable using Vanilla JS syntax.
        For implementation in React, see above <a href="#Using-NPM">NPM</a>{" "}
        section
      </p>
      <p>
        4.) Adjust the options above to meet the needs of your project, or the
        project&#39;s component you are implementing the datepicker in.{" "}
      </p>
    </div>
  );
}
