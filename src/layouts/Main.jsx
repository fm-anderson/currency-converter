import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Main() {
  return (
    <div>
      <Navbar />
      <main className="grid justify-items-center place-items-start">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Main;
