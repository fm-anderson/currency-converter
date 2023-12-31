import { NavLink, useLoaderData } from "react-router-dom";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const { userName } = useLoaderData();

  return (
    <header className="navbar bg-base-100 mb-2">
      <NavLink to="/" className="flex-1 font-semibold text-sm lg:text-xl">
        <CurrencyDollarIcon width={24} />
        <span className="ml-1">Currency Converter</span>
      </NavLink>
      <div className="flex-none">
        {userName && (
          <label className="btn normal-case lg:text-lg" htmlFor="modal-confirm">
            {userName === "Guest User" ? "Logout" : "Delete User"}
          </label>
        )}
      </div>
    </header>
  );
}

export default Navbar;
