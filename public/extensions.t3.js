// context file contains the methods for launching the popup windows necessary for T3

// info popup for T3
async function createInfoWindow(context) {
  let infoWindow = document.createElement("div");
  infoWindow.innerHTML = `<ul class="kw-list-group info-content">
                <li class="kw-list-group-item kw-rounded-sm">
                    <span><a href="/About" target="_blank" class="link-dark">About Website</a></span>
                </li>
                <li class="kw-list-group-item kw-rounded-sm" >
                    <a href="/Compatibility" target="_blank" class="link-dark">Compatibility</a><span>&nbsp;&nbsp;</span>
                </li>
                <li class="kw-list-group-item kw-rounded-sm">
                    <a href="/Disclaimer" target="_blank" class="link-dark">Notice, Consent &#38; Disclaimer</a><span>&nbsp;&nbsp;</span>
                </li>
                <li class="kw-list-group-item kw-rounded-sm">
                    <a href="/Privacy" target="_blank" class="link-dark">Privacy Statement</a><span>&nbsp;&nbsp;</span>
                </li>
            </ul> `;
  let newInfoWindow = context.createPopup(
    `infoWindow-DraggableWindows`,
    "Information",
    infoWindow
  );
  context.infoWindow = newInfoWindow;
  return;
}
// start menu for T3
async function createAppsManagerMenu(context) {
  let appsManagerWindow = document.createElement("div");
  appsManagerWindow.classList.add("kw-row", "kw-gx-0", "kw-bg-none", "kw-border-none");
  let appsManagerWindowContent = `
                <div class="col-12 kw-text-center">
                    <label class="kw-py-1 m-4" for="toolbar-search" ><h3>Search Apps</h3></label>
                    <input id="windows-toolbar-search" style="margin: auto; width:90%;" name="Search Apps" type="search" class="form-control my-2" aria-describedby="name" placeholder="Search . . .">
                </div>
                <div class="${
                  context.EnableCollections && context.EnableFavorites
                    ? "col-4"
                    : context.EnableCollections || context.EnableFavorites
                    ? "col-6"
                    : "col-12"
                }">
                    <ul class="kw-list-group Apps-List">
                        <li class="kw-list-group-item kw-rounded-0 kw-text-center" style="background-color: ${
                          context.darkMode
                            ? context.darkModeBackgroundColor
                            : context.backgroundColor
                        };">
                            <div class="kw-text-center kw-items-center kw-text-bold">Apps</div>
                        </li>
                        <li class="kw-list-group-item kw-border-solid App-List-Item kw-text-muted kw-rounded-0 kw-text-center ">
                        <div class="kw-text-center">Use search above to find an App ... </div>
                        </li>
                    </ul>
                </div>`;
  if (context.EnableFavorites) {
    appsManagerWindowContent += `
        <div class="${context.EnableCollections ? "col-4" : "col-6"}">
          <ul class="kw-list-group Apps-Favorites-List">
              <li class="kw-list-group-item kw-rounded-0 kw-text-center " style="background-color: ${
                context.darkMode
                  ? context.darkModeBackgroundColor
                  : context.backgroundColor
              };">
                  <div class="kw-text-center kw-items-center kw-text-bold">Favorites</div>
              </li>
          </ul>
        </div>`;
  }
  if (context.EnableCollections) {
    appsManagerWindowContent += `
        <div class="${context.EnableFavorites ? "col-4" : "col-6"}">
          <ul class="kw-list-group Apps-Collections-List">
              <li class="kw-list-group-item kw-rounded-0 kw-text-center " style="background-color: ${
                context.darkMode
                  ? context.darkModeBackgroundColor
                  : context.backgroundColor
              };">
                  <div class="kw-text-center kw-items-center kw-text-bold">Workspaces</div>
              </li>
              <li class="kw-list-group-item kw-border-solid App-List-Item kw-text-muted kw-rounded-0 kw-text-center ">
              <div class="kw-text-center">Use search above to find a Workspace ... </div>
              </li>
          </ul>
        </div>`;
  }
  appsManagerWindow.innerHTML = appsManagerWindowContent;
  context.appsManagerWindow = context.createPopup(`ChooseApp-Window`, "Choose an App", appsManagerWindow);
  // search element:
  context.searchElement = appsManagerWindow.querySelector(
    "#windows-toolbar-search"
  );
  let timerId;
  function handleSearch(value) {
    if (value.length >= 1) {
      let listItems = document.querySelectorAll(".App-List-Item");
      listItems.forEach((app) => app.remove());
      if (context.EnableCollections)
        context.AppsManager.searchCollections(value);
      context.AppsManager.search(value);
    } else {
      if (context.EnableUsage) context.AppsManager.getUsage();
    }
  }
  context.searchElement.onsearch = (e) => {
    let value = e.target.value;
    // debounce results search
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      handleSearch(value);
    }, 500);
  };
  context.searchElement.onkeyup = (e) => {
    let value = e.target.value;
    // debounce results search
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      handleSearch(value);
    }, 500);
  };
  return;
}
// FAQ window for T3
async function createFAQWindow(context) {
      let FAQWindowEl = document.createElement('div');
      FAQWindowEl.classList.add('d-inline-flex', 'justify-content-space-around', 'align-items-center', "bg-none");
      FAQWindowEl.innerHTML =
          `<ul class="list-group info-content">
      <li class="list-group-item rounded-0 FAQVideo">
          <h2 class="text-center">PEC Portal Preview</h2>
      </li>
    </ul> `;
      let imageAlt = "PEC Portal Demo Video";
      let imageURL = "/";
      let videoURL = "/";
      let media = new Image();
      let height = window.innerHeight * .2;
      let width = (height * 16) / 9;
      let playIcon = document.createElement('button');
      playIcon.classList.add('btn', 'pfi-media-play', "is-4", "text-danger");
      playIcon.title = "Watch '" + imageAlt + "'";
      let modalContent = document.createElement('li');
      modalContent.classList.add('d-inline-flex', "bg-none", "justify-content-center", "h-100", "w-100", "align-items-center", "border-rounded", "border-0", "text-center");
      media.src = imageURL;
      media.alt = imageAlt;
      media.height = height;
      media.width = width;
      media.onload = function ()
      {
          playIcon.style.position = "absolute";
          playIcon.style.left = (media.width * .5) - (playIcon.getBoundingClientRect().width * .5) - 10 + "px";
          playIcon.style.top = (media.height * .5) - (playIcon.getBoundingClientRect().height * .5) + "px";
          playIcon.style.cursor = "pointer";
          playIcon.onclick = (e) =>
          {
              let videoContainer = document.createElement('div');
              videoContainer.classList.add('d-inline-flex', "bg-none", "justify-content-center", "h-100", "w-100", "align-items-center", "border-rounded", "border-0", "text-center");
              let video = `
          <video autoplay controls src="${videoURL}" alt="${imageAlt}" title="${imageAlt}" class="align-middle" type="video/mp4">
                  Your browser does not support the video tag.
              </video>`;
              videoContainer.innerHTML = video;
              let announceWindow = context.addWindow({
                  container: context.container,
                  zIndex: 9999999,
                  body: videoContainer,
                  footer: null,
                  header: "Welcome to the New PEC Portal! - Demo Video",
                  snapping: false,
                  id: `announcementWindow-DraggableWindows`,
                  height: height + 20 + "px",
                  width: width + 2 + "px",
                  title: 'PEC Portal Announcement',
                  resizeable: false,
                  close: true,
                  locked: true,
                  snapping: true,
                  callouts: false,
                  hasManager: true
              });
              context.announceWindow = announceWindow;
              let windowEl = context.getWindow(`announcementWindow-DraggableWindows`)[0];
              windowEl.locked = true;
              context.maximize(windowEl);
              context.closeToolbarWindows();
          }
          modalContent.appendChild(media);
          modalContent.appendChild(playIcon);
          FAQWindowEl.querySelector('.info-content').appendChild(modalContent);
          context.FAQWindow = context.createPopup(`FAQWindow-DraggableWindows`, "Frequently Asked Questions", FAQWindowEl);
      }
  return;
}