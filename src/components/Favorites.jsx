import { TrashIcon } from '@heroicons/react/24/outline';

function Favorites({ favoritesArr, setFavoritesArr }) {
  return (
    <div className="card w-full bg-neutral-50 shadow-xl">
      <div className="card-body">
        <h2 className="card-title place-content-center text-2xl mb-4">
          {favoritesArr.length >= 1 ? 'Favorites' : 'Save Your Favorites'}
        </h2>
        <div className="flex flex-col lg:flex-row justify-center gap-8">
          {favoritesArr.map((item) => (
            <div key={item} className="join lg:w-1/5 gap-1">
              <button className="btn btn-neutral join-item">{item}</button>
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
