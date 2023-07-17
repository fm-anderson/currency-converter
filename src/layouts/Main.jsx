import { Outlet } from 'react-router-dom';

//components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ModalConfirm from '../components/ModalConfirm';

function Main() {
  return (
    <div>
      <Navbar />
      <main className="grid justify-items-center place-items-start">
        <Outlet />
      </main>
      <Footer />
      <ModalConfirm />
    </div>
  );
}

export default Main;
