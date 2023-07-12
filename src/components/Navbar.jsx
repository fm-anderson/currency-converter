import { NavLink } from 'react-router-dom';
import { CurrencyDollarIcon } from '@heroicons/react/24/solid';

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <NavLink to="/" className="flex-1 font-semibold text-sm lg:text-xl">
        <CurrencyDollarIcon width={24} />
        <span className="ml-1">Currency Converter</span>
      </NavLink>
      <div className="flex-none">
        <button className="btn normal-case lg:text-lg">
          <span>Delete User</span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
