import { useLoaderData } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/outline';
import { isGuest, randomKey, saveFavorite } from '../utils/utils';

function AwayPicker({ away, handleInput, clicked, setClicked }) {
  const { userName, currencies } = useLoaderData();

  return (
    <div className="card-body justify-center">
      <div className="join">
        <select
          className="select select-bordered w-full max-w-xs join-item"
          name="awayCurrency"
          onChange={(e) => handleInput(e.target?.name, e.target?.value)}
          value={away.currency}
        >
          <option>Choose Currency</option>
          {Object.keys(currencies).map((item) => {
            return <option key={randomKey(8)}>{item}</option>;
          })}
        </select>
        {!isGuest(userName) && (
          <button
            className="btn btn-neutral join-item"
            onClick={() => {
              saveFavorite(away);
              setClicked(!clicked);
            }}
          >
            <HeartIcon width={20} className="pointer-events-none" />
          </button>
        )}
      </div>
      <input
        className="input w-full max-w-xs bg-base-200"
        placeholder="Enter Amount"
        type="number"
        name="awayValue"
        onChange={(e) => handleInput(e.target?.name, e.target?.value)}
        value={away.amount}
      />
    </div>
  );
}

export default AwayPicker;
