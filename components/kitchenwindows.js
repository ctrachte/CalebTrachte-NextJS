import React, { useEffect, useRef, useState } from "react";

const kitchenWindows = () => {
  const myContainer = useRef(null);

  const GetFavorites = async (options) => {
    return [];
    const Favorites = [
      {
        id: 18,
        created_at: "2022-12-02 15:49:16.012029+00",
        fk_PersonID: "",
        fk_AppID: 1,
        fk_AppCollectionID: "",
        Active: true,
        userId: "6eab0408-678f-4393-b330-60f1b3c565ef",
      },
    ];
  };
  const GetApps_KitchenWindows = async (options) => {
    return [
      {
        AppID: 1,
        RecordCreationDateTime: "2022-08-17 21:32:23+00",
        AppTitle: "Create or Update Apps",
        Description: "Create, Edit, update app references",
        Icon: "pfi-windoz",
        IconColor: "light-blue",
        IconBkgColor: "white",
        AppMenuAltTitle: "App Management",
        AppHeader: "App Management",
        AppFooter: "",
        URL: "",
        OpenNewTab: false,
        ClassFile: "/windows/AppMgmt.js",
        ClassName: "AppMgmt",
        Roles: "admin",
        Active: true,
        RecordLastUpdateDateTime: "",
        CreatedBy: "",
        LastUpdatedBy: "",
        KeyWords: "settings|customize",
      },
    ];
  };
  const GetAppFavorites = async (options) => {
    return [];
    const Favorites = [
      {
        id: 18,
        created_at: "2022-12-02 15:49:16.012029+00",
        fk_PersonID: "",
        fk_AppID: 1,
        fk_AppCollectionID: "",
        Active: true,
        userId: "6eab0408-678f-4393-b330-60f1b3c565ef",
      },
    ];
  };
  const GetFavoritedApps = async (options) => {
    const FavoritedApps = [
      {
        AppID: 1,
        RecordCreationDateTime: "2022-08-17 21:32:23+00",
        AppTitle: "Create or Update Apps",
        Description: "Create, Edit, update app references",
        Icon: "pfi-windoz",
        IconColor: "light-blue",
        IconBkgColor: "white",
        AppMenuAltTitle: "App Management",
        AppHeader: "App Management",
        AppFooter: "",
        URL: "",
        OpenNewTab: false,
        ClassFile: "/windows/AppMgmt.js",
        ClassName: "AppMgmt",
        Roles: "admin",
        Active: true,
        RecordLastUpdateDateTime: "",
        CreatedBy: "",
        LastUpdatedBy: "",
        KeyWords: "settings|customize",
      },
    ]; // this result is from joining Apps and AppFavorites tables (by user)
    return FavoritedApps;
  };
  const Favorite = async (options) => {
    // must reach out to your AppFavorites table and UPSERT a row
  };
  const GetAppCollections = async (options) => {
    return [
      {
        AppCollectionID: 1,
        created_at: "2022-11-17 20:26:27+00",
        Title: "Utilities",
        Description:
          "Settings, customization, view/create apps and collections",
        Icon: "pfi-gears",
        IconColor: "brown",
        Active: true,
        RecordUpdateDateTime: "2022-11-17 20:27:07+00",
        Roles: "admin|all|auth",
        KeyWords: "settings|customization|view|apps|app|create|update",
        IconBkgColor: "",
      },
    ];
  };
  const GetCollectionsApps = async (options) => {
    return;
    const AppCollectionApps = [
      {
        AppCollectionAppID: 2,
        created_at: "2022-11-17 21:20:39.703733+00",
        Active: true,
        fk_AppID: 2,
        fk_AppCollectionID: 1,
        RecordLastUpdateDateTime: "2022-11-17 21:20:39.703733+00",
      },
    ]; // join this with Apps table.
  };
  const GetChildCollections = async (options) => {
    return [
      {
        AppCollectionID: 1,
        created_at: "2022-11-17 20:26:27+00",
        Title: "Utilities",
        Description:
          "Settings, customization, view/create apps and collections",
        Icon: "pfi-gears",
        IconColor: "brown",
        Active: true,
        RecordUpdateDateTime: "2022-11-17 20:27:07+00",
        Roles: "admin|all|auth",
        KeyWords: "settings|customization|view|apps|app|create|update",
        IconBkgColor: "",
      },
    ];
  };
  const SearchApps = async (keyword) => {
    // searches Apps Table by keyword
    return [
      {
        AppID: 1,
        RecordCreationDateTime: "2022-08-17 21:32:23+00",
        AppTitle: "Create or Update Apps",
        Description: "Create, Edit, update app references",
        Icon: "pfi-windoz",
        IconColor: "light-blue",
        IconBkgColor: "white",
        AppMenuAltTitle: "App Management",
        AppHeader: "App Management",
        AppFooter: "",
        URL: "",
        OpenNewTab: false,
        ClassFile: "/windows/AppMgmt.js",
        ClassName: "AppMgmt",
        Roles: "admin",
        Active: true,
        RecordLastUpdateDateTime: "",
        CreatedBy: "",
        LastUpdatedBy: "",
        KeyWords: "settings|customize",
      },
    ];
  };
  const SearchCollections = async (keyword) => {
    //searches AppCollections Table by keyword
    return [
      {
        AppCollectionID: 1,
        created_at: "2022-11-17 20:26:27+00",
        Title: "Utilities",
        Description:
          "Settings, customization, view/create apps and collections",
        Icon: "pfi-gears",
        IconColor: "brown",
        Active: true,
        RecordUpdateDateTime: "2022-11-17 20:27:07+00",
        Roles: "admin|all|auth",
        KeyWords: "settings|customization|view|apps|app|create|update",
        IconBkgColor: "",
      },
    ];
  };
  const GetUsage = async (context) => {
    // returns an array of Apps, ranked by most rows in AppUsage Table, by person/user

    //then executes the following:
    // .then(res => {
    //   values = await res.JSON();
    //   context.Apps = values;
    //   context.setMenuItems(true);
    // })

    //dummy data response
    const AppUsage = [
      {
        AppUsageID: 1,
        created_at: "2022-12-13 21:54:44.96376+00",
        RecordLastUpdateDateTime: "",
        fk_AppID: 1,
        fk_AppCollectionID: "",
        userId: "6eab0408-678f-4393-b330-60f1b3c565ef",
      },
    ];
    return [];
  };
  const RecordUsage = async (options) => {
    // Creates new row in usage table
    return [];
  };
  const logIn = async (options, context) => {
    // returns auth token, sets the token into the session.
    return;
    // execute after successful sign in
    if (!res.data.user) {
      context.closeModal();
      context.warn(res.error.message, function () {
        context.closeModal();
        context.login();
      });
    } else {
      sessionStorage.setItem("user", JSON.stringify(res.data.user));
      sessionStorage.setItem("userRoles", [res.data.user.role]);
      sessionStorage.setItem("session", JSON.stringify(res.data.session));
      context.closeModal();
      context.warn("Sign in Successful!", context.init);
    }
  };
  const signUp = async (options, context) => {
    return;
    // execute after successful signup
    if (!res.data.user) {
      context.closeModal();
      context.warn(res.error.message, function () {
        context.closeModal();
        context.login();
      });
    } else {
      context.closeModal();
      context.warn("Sign up Successful!");
      context.init();
    }
  };
  const logOut = async () => {
    // must clear session from browser and logout from server
    return;
  };
  const GetUser = () => {
    return JSON.parse(sessionStorage.getItem("user"));
  };
  // must be connected to your own profile edit/create applet
  const OpenProfileApp = (context) => {
    alert("User Profile app not Configured. See WindowsConfig.");
    return;
    context.AppsManager.start({
      Icon: "pfi-profile",
      AppHeader: "My Profile",
      ClassName: "UserProfile",
      ClassFile: "./windows/UserProfile.js",
    });
  };
  // not wired in - this is specific to the backend you are using
  const thirdPartyAuthenticate = async (provider) => {
    provider = provider.toLowerCase();
    switch (provider) {
      case provider === "google":
        //add your 3rd party auth logic here...
        break;
      case provider === "github":
        //add your 3rd party auth logic here...
        break;
      default:
        break;
    }
  };
  // must return boolean.
  const authorize = (userRoles, appRoles, AppTitle) => {
    // change this to return "auth", manually overidden for dev mode
    let auth = false;
    return true;
    if (this.parent.authRequired) {
      let userRoles = [];
      if (
        JSON.parse(sessionStorage.getItem("session")) &&
        JSON.parse(sessionStorage.getItem("session")).expires_at <=
          getTimestampInSeconds()
      ) {
        GlobalWindowManager.warn(
          "Your Session has expired, please log in again.",
          function () {
            logOut();
            window.location.reload();
            return;
          }
        );
      }
      let myRoles = sessionStorage.getItem("userRoles");
      if (myRoles.length) {
        myRoles.split("|").forEach((role) => {
          userRoles.push(role);
        });
      }
      rolesRequired =
        typeof rolesRequired === "object"
          ? rolesRequired
          : rolesRequired.split("|");

      if (userRoles && userRoles.length && appRoles && appRoles.length) {
        appRoles = appRoles.map((role) => role.toLowerCase());
        userRoles.forEach((role) => {
          role = role.toLowerCase();
          let match = appRoles.includes(role);
          if (match) {
            auth = true;
          }
        });
        // comment out these lines if you are testing Auth for other roles
        if (!auth) {
          // console.warn('Authorization failed. Contact an Admin to grant access to this app.');
          auth =
            userRoles.includes("authenticated") || userRoles.includes("admin");
        }
      }
    } else {
      return true;
    }
  };
  // Get and set user settings
  const GetSettings = async () => {
    return [
      {
        SettingsID: 16,
        created_at: "2022-11-30 22:53:53.357632+00",
        userId: "6eab0408-678f-4393-b330-60f1b3c565ef",
        settings:
          '{"theme":"humanCyborgRelations","toolBarPosition":"left","darkMode":false,"id":16}',
        runningApps:
          '[{"position":["left","bottom"],"AppID":28,"metadata":{}},{"position":["right","bottom"],"AppID":2,"metadata":{}},{"position":["middle","top"],"AppID":1,"metadata":{}}]',
      },
    ];
  };
  const SaveSettings = async (options) => {
    // UPSERT settings object by person/user
  };
  const loadBootStrap = () => {
      console.log("loadboostrap method not detected");
    };

  useEffect(() => {
    const WindowsOptions = {
      title: "Kitchen Windows", // *REQUIRED* rename to your app's title
      container: myContainer, // HTML container element from the body of your index
      darkMode: false, // dark mode on by default
      hoverTracking: false, // tracks the window your mouse is hovering with GlobalWindowManager.hoveredWindow property
      authRequired: false, // turn on to require users to login
      themeColors: [
        {
          name: "standard",
          color: "#000",
          backgroundColor: "#ebebeb",
          headerColor: "#b0b0b0",
          focusColor: "#757575",
          borderColor: "#4f4f4f",
          darkModeColor: "#FFF",
          darkModeBackgroundColor: "#4f4f4f",
          darkModeHeaderColor: "#242424",
          darkModeFocusColor: "#000",
          darkModeBorderColor: "#757575",
        },
        {
          name: "helloThere",
          color: "#2B2729",
          backgroundColor: "#918781",
          headerColor: "#74635E",
          focusColor: "#4E97E9",
          borderColor: "#2B2729",
          darkModeColor: "#4E97E9",
          darkModeBackgroundColor: "#3F383B",
          darkModeHeaderColor: "#2B2729",
          darkModeFocusColor: "#000000",
          darkModeBorderColor: "#FFFFFF",
        },
        {
          name: "t3",
          color: "#000",
          backgroundColor: "#f8f9fa",
          headerColor: "#BFB8AB",
          focusColor: "#FFD530",
          borderColor: "#000000",
          darkModeColor: "#8A8A8A",
          darkModeBackgroundColor: "#212121",
          darkModeHeaderColor: "#000000",
          darkModeFocusColor: "#FFD530",
          darkModeBorderColor: "#000000",
        },
        {
          name: "humanCyborgRelations",
          color: "#0B2F79",
          backgroundColor: "#E7E6EC",
          headerColor: "#B7B6BC",
          focusColor: "#F1C330",
          borderColor: "#0B2F79",
          darkModeColor: "#E7E6EC",
          darkModeBackgroundColor: "#282829",
          darkModeHeaderColor: "#051433",
          darkModeFocusColor: "#0B2F79",
          darkModeBorderColor: "#F1C330",
        },
        {
          name: "iAmYourFather",
          color: "#000",
          backgroundColor: "#fff",
          headerColor: "#dbdbdb",
          focusColor: "#F00",
          borderColor: "#000",
          darkModeColor: "#fff",
          darkModeBackgroundColor: "#1a1a1a",
          darkModeHeaderColor: "#000",
          darkModeFocusColor: "#F00",
          darkModeBorderColor: "#000",
        },
      ], //  *REQUIRED* available/selectable theme color palettes.
      theme: "t3", // *REQUIRED* default theme
      hiddenToolBar: true, // tool bar can be hidden with `.hideToolbar()`
      autoHide: false, // toolbar will autohide
      EnableFavorites: true, // start menu contains favorites
      toolBarPosition: "top", // use to position toolbar by default
      EnableCollections: false, // start menu contains collections
      toolBarWidth: 82, // measured in px
      // icon:"pfi-windoz", // uses PFI icon to set logo in the background with limited opacity
      // iconOffset: 320, // desired offset - not needed.
      logo: "/logo.jpg", //  *REQUIRED* will propogate a logo opposite from the hamburger
      darkModeLogo: "/logo.jpg", //  *REQUIRED* logo will flip to this when dark mode is selected
      backgroundVisible: true, // whether or not the logo or background image will show on the background.
      backgroundHeight: "20rem", // control the Height of the background image or logo
      backgroundWidth: "20rem", // control the width of the background image or logo
      // backgroundImage: "/background.jpeg", // will cover the background, preserving ratio
      logoOnclick: function () {
        GlobalWindowManager.toolBarVisible
          ? GlobalWindowManager.hideToolbar()
          : GlobalWindowManager.showToolbar();
      }, // fires when logo icon is clicked
      // this array determines what icons (usually each opens an app) you see by default in the toolbar
      toolBarItems: [
        // *REQUIRED*
        //array of App Objects, the below are all required params:
        {
          AppID: 2,
          id: "toolbar-Settings-button",
          AppTitle: "Settings",
          Description: "Customize your Kitchen Windows . . . ",
          Icon: "pfi-gear",
          ClassFile: "/windows/Settings.js",
          ClassName: "Settings",
          onclick: async function (context) {
            // onclick method will be fired off when button/icon is clicked.
            context.showPopup(
              context.settingsButton,
              context.settingsWindow.window
            );
          },
        },
        {
          AppTitle: "calebtrachte.com",
          Description: "Created by .... ",
          Icon: "pfi-home",
          IconColor: "brown",
          AppMenuAltTitle: "calebtrachte.com",
          onclick: async function (context) {
            window.location.href = "/"
          }
        },
        {
          AppTitle: "Info",
          Description: "About this app .... ",
          Icon: "pfi-info-circle",
          AppMenuAltTitle: "test",
          init: createInfoWindow, // optional method will be invoked first, when the button/icon is created.
          id: "toolbar-info-button",
          onclick: async function (context) {
            // onclick method will be fired off when button/icon is clicked.
            context.showPopup(context.infoButton, context.infoWindow.window);
          },
        },
        // {
        //   AppTitle: "FAQ",
        //   Description: "Frequently Asked Questions ... ",
        //   Icon: "pfi-question-circle",
        //   init: createFAQWindow,
        //   id: "toolbar-FAQ-button",
        //   onclick: async function (context) {
        //     context.showPopup(context.FAQWindowButton, context.FAQWindow.window);
        //   },
        // },
        // {
        //   AppTitle: "PEC Portal Feedback",
        //   Description: "Report an issue with the PEC Portal ... ",
        //   Icon: "pfi-exclamation",
        //   id: "toolbar-PECPortalFeedback-button",
        //   onclick: async function (context) {
        //     await context.AppsManager.inject('/windows/AppMgmt.js').then(async function () // this will be the NewRequest.js in T3
        //     {
        //         if (!context.PECPortalFeedback)
        //         {
        //             // Add the class into the Global Window Manager's state.
        //             let appClass = context.AppsManager.Classes.find(classObj => Object.keys(classObj)[0] === "AppMgmt");
        //             appClass = appClass[Object.keys(appClass)[0]];
        //             // create a new instance of the app
        //             app = new appClass();
        //             // add to the Global Window Manager's state
        //             GlobalWindowManager.AppsManager.RunningApps.push(app);
        //             app.initialize();
        //             context.PECPortalFeedback = context.createPopup(`PECPortalFeedback-DraggableWindows`, "PEC Portal Feedback", app.container);
        //         }
        //         context.showPopup(context.PECPortalFeedbackButton, context.PECPortalFeedback.window);
        //         return;
        //     });
        //   },
        // },
        {
          AppTitle: "App Start Menu",
          Description: "Find and open a new app ... ",
          Icon: "pfi-math-plus",
          URL: "https://calebtrachte.com", //use this if the icon should link somewhere
          init: createAppsManagerMenu, // right now this method is in extensions.t3.js
          id: "toolbar-newWSI-button",
          width: "auto",
          onclick: async function (context) {
            context.AppsManager.favorites =
              context.AppsManager.getFavoritedApps();
            context.showPopup(
              context.newAppButton,
              context.appsManagerWindow.window
            );
            context.AppsManager.usageData = context.AppsManager.getUsage();
            context.appsManagerWindow.window
              .querySelector("#windows-toolbar-search")
              .focus();
          },
        },
      ],
    };
    let data;
    // get json data
    fetch("/data.json")
      .then(async (response) => await response.json())
      .then(async (json) => {
        data = json;
        GlobalWindowManager.AppsManager.setStaticCollection(data.Apps, Object.keys(data)[0]);
      });
    const GlobalWindowManager = initkitchenWindows(WindowsOptions);
    //add to windows scope - REQUIRED
    GlobalWindowManager.AppsManager.addClass({ AppMgmt: AppMgmt });
    GlobalWindowManager.AppsManager.addClass({ icons: icons });
    GlobalWindowManager.AppsManager.addClass({ Settings: Settings });
  });
  //method to initialize kitchenWindows
  function initkitchenWindows(options) {
    myContainer.current.innerHTML = "";
    options.container = myContainer.current;
    return new DraggableWindows(options);
  }

  return (
    <>
      <div className="kitchenWindows-container" ref={myContainer}></div>
    </>
  );
};

export default kitchenWindows;
