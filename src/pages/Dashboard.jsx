import { useEffect, useState } from 'react';
import { useLoaderData, useRevalidator } from 'react-router-dom';
import { isGuest } from '../utils/utils';

//components
import CurrencyCard from '../components/CurrencyCard';
import Favorites from '../components/Favorites';

function Dashboard() {
  const [clicked, setClicked] = useState(false);
  const [favSelected, setFavSelected] = useState(undefined);
  const { userName, favorites } = useLoaderData();

  let revalidator = useRevalidator();
  useEffect(() => {
    revalidator.revalidate();
  }, [clicked]);

  return (
    <div className="hero min-h-screen bg-base-100 max-w-full">
      <div className="hero-content text-center">
        <div>
          <CurrencyCard
            clicked={clicked}
            setClicked={setClicked}
            favSelected={favSelected}
          />
          {!isGuest(userName) && (
            <Favorites
              favorites={favorites}
              clicked={clicked}
              setClicked={setClicked}
              setFavSelected={setFavSelected}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
