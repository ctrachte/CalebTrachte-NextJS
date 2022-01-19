export default function Header() {
    const markdown = ```
          ## About The Project
  
          ![DatepickerV1 0 0](https://github.com/ctrachte/Datepicker.js/blob/65613f45108fb9f3d29162b277064d9ef489f54c/Datepicker_V1.0.0.gif)
  
          There are many great datepickers available on GitHub, however, I didn't find one that really suited my needs. The hardest thing to find is a datepicker that can do a specific combination of features.
  
          Here's a few other reasons:
          * I hate (unnecessary) dependencies like jQuery
          * I want the code to be as lightweight and portable as possible.
          * I want programmable features that HTML5 input elements don't offer 
  
          Of course, no one datepicker will serve all projects since your needs may be different. So I'll be adding more to this API in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue.
  
          I am the creator, and currently contribute and maintain this project almost entirely myself. I have reviewed and accepted some pull requests along the way however, and I am happy to review and merge any helpful PRs as soon as I find time. If you want to contribute checkout the "Contributing" section!
          ```;
    return ReactDom.render(
      <ReactMarkdown children={markdown} />,
      document.body
    );
  }
  