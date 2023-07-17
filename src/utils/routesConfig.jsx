import Error from '../pages/Error';
import Main from '../layouts/Main';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import { submitAction } from './actions';
import { mainLoader, homeLoader, dashboardLoader } from './loaders';

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
        action: submitAction,
        errorElement: <Error />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        loader: dashboardLoader,
        errorElement: <Error />,
      },
    ],
  },
];
