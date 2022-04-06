export default function Cards() {
  return (
    <ul className="card-list">
      <li className="card">
        <a
          id="airbnbImage"
          className="card-image"
          href="https://www.airbnb.com/h/trachtenhaus"
          target="_blank"
        >
          <img src="/airbnb-logo-red.jpg" alt="Airbnb Logo" />
        </a>
        <a
          className="card-description"
          href="https://www.airbnb.com/h/trachtenhaus"
          target="_blank"
        >
          <h2>Airbnb SuperHost!</h2>
          <p>
            Caleb Trachte and his wife host guests at their full-service bed and
            breakfast in Cabot, AR!
          </p>
        </a>
      </li>

      <li className="card">
        <a
          id="momentDatepickerImage"
          className="card-image"
          href="./Datepicker"
        >
          <img src="/npm-logo.png" alt="NPM Logo" />
        </a>
        <a
          className="card-description"
          href="./Datepicker"
        >
          <h2>Moment Datepicker</h2>
          <p>
            Easily adaptable pure JS driven date range picker, with extensive
            customizable features.
          </p>
        </a>
      </li>

      <li className="card">
        <a
          id="githubImage"
          className="card-image"
          href="https://github.com/ctrachte"
        >
          <img src="/github-logo.png" alt="github Logo" />
        </a>
        <a
          className="card-description"
          href="/Github"
        >
          <h2>Open Source Code</h2>
          <p>
            Learn about side projects I've been working on, demos and tutorials
            I've taught, and more!
          </p>
        </a>
      </li>

      <li className="card">
        <a
          id="CAJOfficialLogo"
          className="card-image"
          href="https://www.meetup.com/javascript-conway/"
          target="_blank"
        >
          <img
            src="/js-AR-official-logo.jpg"
            alt="Central Arkansas JavaScript Logo"
          />
        </a>
        <a
          className="card-description"
          href="https://www.meetup.com/javascript-conway/"
          target="_blank"
        >
          <h2>Central Arkansas JavaScript</h2>
          <p>
            Learn more about the latest JavaScript frameworks, utilities, and
            tricks through our meetup group! Co-founded by Caleb Trachte, and
            two other local senior developers.
          </p>
        </a>
      </li>

      <li className="card">
        <a
          id="sunfireImage"
          className="card-image"
          href="https://www.facebook.com/SunfireSauce"
          target="_blank"
        >
          <img src="/Sunfire-logo.jpg" alt="Sunfire Hot Sauce Logo" />
        </a>
        <a
          className="card-description"
          href="https://www.facebook.com/SunfireSauce"
          target="_blank"
        >
          <h2>Sunfire Hot Sauce</h2>
          <p>
            Handcrafted, small-batch hot sauce made by Caleb and Amy Trachte in
            Cabot, Arkansas from fresh garden-grown ingredients. We will be
            posting current batches so follow us on Facebook and Instagram!
          </p>
        </a>
      </li>

      <li className="card">
        <a
          id="linkedInImage"
          className="card-image"
          href="https://www.linkedin.com/in/caleb-trachte/"
          target="_blank"
        >
          <img src="/LinkedIn_logo_initials.png" alt="LinkedIn Logo" />
        </a>
        <a
          className="card-description"
          href="https://www.linkedin.com/in/caleb-trachte/"
          target="_blank"
        >
          <h2>Connect with me!</h2>
          <p>
            View employment history, professional thoughts and topics I have
            shared, and see my connections.
          </p>
        </a>
      </li>
    </ul>
  )
}
