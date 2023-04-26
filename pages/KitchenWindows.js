import GlobalWindowManager from "../components/kitchenwindows";
const KitchenWindows = () =>
{
    return (
    <>
        <script src="./util/WindowsConfig.js"></script>
        <script src="./extensions.t3.js"></script>
        <script src="./util/Inject.js"></script>
        <script src="./util/KitchenWindow.js"></script>
        <script src="./util/KitchenWindowManager.js"></script>
        <script src="./util//LoadingElement.js"></script>
        <script src="./util/KitchenWindows.js"></script>
        <script src="./util/WindowTemplate.js"></script>
        <script src="./windows/AppMgmt.js"></script>
        <script src="./windows/Settings.js"></script>
        <script src="./windows/Icons.js"></script>
        <link rel="stylesheet" href="./css/pfi.css" />
        <link rel="stylesheet" href="./css/kitchenWindows.css" />
        <script src="./util/pfi.js"></script>
        <GlobalWindowManager />
    </>
    );
};

export default KitchenWindows;