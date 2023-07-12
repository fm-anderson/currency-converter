import { NavLink } from 'react-router-dom';
import { CurrencyDollarIcon } from '@heroicons/react/24/solid';

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <NavLink to="/" className="flex-1 text-xl font-semibold">
        <CurrencyDollarIcon width={24} height={24} />
        <span className="ml-2"> Currency Converter</span>
      </NavLink>

      <div className="flex-none">
        <button className="btn normal-case text-lg">
          <span>Delete Account</span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
