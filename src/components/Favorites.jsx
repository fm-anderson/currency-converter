import { useLoaderData } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/24/outline';
import { fetchData, randomKey } from '../utils/utils';
import { useEffect } from 'react';

function Favorites() {
  const { favorites } = useLoaderData('favorites');

  // useEffect(() => {
  //   fetcher.load('/');
  // }, [fetcher]);

  return (
    <div className="card w-full bg-neutral-50 shadow-xl">
      <div className="card-body">
        <h2 className="card-title place-content-center text-2xl mb-4">
          {favorites.length >= 1 ? 'Favorites' : 'Save Your Favorites'}
        </h2>
        <div className="flex flex-wrap justify-center lg:grid lg:grid-flow-col lg:mx-auto lg:gap-4">
          {favorites.map((item) => (
            <div key={randomKey(8)} className="join lg:w-1/4 gap-1 mb-2">
              <button className="btn btn-neutral join-item w-24">{item}</button>
              <button
                className="btn btn-neutral join-item"
                onClick={(e) => console.log(e)}
              >
                <TrashIcon width={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
