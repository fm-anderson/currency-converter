import { useEffect, useState } from 'react';
import { useLoaderData, useRevalidator } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/outline';
import { saveFavorite, allowedValue, isGuest } from '../utils/utils';
import heroImage from '../images/currency-converter.png';

function CurrencyCard() {
  const { userName } = useLoaderData();
  const [home, setHome] = useState({ amount: '', currency: 'USD' });
  const [away, setAway] = useState({ amount: '', currency: 'EUR' });
  const [liked, setLiked] = useState(false);

  const handleInput = (input, value) => {
    switch (input) {
      case 'homeValue':
        if (allowedValue(value)) {
          setHome((prevState) => ({ ...prevState, amount: value }));
        }
        break;
      case 'awayValue':
        if (allowedValue(value)) {
          setAway((prevState) => ({ ...prevState, amount: value }));
        }
        break;
      case 'homeCurrency':
        setHome((prevState) => ({ ...prevState, currency: value }));
        break;
      case 'awayCurrency':
        setAway((prevState) => ({ ...prevState, currency: value }));
        break;
    }
  };

  let revalidator = useRevalidator();
  useEffect(() => {
    revalidator.revalidate();
  }, [liked]);

  return (
    <div className="card lg:card-side bg-neutral-50 shadow-xl mb-8">
      <figure className="max-w-xs">
        <img src={heroImage} />
      </figure>

      <div className="card-body justify-center">
        <div className="join">
          <select
            className="select select-bordered w-full max-w-xs join-item"
            name="homeCurrency"
            onChange={(e) => handleInput(e.target.name, e.target.value)}
          >
            <option>USD</option>
            <option>CAD</option>
            <option>BGN</option>
          </select>
          {!isGuest(userName) && (
            <button
              className="btn btn-neutral join-item"
              onClick={() => saveFavorite(home)}
            >
              <HeartIcon width={20} onClick={() => setLiked(!liked)} />
            </button>
          )}
        </div>
        <input
          className="input w-full max-w-xs bg-base-200"
          placeholder="Enter Amount"
          type="number"
          name="homeValue"
          onChange={(e) => handleInput(e.target.name, e.target.value)}
          value={home.amount}
        />
      </div>

      <div className="card-body justify-center">
        <div className="join">
          <select
            className="select select-bordered w-full max-w-xs join-item"
            name="awayCurrency"
            onChange={(e) => handleInput(e.target.name, e.target.value)}
          >
            <option>EUR</option>
            <option>BRL</option>
            <option>JPY</option>
          </select>
          {!isGuest(userName) && (
            <button
              className="btn btn-neutral join-item"
              onClick={() => saveFavorite(away)}
            >
              <HeartIcon width={20} onClick={() => setLiked(!liked)} />
            </button>
          )}
        </div>
        <input
          className="input w-full max-w-xs bg-base-200"
          placeholder="Enter Amount"
          type="number"
          name="awayValue"
          onChange={(e) => handleInput(e.target.name, e.target.value)}
          value={away.amount}
        />
      </div>
    </div>
  );
}

export default CurrencyCard;
