import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { isGuest } from '../utils/utils';

//components
import CurrencyCard from '../components/CurrencyCard';
import Favorites from '../components/Favorites';

function Dashboard() {
  const { userName, favorites } = useLoaderData();
  const [favoritesArr, setFavoritesArr] = useState(favorites);

  return (
    <div className="hero min-h-screen bg-base-100 max-w-full">
      <div className="hero-content text-center">
        <div>
          <CurrencyCard />
          {!isGuest(userName) && <Favorites />}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
