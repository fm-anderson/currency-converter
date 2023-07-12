import { ArrowUturnLeftIcon, HomeIcon } from '@heroicons/react/24/solid';
import { Link, useNavigate, useRouteError } from 'react-router-dom';

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="hero min-h-screen bg-gradient-to-r bg-base-100">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-3xl font-bold">Uh oh! We've got a problem.</h1>
          <p className="py-6 text-2xl">
            Error: {error.status} {error.message || error.statusText}
          </p>
          <div className="flex justify-center gap-4">
            <button className="btn" onClick={() => navigate(-1)}>
              <ArrowUturnLeftIcon width={20} />
              <span>Go Back</span>
            </button>
            <Link to="/" className="btn">
              <HomeIcon width={20} />
              <span>Go Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
