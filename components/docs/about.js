import Image from "next/image";

export default function About() {
  return (
    <div>
      <div id="DatepickerGif"
        style={{


        }}
      >
        <Image
          src={"/Datepicker_V1.0.0.gif"}
          alt="Datepicker.js Demonstration gif"
          layout="intrinsic"
          objectPosition={"center center"}
        />
      </div>
      <h2 id="about-the-project">About The Project</h2>
      <p>
        There are many great datepickers available on GitHub, however, I
        didn&#39;t find one that really suited my needs. The hardest thing to
        find is a datepicker that can do a specific combination of features.
      </p>
      <p>Here&#39;s a few other reasons:</p>
      <ul>
        <li>I hate (unnecessary) dependencies like jQuery</li>
        <li>I want the code to be as lightweight and portable as possible.</li>
        <li>
          I want programmable features that HTML5 input elements don&#39;t offer{" "}
        </li>
      </ul>
      <p>
        Of course, no one datepicker will serve all projects since your needs
        may be different. So I&#39;ll be adding more to this API in the near
        future. You may also suggest changes by forking this repo and creating a
        pull request or opening an issue.
      </p>
      <p>
        I am the creator, and currently contribute and maintain this project
        almost entirely myself. I have reviewed and accepted some pull requests
        along the way however, and I am happy to review and merge any helpful
        PRs as soon as I find time. If you want to contribute checkout the
        &quot;Contributing&quot; section!
      </p>
    </div>
  );
}
