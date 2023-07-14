import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { isGuest } from '../utils/utils';

//components
import CurrencyCard from '../components/CurrencyCard';
import Favorites from '../components/Favorites';

function Dashboard() {
  const [favoritesArr, setFavoritesArr] = useState([
    'USD',
    'BRL',
    'CAD',
    'MEX',
  ]);
  const { userName } = useLoaderData();

  return (
    <div className="hero min-h-screen bg-base-100 max-w-full">
      <div className="hero-content text-center">
        <div>
          <CurrencyCard setFavoritesArr={setFavoritesArr} />
          {!isGuest(userName) && (
            <Favorites
              favoritesArr={favoritesArr}
              setFavoritesArr={setFavoritesArr}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
