// You can copy/paste this any time you need a starting point for a new window.
class Settings extends WindowTemplate {
  constructor() {
    super(); // to inherit from base class
    this.id = this.randomWindowID();
    this.container = document.createElement("div");
    this.container.classList.add(
      "inline-flex",
      "items-center",
      "content-center",
      "mt-0",
      "w-full"
    );
    this.baseTemplate = `
                <div class="w-full p-5 text-center content-center items-center">
                    <h4 class="pt-2 fc-header-title settings-buttons">
                        <i role="button" class="pfi-profile is-2 m-3" title="My Profile"></i>
                        <i role="button" class="pfi-cube-logout is-2 m-3" title="Log out ... "></i>
                        <i role="button" class="pfi-light-bulb-lit is-2 mb-3 ms-3 me-3 mt-0" title="Toggle light/dark mode ... "></i>
                        <i role="button" class="pfi-eye" is-2 mb-3 ms-3 me-3 mt-0" title="Toggle hide/show toolbar... "></i>
                    </h4>
                    <h4 class="pt-2 fc-header-title">Theme:</h4>
                    <select class="m-3 themeSelector" style="width:90%; color:black !important;">
                    </select>
                    <h4 class="pt-2 fc-header-title">Tool Bar Position:</h4>
                    <select class="m-3 toolBarPositionSelector" style="width:66%; color:black !important;">
                        <option id="top">top</option>
                        <option id="bottom">bottom</option>
                        <option id="left">left</option>
                        <option id="right">right</option>
                    </select>
                </div>`;

    this.container.innerHTML = this.baseTemplate;

    // windows options, REQUIRED
    this.initOptions = {
      body: this.container, //should always be the container you created above
      inject: [], //String Array of js files, DB will add any additional to this
      roles: [], //String Array of Roles, OVERWRITTEN BY DB, pipe delimited "|"
      limit: 1,
      draggable: true,
      shadows: true,
      snapping: true,
      resizeable: false, // enables/disables dragging corners of window to resize (not grid positions)
      id: this.id, //in template base class, should always be a random ID to prevent overlaps
      Icon: "pfi-clipboard",
      footer: `Customize Kitchen Windows!`,
      minimize: true,
      maximize: true,
    };
  }
  // THIS METHOD REQUIRED TO MAKE YOUR APP FUNCTION
  async initialize() {
    let context = this;
    this.parent.settingsButtons =
      this.container.querySelector(".settings-buttons");
    // theme selector
    this.themeSelector = this.container.querySelector(".themeSelector");
    this.parent.themeColors.forEach((theme) => {
      let themeOption = document.createElement("option");
      themeOption.value = theme.name;
      themeOption.innerHTML = theme.name;
      context.themeSelector.appendChild(themeOption);
    });
    this.themeSelector.onchange = (e) => {
      this.parent.setTheme(e.target.value);
      this.parent.changeColors();
    };
    // tool bar position selector
    this.toolBarPositionSelector = this.container.querySelector(
      ".toolBarPositionSelector"
    );
    this.toolBarPositionSelector.onchange = (e) => {
      this.parent.toolBarPosition = e.target.value;
      this.parent.browserWindowResize();
      this.parent.collapseToolbar();
    };
    this.toolBarPositionSelector
      .querySelectorAll("option")
      .forEach((option) => {
        if (option.innerHTML === this.parent.toolBarPosition) {
          context.toolBarPositionSelector.value = option.innerHTML;
        }
      });
    // profile:
    this.container
      .querySelector(".pfi-profile")
      .addEventListener("click", (e) => {
        alert("Profile app coming soon!");
      });
    // logout:
    this.container
      .querySelector(".pfi-cube-logout")
      .addEventListener("click", (e) => {
        // login logout button
        let closeConfirmHeading = (document.createElement(
          "div"
        ).innerHTML = `Are you sure you want to log out?`);
        this.parent.confirm(closeConfirmHeading, logOut, function () {
          return;
        });
      });
    // light-dark mode button:
    this.parent.lightDarkMode = this.container.querySelector(
      ".pfi-light-bulb-lit"
    );
    if (this.parent.darkMode) {
      this.parent.lightDarkMode.classList.add("pfi-light-bulb");
      this.parent.lightDarkMode.classList.remove("pfi-light-bulb-lit");
    } else {
      this.parent.lightDarkMode.classList.add("pfi-light-bulb-lit");
      this.parent.lightDarkMode.classList.remove("pfi-light-bulb");
    }
    this.parent.lightDarkMode.style.color = this.parent.darkMode
      ? this.parent.darkModeColor
      : "gold";
    this.parent.lightDarkMode.style.cursor = "pointer";
    this.parent.lightDarkMode.id = "toolbar-lightDarkMode";
    this.parent.lightDarkMode.addEventListener("click", (e) => {
      this.parent.darkMode = !this.parent.darkMode;
      this.parent.changeColors();
      this.parent.lightDarkMode.style.color =
        this.parent.darkMode
          ? this.parent.darkModeColor
          : "gold";
      if (this.parent.darkMode) {
        this.parent.lightDarkMode.classList.add("pfi-light-bulb");
        this.parent.lightDarkMode.classList.remove(
          "pfi-light-bulb-lit"
        );
      } else {
        this.parent.lightDarkMode.classList.add("pfi-light-bulb-lit");
        this.parent.lightDarkMode.classList.remove("pfi-light-bulb");
      }
    });
    // styles applied to all buttons:
    this.parent.settingsButtons
      .querySelectorAll("i")
      .forEach((button) => {
        button.style.cursor = "pointer";
      });
  }
}
//add to windows scope - REQUIRED
// this.parent.AppsManager.addClass({ Settings: Settings });
