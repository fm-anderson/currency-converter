function Welcome({
  userName,
  location,
  setLocalCurrency,
  clicked,
  setClicked,
  setFavSelected,
}) {
  const handleLocalCurrencyClick = () => {
    setLocalCurrency(location?.currency);
    setFavSelected(undefined);
    setClicked(!clicked);
  };

  return (
    <>
      <h2 className="card-title text-4xl mb-4">Welcome, {userName}!</h2>
      <div className="card w-full bg-neutral-50 shadow-xl mb-8">
        <div className="card-body">
          <div className="justify-center">
            <p className="font-normal text-md mb-4">
              Click the button below to use your local currency.{' '}
              {location?.emoji}
            </p>
            <button
              className="btn btn-neutral join-item w-32"
              onClick={handleLocalCurrencyClick}
            >
              {location?.currency}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
