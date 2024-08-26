import { RouteMapDTO, routeNames } from './const';
import Home from '../pages/home';
import SleepMonitor from '../pages/sleepMonitor';
import Welcome from '../pages/welcome';
import Mine from '../pages/mine';

const routes: RouteMapDTO[] = [
  { name: routeNames.Home, component: Home },
  { name: routeNames.SleepMonitor, component: SleepMonitor },
  { name: routeNames.Welcome, component: Welcome },
  { name: routeNames.Mine, component: Mine },
  /** write follow this */
].flat();

export default routes;
