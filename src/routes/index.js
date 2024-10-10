
import Management from '../pages/Management/Management';
import ManagementData from '../pages/Management/Management_data';
import Index from '../pages/index';
import Login from '../pages/login';
import IndexNew from '../pages/indexNew';
import TimeHome from '../../src/pages/Management/time_series/Time_series_Home';
import Location from '../../src/pages/Management/time_series/Location';
import LocationNew from '../../src/pages/Management/time_series/Location_New';
import Users from '../../src/pages/Management/users/User';
import RasterHome from '../../src/pages/Management/rasters/Raster_Home';
import RasterSource from '../../src/pages/Management/rasters/RasterSource';
import RasterLayers from '../../src/pages/Management/rasters/RasterLayer';
import Wms from '../../src/pages/Management/wms_layers/Wms';
import WmsNew from '../../src/pages/Management/wms_layers/Wms_New';
import TimeSeries from '../../src/pages/Management/time_series/Time_Series';
import TimeNew from '../../src/pages/Management/time_series/Time_Series_New';
import NetWork from '../../src/pages/Management/time_series/Network';
import NetworkNew from '../../src/pages/Management/time_series/Network_New';
import ScenariosHome from '../../src/pages/Management/Scenarios/Scenarios_Home';
import Scenarios from '../../src/pages/Management/Scenarios/Scenarios';
import ScenariosNew from '../../src/pages/Management/Scenarios/Scenarios_New';
import Projects from '../../src/pages/Management/Scenarios/Projects';
import Geoblocks from '../pages/Management/geoblocks/Geoblocks';
import GeoBlocksNew from '../pages/Management/geoblocks/Geoblocks_New';
import Collections from '../pages/Management/layer_collections/Layer_Collections';
import CollectionsNew from '../pages/Management/layer_collections/Layer_Collections_New';
import LabelsHome from '../pages/Management/labels/Labels_Home';
import Labels from '../pages/Management/labels/Labels';



const publicRoutes = [
    { path: '/', component: Index },
    { path: '/login', component: Login },

];
const privateRoutes = [
    { path: '/home', component: IndexNew },
    { path: '/management', component: Management },
    { path: '/management_data', component: ManagementData },
    { path: '/time_series_home', component: TimeHome },
    { path: '/location', component: Location },
    { path: '/location_new', component: LocationNew },
    { path: '/users', component: Users },
    { path: '/raster_home', component: RasterHome },
    { path: '/raster_source', component: RasterSource },
    { path: '/raster_layer', component: RasterLayers },
    { path: '/wms_layers', component: Wms },
    { path: '/wms_layers_new', component: WmsNew },
    { path: '/time_series', component: TimeSeries },
    { path: '/time_series_new', component: TimeNew },
    { path: '/net_work', component: NetWork },
    { path: '/net_work_new', component: NetworkNew },
    { path: '/scenarios_home', component: ScenariosHome },
    { path: '/scenarios', component: Scenarios },
    { path: '/scenarios_new', component: ScenariosNew },
    { path: '/projects', component: Projects },
    { path: '/geoblocks', component: Geoblocks },
    { path: '/geoblocks_new', component: GeoBlocksNew },
    { path: '/layer_collections', component: Collections },
    { path: '/layer_collections_new', component: CollectionsNew },
    { path: '/label_home', component: LabelsHome },
    { path: '/labels', component: Labels },




]

export { publicRoutes, privateRoutes };