import FrontPage from './components/pages/FrontPage';
import CookiePage from './components/pages/CookiePage';

const Routes = [
  {
    path: '/',
    exact: true,
    component: FrontPage
  },
  {
    path: '/cookie',
    component: CookiePage
  }
];

export default Routes;
