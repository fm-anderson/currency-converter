//components, loaders, and actions
import Main, { mainLoader } from '../layouts/Main';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import { logoutLoader } from './actions';

export const routesConfig = [
  {
    path: '/',
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        // loader: homeLoader,
        errorElement: <Error />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        // loader: dashboardLoader,
        errorElement: <Error />,
      },
      {
        path: 'logout',
        loader: logoutLoader,
      },
    ],
  },
];
