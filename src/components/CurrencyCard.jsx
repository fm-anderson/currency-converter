import { useState } from 'react';
import { allowedValue } from '../utils/utils';
import heroImage from '../images/currency-converter.png';

//components
import HomePicker from './HomePicker';
import AwayPicker from './AwayPicker';

function CurrencyCard({ clicked, setClicked, favSelected, setFavSelected }) {
  const [home, setHome] = useState({ amount: '', currency: '' });
  const [away, setAway] = useState({ amount: '', currency: '' });

  const handleInput = (input, value) => {
    switch (input) {
      case 'homeValue':
        if (allowedValue(value)) {
          setHome((prevState) => ({ ...prevState, amount: value }));
        }
        break;
      case 'awayValue':
        if (allowedValue(value)) {
          setAway((prevState) => ({ ...prevState, amount: value }));
        }
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
