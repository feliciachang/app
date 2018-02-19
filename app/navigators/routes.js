import WelcomeScreen from '../containers/WelcomeScreen';
import AboutScreen from '../containers/AboutScreen';
import ConnectingScreen from '../containers/ConnectingScreen';
import DeviceMenuScreen from '../containers/DeviceMenuScreen';
import SensorsScreen from '../containers/SensorsScreen';
import ConfigureScreen from '../containers/ConfigureScreen';
import NetworkScreen from '../containers/NetworkScreen';
import DataSetsScreen from '../containers/DataSetsScreen';
import ViewDataSetScreen from '../containers/ViewDataSetScreen';
import LiveDataScreen from '../containers/LiveDataScreen';

export class ApplicationRoutesManager {
    constructor() {
        this.routes = {
            Welcome: {
                path: '/',
                screen: WelcomeScreen
            },
            Connecting: {
                path: '/connecting',
                screen: ConnectingScreen
            },
            DeviceMenu: {
                path: '/device',
                screen: DeviceMenuScreen
            },
            Sensors: {
                path: '/sensors',
                screen: SensorsScreen
            },
            Configure: {
                path: '/configure',
                screen: ConfigureScreen
            },
            Network: {
                path: '/network',
                screen: NetworkScreen
            },
            DataSets: {
                path: '/data-sets',
                screen: DataSetsScreen
            },
            DataSet: {
                path: '/data-sets/:id',
                screen: ViewDataSetScreen
            },
            LiveData: {
                path: '/live-data',
                screen: LiveDataScreen
            },
            About: {
                path: '/about',
                screen: AboutScreen
            },
        };
    }

    getRoutes() {
        console.log("Returning routes");
        return this.routes;
    }

    register(routes) {
        console.log("Registering", routes);
        Object.assign(this.routes, routes);
    }
}

export const routesManager = new ApplicationRoutesManager();
