import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routesConfig } from './utils/routesConfig';

const router = createBrowserRouter(routesConfig);

function App() {
  return (
    <div className="grid container h-screen bg-base-100">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
