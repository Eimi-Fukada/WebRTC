import { RouteMapDTO, routeNames } from './const';
import Home from '../pages/home';
import SleepMonitor from '../pages/sleepMonitor';

const routes: RouteMapDTO[] = [
  { name: routeNames.Home, component: Home },
  { name: routeNames.SleepMonitor, component: SleepMonitor },
  /** write follow this */
].flat();

export default routes;
