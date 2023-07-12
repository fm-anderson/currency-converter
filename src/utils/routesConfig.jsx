//components
import Main from '../layouts/Main';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';

export const routesConfig = [
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
      { path: 'home', element: <Home />, errorElement: <Error /> },
      { path: 'dashboard', element: <Dashboard />, errorElement: <Error /> },
    ],
  },
];
