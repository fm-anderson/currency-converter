import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Main() {
  return (
    <div>
      <Navbar />
      <main className="grid justify-items-center py-10 place-items-start bg-cyan-400">
        <h1>Main</h1>
        <Outlet />
      </main>
    </div>
  );
}

export default Main;
