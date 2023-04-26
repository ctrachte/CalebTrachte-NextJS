// A data source is required to use certain features, eg. data-driven apps, favorites,
//     saving user settings/state and the start menu.

// See WindowsConfig.Supabase.js for an example.

// ********** API LAYER SHOULD BE PROTECTED. ***************
//     It should reside on your server side, NOT in the front end. 
//     This is only an example of how to setup the endpoints and table schemas.

// We recommend changing each to FETCH requests with authentication to your server.

// ***************************************** API LAYER ************************************************ //
const GetFavorites = async (options) =>
{
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
const GetApps_KitchenWindows = async (options) =>
{
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
const GetAppFavorites = async (options) =>
{
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
const GetFavoritedApps = async (options) =>
{
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
const Favorite = async (options) =>
{
  // must reach out to your AppFavorites table and UPSERT a row
};
const GetAppCollections = async (options) =>
{
  return [
    {
      AppCollectionID: 1,
      created_at: "2022-11-17 20:26:27+00",
      Title: "Utilities",
      Description: "Settings, customization, view/create apps and collections",
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
const GetCollectionsApps = async (options) =>
{
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
const GetChildCollections = async (options) =>
{
  return [
    {
      AppCollectionID: 1,
      created_at: "2022-11-17 20:26:27+00",
      Title: "Utilities",
      Description: "Settings, customization, view/create apps and collections",
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
const SearchApps = async (keyword) =>
{
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
const SearchCollections = async (keyword) =>
{
  //searches AppCollections Table by keyword
  return [
    {
      AppCollectionID: 1,
      created_at: "2022-11-17 20:26:27+00",
      Title: "Utilities",
      Description: "Settings, customization, view/create apps and collections",
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
const GetUsage = async (context) =>
{
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
const RecordUsage = async (options) =>
{
  // Creates new row in usage table
  return [];
};
const logIn = async (options, context) =>
{
  // returns auth token, sets the token into the session.
  return;
  // execute after successful sign in
  if (!res.data.user)
  {
    context.closeModal();
    context.warn(res.error.message, function ()
    {
      context.closeModal();
      context.login();
    });
  } else
  {
    sessionStorage.setItem("user", JSON.stringify(res.data.user));
    sessionStorage.setItem("userRoles", [ res.data.user.role ]);
    sessionStorage.setItem("session", JSON.stringify(res.data.session));
    context.closeModal();
    context.warn("Sign in Successful!", context.init);
  }
};
const signUp = async (options, context) =>
{
  return;
  // execute after successful signup
  if (!res.data.user)
  {
    context.closeModal();
    context.warn(res.error.message, function ()
    {
      context.closeModal();
      context.login();
    });
  } else
  {
    context.closeModal();
    context.warn("Sign up Successful!");
    context.init();
  }
};
const logOut = async () =>
{
  // must clear session from browser and logout from server
  return;
};
const GetUser = () => {
  return JSON.parse(sessionStorage.getItem("user"));
}
// must be connected to your own profile edit/create applet
const OpenProfileApp = (context) => {
  alert('User Profile app not Configured. See WindowsConfig.');
  return;
  context.AppsManager.start({
    Icon: "pfi-profile",
    AppHeader: "My Profile",
    ClassName: "UserProfile",
    ClassFile: "./windows/UserProfile.js"
  });
}
// not wired in - this is specific to the backend you are using
const thirdPartyAuthenticate = async (provider) =>
{
  provider = provider.toLowerCase();
  switch (provider)
  {
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
const authorize = (userRoles, appRoles, AppTitle) =>
{
  // change this to return "auth", manually overidden for dev mode
  let auth = false;
  return true;
  if (this.parent.authRequired)
  {
    let userRoles = [];
    if (
      JSON.parse(sessionStorage.getItem("session")) &&
      JSON.parse(sessionStorage.getItem("session")).expires_at <=
      getTimestampInSeconds()
    )
    {
      GlobalWindowManager.warn(
        "Your Session has expired, please log in again.",
        function ()
        {
          logOut();
          window.location.reload();
          return;
        }
      );
    }
    let myRoles = sessionStorage.getItem("userRoles");
    if (myRoles.length)
    {
      myRoles.split("|").forEach((role) =>
      {
        userRoles.push(role);
      });
    }
    rolesRequired =
      typeof rolesRequired === "object"
        ? rolesRequired
        : rolesRequired.split("|");

    if (userRoles && userRoles.length && appRoles && appRoles.length)
    {
      appRoles = appRoles.map((role) => role.toLowerCase());
      userRoles.forEach((role) =>
      {
        role = role.toLowerCase();
        let match = appRoles.includes(role);
        if (match)
        {
          auth = true;
        }
      });
      // comment out these lines if you are testing Auth for other roles
      if (!auth)
      {
        // console.warn('Authorization failed. Contact an Admin to grant access to this app.');
        auth = userRoles.includes("authenticated") || userRoles.includes("admin");
      }
    }
  } else
  {
    return true;
  }

};
// Get and set user settings
const GetSettings = async () =>
{
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
const SaveSettings = async (options) =>
{
  // UPSERT settings object by person/user
};
// this method is for refresh or loading of bootstrap JS each time a new window is opened.
// **Required if you are using bootstrap.
if (typeof (loadBootStrap) === 'undefined' || !loadBootStrap)
{
  loadBootStrap = () => 
  {
    console.log("loadboostrap method not detected");
  };
}
