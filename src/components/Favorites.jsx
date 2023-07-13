import { HeartIcon } from '@heroicons/react/24/outline';
import React from 'react';

function Favorites() {
  return (
    <div className="card w-full bg-neutral-50 shadow-xl">
      <div className="card-body">
        <h2 className="card-title place-content-center text-2xl mb-4">
          <HeartIcon width={20} /> Favorites
        </h2>
        <div className="flex flex-col lg:flex-row justify-center gap-8">
          <button className="btn btn-neutral w-full lg:w-1/5">Button</button>
          <button className="btn btn-neutral w-full lg:w-1/5">Button</button>
          <button className="btn btn-neutral w-full lg:w-1/5">Button</button>
          <button className="btn btn-neutral w-full lg:w-1/5">Button</button>
        </div>
      </div>
    </div>
  );
}

export default Favorites;
