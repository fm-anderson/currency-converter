import { useLoaderData } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/outline';
import heroImage from '../images/currency-converter.png';
import { isGuest } from '../utils/utils';

function CurrencyCard() {
  const { userName } = useLoaderData();

  return (
    <div className="card lg:card-side bg-neutral-50 shadow-xl mb-8">
      <figure className="max-w-xs">
        <img src={heroImage} />
      </figure>

      <div className="card-body justify-center">
        <div className="join">
          <select className="select select-bordered w-full max-w-xs join-item">
            <option disabled value={'selected'}>
              Currency
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
          {!isGuest(userName) && (
            <button className="btn btn-neutral join-item">
              <HeartIcon width={20} />
            </button>
          )}
        </div>
        <input
          type="text"
          placeholder="Enter Amount"
          className="input w-full max-w-xs bg-base-200"
        />
      </div>

      <div className="card-body justify-center">
        <div className="join">
          <select className="select select-bordered w-full max-w-xs join-item">
            <option disabled value={'selected'}>
              Currency
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
          {!isGuest(userName) && (
            <button className="btn btn-neutral join-item">
              <HeartIcon width={20} />
            </button>
          )}
        </div>
        <input
          type="text"
          placeholder="Enter Amount"
          className="input w-full max-w-xs bg-base-200"
        />
      </div>
    </div>
  );
}

export default CurrencyCard;
