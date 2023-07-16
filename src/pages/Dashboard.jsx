import { useEffect, useState } from 'react';
import { useLoaderData, useRevalidator } from 'react-router-dom';
import { isGuest } from '../utils/utils';

//components
import CurrencyCard from '../components/CurrencyCard';
import Favorites from '../components/Favorites';
import Welcome from '../components/Welcome';

function Dashboard() {
  const [clicked, setClicked] = useState(false);
  const [favSelected, setFavSelected] = useState(undefined);
  const [localCurrency, setLocalCurrency] = useState(undefined);
  const { userName, favorites, location } = useLoaderData();

  let revalidator = useRevalidator();
  useEffect(() => {
    revalidator.revalidate();
  }, [clicked]);

  return (
    <div className="hero min-h-screen bg-base-100 max-w-full">
      <div className="hero-content text-center">
        <div>
          <Welcome
            userName={userName}
            location={location}
            setLocalCurrency={setLocalCurrency}
            clicked={clicked}
            setClicked={setClicked}
            setFavSelected={setFavSelected}
          />
          <CurrencyCard
            clicked={clicked}
            setClicked={setClicked}
            setFavSelected={setFavSelected}
            favSelected={favSelected}
            localCurrency={localCurrency}
          />
          {!isGuest(userName) && (
            <Favorites
              favorites={favorites}
              clicked={clicked}
              setClicked={setClicked}
              setFavSelected={setFavSelected}
              setLocalCurrency={setLocalCurrency}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
