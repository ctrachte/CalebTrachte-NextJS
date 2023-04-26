class icons extends WindowTemplate
{
    constructor()
    {
        super(); // to inherit from base class
        this.id = this.randomWindowID();

        this.container = document.createElement('div');
        this.container.classList.add("icons", "kw-d-flex", "kw-align-content-center", "kw-align-items-center", "kw-flex-wrap", "kw-mt-8");

        let appContent = `<div class="kw-mt-6 kw-row kw-align-content-center kw-align-items-center kw-text-center kw-m-auto">
            <div class="kw-items-center kw-content-center kw-text-center col-10">
                <input type="text" class="searchInput" placeholder="Search for icons.." style="color: #000;" title="Search for icons"><span class="iconCount"></span>
                <ul class="iconsList kw-flex kw-flex-wrap kw-justify-content-around">
                </ul>
            </div>
        </div>
        `;

        this.container.innerHTML = appContent;

        // windows options, REQUIRED
        this.initOptions = {
            body: this.container, //should always be the container you created above
            inject: ['util/pfi.js'], //String Array of js files, DB will add any additional to this
            roles: [], //String Array of Roles, OVERWRITTEN BY DB, pipe delimited "|"
            snapping: true, // makes window snap to grid positions
            draggable:true,
            shadows:true,
            resizeable: false, // enables/disables dragging corners of window to resize (not grid positions)
            position: ["right", "top"],
            locked: true, //Have to pick a grid - snap locked to grid (does NOT stop user from dragging)
            id: this.id, //in template base class, should always be a random ID to prevent overlaps
            Icon: "pfi-icons",
            IconColor: '#21dbd2',
            IconBkgColor:"black",
            title: "Icons Package",
            minimize:true,
            maximize:true
        };
    }

    // THIS METHOD REQUIRED TO MAKE YOUR APP FUNCTION
    async initialize()
    {
        let container = this.container.querySelector('.iconsList');

        Object.keys(pfi).forEach((icon) =>
        {
            let li = document.createElement('li');
            li.classList.add('kw-p-1', 'kw-border', 'kw-border-solid', 'kw-rounded-lg', 'kw-m-2');
            li.innerHTML = '<i class="'+icon+'"></i>' + '<p class="text-ellipsis">' + icon + '</p>';
            container.appendChild(li);
        });

        let searchInput = this.container.querySelector('.searchInput');

        let iconCount = this.container.querySelector('.iconCount');
        
        let totalIcons = container.getElementsByTagName('li').length;

        let ictr = 0;

        iconCount.innerHTML = '&nbsp;' + totalIcons + ' icons';

        searchInput.addEventListener('keyup', () =>
        {
            let icons = container.getElementsByTagName('li');
            ictr = 0;
            Array.from(icons).forEach((icon) =>
            {
                if(searchInput.value.length <= 0)
                {
                    icon.classList.remove('kw-hidden');
                    ictr++;
                }
                else if(icon.innerHTML.indexOf(searchInput.value) > -1)
                {
                    icon.classList.remove('kw-hidden');
                    ictr++;
                }
                else
                {
                    icon.classList.add('kw-hidden');
                }
            });
            iconCount.innerHTML = '&nbsp;' + ictr + '/' + totalIcons + ' icons';
        });
    }
}

//add to windows scope - REQUIRED
// GlobalWindowManager.AppsManager.addClass({ "icons": icons });