import {
  ArrowLeftOnRectangleIcon,
  UserPlusIcon,
} from '@heroicons/react/24/solid';
import heroImage from '../images/currency-converter.png';

function Home() {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={heroImage} className="w-auto rounded-lg" />
        <div>
          <h1 className="text-3xl lg:text-7xl font-bold">
            Compare Currency{' '}
            <span className="text-[#F7D465]">Prices for Free!</span>
          </h1>
          <p className="py-6">
            Get accurate currency exchange rates for free. Here you'll always
            have the most up-to-date information.
          </p>
          <form className="grid sm:grid-cols-3 grid-cols-1 gap-3 mt-3">
            <input
              className="input input-bordered w-full placeholder:text-center focus:ring ring-offset-2 ring-[#F7D465]"
              placeholder="What's your name?"
              type="text"
              minLength="1"
              maxLength="14"
              required
            />
            <button className="btn btn-neutral normal-case" type="submit">
              Create User
              <span>
                <UserPlusIcon width={20} />
              </span>
            </button>
            <button className="btn normal-case" type="button">
              Guest Access
              <span>
                <ArrowLeftOnRectangleIcon width={20} />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
