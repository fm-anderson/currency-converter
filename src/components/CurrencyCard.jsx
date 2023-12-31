import { useEffect, useState } from "react";
import { allowedValue, convertCurrency } from "../utils/utils";
import { fetchRates } from "../utils/api";
import heroImage from "../images/currency-converter.png";

//components
import HomePicker from "./HomePicker";
import AwayPicker from "./AwayPicker";
import Arrows from "./Arrows";

function CurrencyCard({
  clicked,
  setClicked,
  favSelected,
  setFavSelected,
  localCurrency,
  setLocalCurrency,
}) {
  const [home, setHome] = useState({ amount: "", currency: "" });
  const [away, setAway] = useState({ amount: "", currency: "" });
  const [rates, setRates] = useState({});

  const handleHomeChange = async (value) => {
    if (value) {
      setHome((prevState) => ({ ...prevState, currency: value }));
      const ratesFetched = await fetchRates(value);
      setRates(ratesFetched.rates);
    } else if (home.currency && home.currency !== "Choose Currency") {
      const ratesFetched = await fetchRates(home.currency);
      setRates(ratesFetched.rates);
    }
  };

  useEffect(() => {
    if (favSelected || localCurrency) {
      if (favSelected) {
        handleHomeChange(favSelected);
      } else {
        handleHomeChange(localCurrency);
      }
    }
    if (home.currency !== "" && home.currency !== "Choose Currency") {
      handleHomeChange();
    }
  }, [home.currency, favSelected, clicked, localCurrency]);

  useEffect(() => {
    setHome((prevState) => ({ ...prevState, amount: "" }));
    setAway((prevState) => ({ ...prevState, amount: "" }));
  }, [rates, away.currency]);

  const handleInput = (input, value) => {
    switch (input) {
      case "homeValue":
        if (allowedValue(value)) {
          const awayConverted = convertCurrency(value, rates[away.currency]);
          setHome((prevState) => ({ ...prevState, amount: value }));
          setAway((prevState) => ({ ...prevState, amount: awayConverted }));
        }
        break;
      case "awayValue":
        if (allowedValue(value)) {
          const homeConverted = convertCurrency(
            value,
            1 / rates[away.currency]
          );
          setAway((prevState) => ({ ...prevState, amount: value }));
          setHome((prevState) => ({ ...prevState, amount: homeConverted }));
        }
        break;
      case "homeCurrency":
        setHome((prevState) => ({ ...prevState, currency: value }));
        setFavSelected(undefined);
        setLocalCurrency(undefined);
        break;
      case "awayCurrency":
        setAway((prevState) => ({ ...prevState, currency: value }));
        setFavSelected(undefined);
        setLocalCurrency(undefined);
        break;
    }
  };

  return (
    <div className="card lg:card-side bg-neutral-50 shadow-xl mb-8">
      <figure className="max-w-xs mx-auto">
        <img src={heroImage} alt="Different currencies symbols with arrows" />
      </figure>

      <HomePicker
        favSelected={favSelected}
        home={home}
        handleInput={handleInput}
        clicked={clicked}
        setClicked={setClicked}
      />

      <Arrows />

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
