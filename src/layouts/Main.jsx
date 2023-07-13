import { useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';

//components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import ModalConfirm from '../components/modalConfirm';

//utils
import { fetchData } from '../utils/utils';

//loader
export function mainLoader() {
  const userName = fetchData('userName');
  return { userName };
}

function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const { userName } = useLoaderData();

  return (
    <div>
      <Navbar userName={userName} />
      <main className="grid justify-items-center place-items-start">
        {isLoading ? <Loading /> : <Outlet />}
      </main>
      <Footer />
      <ModalConfirm />
    </div>
  );
}

export default Main;
