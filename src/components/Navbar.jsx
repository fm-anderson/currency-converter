import { NavLink } from 'react-router-dom';
import { CurrencyDollarIcon } from '@heroicons/react/24/solid';

function Navbar({ userName }) {
  return (
    <div className="navbar bg-base-100 mb-2">
      <NavLink to="/" className="flex-1 font-semibold text-sm lg:text-xl">
        <CurrencyDollarIcon width={24} />
        <span className="ml-1">Currency Converter</span>
      </NavLink>
      <div className="flex-none">
        {userName && (
          <button
            className="btn normal-case lg:text-lg"
            onClick={() => window.my_modal_5.showModal()}
          >
            Delete User
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
