import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routesConfig } from './utils/routesConfig';

const router = createBrowserRouter(routesConfig);

function App() {
  return (
    <div className="container h-screen bg-cyan-200">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
