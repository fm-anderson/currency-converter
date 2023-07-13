//components, loaders, and actions
import Error from '../pages/Error';
import Main from '../layouts/Main';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import { loginFormAction } from './actions';
import {
  logoutLoader,
  mainLoader,
  homeLoader,
  dashboardLoader,
} from './loaders';

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
        loader: homeLoader,
        action: loginFormAction,
        errorElement: <Error />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        loader: dashboardLoader,
        errorElement: <Error />,
      },
      {
        path: 'logout',
        loader: logoutLoader,
      },
    ],
  },
];
