import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Main() {
  return (
    <div>
      <Navbar />
      <main className="grid justify-items-center place-items-start">
        <Outlet />
      </main>
    </div>
  );
}

export default Main;
