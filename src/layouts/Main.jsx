import { useState } from 'react';
import { Outlet } from 'react-router-dom';

//components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

function Main() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <Navbar />
      <main className="grid justify-items-center place-items-start">
        {isLoading ? <Loading /> : <Outlet />}
      </main>
      <Footer />
    </div>
  );
}

export default Main;
