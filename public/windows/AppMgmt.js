// You can copy/paste this any time you need a starting point for a new window.
class AppMgmt extends WindowTemplate {
  constructor() {
    super(); // to inherit from base class
    this.id = this.randomWindowID();
    this.container = document.createElement("div");
    this.submit = this.submit.bind(this);
    this.cancel = this.cancel.bind(this);
    this.container.classList.add(
      "d-flex",
      "align-items-center",
      "justify-content-around",
      "flex-wrap",
      "mt-0"
    );
    this.baseTemplate = `

        <div class="w-50 px-3 m-5 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-app-id">
          Select App
        </label>
        <div class="relative">
          <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-app-id">
          <option id="" value=""> Create New ... </option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <form class=" mt-4 p-4">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-50 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-app-name">
              App Name
            </label>
            <input class="appearance-none block w-50 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-app-name" type="text" placeholder="App Name">
          </div>
          <div class="w-50 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-description">
              App Description
            </label>
            <input class="appearance-none block w-50 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-description" type="text" placeholder="Describe the App">
          </div>
          <div class="w-50 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-app-icon">
            App Icon
          </label>
          <input class="appearance-none block w-50 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-app-icon" type="text" placeholder="eg. 'pfi-clipboard'">
        </div>
        <div class="w-50 px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-icon-color">
          App Icon Color
        </label>
        <input class="appearance-none block w-50 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-icon-color" type="text" placeholder="eg. 'grey'">
      </div>
        <div class="w-50 px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-menu-alt-title">
            Menu Alt Title 
          </label>
          <input class="appearance-none block w-50 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-menu-alt-title" type="text" placeholder="Alt Title">
        </div>
        <div class="w-50 px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-app-header">
            App Header
          </label>
          <input class="appearance-none block w-50 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-app-header" type="text" placeholder="Defaults to Title">
        </div>
        <div class="w-50 px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-app-footer">
            App Footer
          </label>
          <input class="appearance-none block w-50 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-app-footer" type="text" placeholder="">
        </div>
        <div class="w-50 px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-url">
            URL
          </label>
          <input class="appearance-none block w-50 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-url" type="text" placeholder="Clicking links users to ... ">
        </div>
        <div class="w-50 px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-icon-bkg-color">
            Icon Background Color
          </label>
          <input class="appearance-none block w-50 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-icon-bkg-color" type="text" placeholder="white">
        </div>
        <div class="w-50 px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-class-file">
            Class File (relative path)
          </label>
          <input class="appearance-none block w-50 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-class-file" type="text" placeholder="/windows/AppMgmt.js">
        </div>
        <div class="w-50 px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-class-name">
            Class Name
          </label>
          <input class="appearance-none block w-50 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-class-name" type="text" placeholder="AppMgmt">
        </div>
        <div class="w-50 px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-roles">
            Roles ( "|" delimited)
          </label>
          <input class="appearance-none block w-50 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-roles" type="text" placeholder="eg. admin|student">
        </div>
        <div class="w-50 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-key-words">
            Key Words ( "|" delimited)
          </label>
          <input class="appearance-none block w-50 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-key-words" type="text" placeholder="eg. settings|customize">
        </div>
        <div class="form-check form-switch p-5">
          <input checked class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="grid-active">
          <label class="form-check-label inline-block text-gray-800" for="flexSwitchCheckDefault">Active ?</label>
        </div>
        <div class="form-check form-switch p-5 ">
          <input class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="grid-open-new">
          <label class="form-check-label inline-block text-gray-800" for="flexSwitchCheckDefault">Opens New Tab ?</label>
        </div>
      </div>

      </form>
      
      <div class="flex justify-center border-b border-black-500 py-2">
        <button class="submit-button text-center bg-gray-500 hover:bg-gray-700 text-black text-white font-bold py-2 px-4 border border-gray-700 rounded">
            Submit
          </button>
          <button class="cancel-button text-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded">
          Cancel
        </button>
      </div>
      `;
    this.container.innerHTML = this.baseTemplate;
    this.container.querySelectorAll('input').forEach((input)=> {
      input.style.color = "black";
    });
    this.container.querySelector('select').style.color = "black";
    // windows options, REQUIRED
    this.initOptions = {
      body: this.container, //should always be the container you created above
      inject: [], //String Array of js files, DB will add any additional to this
      roles: [], //String Array of Roles, OVERWRITTEN BY DB, pipe delimited "|"
      snapping: true, // makes window snap to grid positions
      draggable: true, // can be dragged by the user
      resizeable: false, // enables/disables dragging corners of window to resize (not grid positions)
      locked: true, //Have to pick a grid - snap locked to grid (does NOT stop user from dragging)
      id: this.id, //in template base class, should always be a random ID to prevent overlaps
      minimize: true,
      maximize: true,
    };
  }
  // THIS METHOD REQUIRED TO MAKE YOUR APP FUNCTION
  async initialize() {
    let context = this;
    this.AppSelector = this.container.querySelector("#grid-app-id");
    this.loadingSpinner.show();
    this.GetAppData();
    this.AppSelector.onchange = async (e) => {
      let app = {};
      context.loadingSpinner.show();
      app.AppID =
        context.AppSelector.options[context.AppSelector.selectedIndex].id;
      app.AppTitle = context.AppSelector.value;
      if (app.AppID === "CreateNew") {
        context.cancel();
        return;
      } else {
        await GetApps(app).then((res) => {
          context.setValues(res[0]);
        });
      }
    };
    this.submitButton = this.container.querySelector(".submit-button");
    this.submitButton.onclick = this.submit;
    this.cancelButton = this.container.querySelector(".cancel-button");
    this.cancelButton.onclick = this.cancel;
    // setTimeout(context.loadingSpinner.hide, 1000);
  }
  async submit() {
    let context = this;
    GlobalWindowManager.loadingSpinner.show();
    let AppID =
      context.AppSelector.options[context.AppSelector.selectedIndex].id;
    let App = {
      AppTitle: context.container.querySelector("#grid-app-name").value,
      Description: context.container.querySelector("#grid-description").value,
      Icon: context.container.querySelector("#grid-app-icon").value,
      IconColor: context.container.querySelector("#grid-icon-color").value,
      IconBkgColor: context.container.querySelector("#grid-icon-bkg-color")
        .value,
      AppMenuAltTitle: context.container.querySelector("#grid-menu-alt-title")
        .value,
      AppHeader: context.container.querySelector("#grid-app-header").value,
      AppFooter: context.container.querySelector("#grid-app-footer").value,
      URL: context.container.querySelector("#grid-url").value || null,
      OpenNewTab: context.container.querySelector("#grid-open-new").checked,
      ClassFile: context.container.querySelector("#grid-class-file").value,
      ClassName: context.container.querySelector("#grid-class-name").value,
      Active: context.container.querySelector("#grid-active").checked,
      Roles: context.container.querySelector("#grid-roles").value,
      KeyWords: context.container.querySelector("#grid-key-words").value,
    };
    if (AppID !== "CreateNew") {
      App.AppID = AppID;
    }
    if (!App.AppTitle) {
     GlobalWindowManager.callout(`You must give your App a title. Check values and try again.`, 'red', null);
     return;
    }
    SupaBaseClient.from("Apps")
      .upsert(App)
      .then((result) => {
        if (result.error) {
          GlobalWindowManager.callout(`Error updating/creating ${App.AppTitle}, check values and try again.`, 'red', null);
        } else {
          if (
            context.AppSelector.options[context.AppSelector.selectedIndex]
              .id === "CreateNew"
          ) {
            GlobalWindowManager.callout(
            "New App '" +
                context.container.querySelector("#grid-app-name").value +
                "' created.",'green');
          } else {
            GlobalWindowManager.callout(
              "'" +
                context.container.querySelector("#grid-app-name").value +
                "' updated.",'green');
          }
        }
        GlobalWindowManager.loadingSpinner.hide();
      });
  }
  cancel() {
    let context = this;
    this.GetAppData();
    this.AppSelector.value = this.container.querySelector("#CreateNew").value;
    this.container.querySelector("#grid-app-name").value = "";
    this.container.querySelector("#grid-description").value = "";
    this.container.querySelector("#grid-app-icon").value = "";
    this.container.querySelector("#grid-icon-color").value = "";
    this.container.querySelector("#grid-icon-bkg-color").value = "";
    this.container.querySelector("#grid-menu-alt-title").value = "";
    this.container.querySelector("#grid-app-header").value = "";
    this.container.querySelector("#grid-app-footer").value = "";
    this.container.querySelector("#grid-url").value = "";
    this.container.querySelector("#grid-open-new").value = false;
    this.container.querySelector("#grid-class-file").value = "";
    this.container.querySelector("#grid-class-name").value = "";
    this.container.querySelector("#grid-active").value = true;
    this.container.querySelector("#grid-roles").value = "";
    this.container.querySelector("#grid-key-words").value = "";
  }
  async GetAppData(){
    let context = this;
    if (typeof GetApps !== "function")  {
      console.warn('GetApps method is not defined in WindowsConfig.js, this app may not function correctly.')
      context.loadingSpinner.hide();
      return;
    }
     await GetApps()
    .then((res) => {
      context.AppSelector.innerHTML = "";
      res.push({ AppID: "CreateNew", AppTitle: "Create New ... " });
      res.forEach((app) => {
        let option = document.createElement("option");
        option.id = app.AppID;
        option.innerHTML = app.AppTitle;
        context.AppSelector.appendChild(option);
      });
      context.AppSelector.value =
        context.container.querySelector("#CreateNew").value;
        context.loadingSpinner.hide();
    })
    .catch((err) => GlobalWindowManager.callout('Error retrieving app data!', 'red', null)    );
  }
  setValues(App) {
    this.container.querySelector("#grid-app-name").value = App.AppTitle;
    this.container.querySelector("#grid-description").value = App.Description;
    this.container.querySelector("#grid-app-icon").value = App.Icon;
    this.container.querySelector("#grid-icon-color").value = App.IconColor;
    this.container.querySelector("#grid-icon-bkg-color").value =
      App.IconBkgColor;
    this.container.querySelector("#grid-menu-alt-title").value =
      App.AppMenuAltTitle;
    this.container.querySelector("#grid-app-header").value = App.AppHeader;
    this.container.querySelector("#grid-app-footer").value = App.AppFooter;
    this.container.querySelector("#grid-url").value = App.URL;
    this.container.querySelector("#grid-open-new").value = App.OpenNewTab;
    this.container.querySelector("#grid-class-file").value = App.ClassFile;
    this.container.querySelector("#grid-class-name").value = App.ClassName;
    this.container.querySelector("#grid-active").value = App.Active;
    this.container.querySelector("#grid-roles").value = App.Roles;
    this.container.querySelector("#grid-key-words").value = App.KeyWords;
    this.loadingSpinner.hide();
  }
}
//add to windows scope - REQUIRED
// GlobalWindowManager.AppsManager.addClass({ AppMgmt: AppMgmt });
