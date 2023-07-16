import { useEffect, useState } from 'react';
import { convertCurrency } from '../utils/utils';
import { fetchRates } from '../utils/api';
import heroImage from '../images/currency-converter.png';

//components
import HomePicker from './HomePicker';
import AwayPicker from './AwayPicker';

function CurrencyCard({ clicked, setClicked, favSelected, setFavSelected }) {
  const [home, setHome] = useState({ amount: '', currency: '' });
  const [away, setAway] = useState({ amount: '', currency: '' });
  const [rates, setRates] = useState({});

  const handleHomeChange = async () => {
    const ratesFetched = await fetchRates(home.currency);
    setRates(ratesFetched.rates);
    console.log(rates);
  };

  useEffect(() => {
    if (home.currency === '' || home.currency === 'Choose Currency') {
      return;
    }
    handleHomeChange();
  }, [home.currency]);

  const handleInput = (input, value) => {
    switch (input) {
      case 'homeValue':
        const awayConverted = convertCurrency(value, rates[away.currency]);
        setHome((prevState) => ({ ...prevState, amount: value }));
        setAway((prevState) => ({ ...prevState, amount: awayConverted }));
        break;
      case 'awayValue':
        const homeConverted = convertCurrency(value, 1 / rates[away.currency]);
        setAway((prevState) => ({ ...prevState, amount: value }));
        setHome((prevState) => ({ ...prevState, amount: homeConverted }));
        break;
      case 'homeCurrency':
        setHome((prevState) => ({ ...prevState, currency: value }));
        setFavSelected(undefined);
        break;
      case 'awayCurrency':
        setAway((prevState) => ({ ...prevState, currency: value }));
        setFavSelected(undefined);
        break;
    }
  };

  return (
    <div className="card lg:card-side bg-neutral-50 shadow-xl mb-8">
      <figure className="max-w-xs">
        <img src={heroImage} />
      </figure>

      <HomePicker
        favSelected={favSelected}
        home={home}
        handleInput={handleInput}
        clicked={clicked}
        setClicked={setClicked}
      />

      <AwayPicker
        favSelected={favSelected}
        away={away}
        handleInput={handleInput}
        clicked={clicked}
        setClicked={setClicked}
      />
    </div>
  );
}

export default CurrencyCard;
