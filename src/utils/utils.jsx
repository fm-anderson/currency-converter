export const fakeRequest = () =>
  new Promise((res) => setTimeout(res, Math.random() * 1800));

export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};

export const isGuest = (userName) => {
  return userName === "Guest User";
};

//only allow values with 2 decimals
export const allowedValue = (value) => {
  return value.match(/^(\d*\.{0,1}\d{0,2}$)/);
};

export const saveFavorite = (item) => {
  const favorites = JSON.parse(localStorage.getItem("favorites"));
  if (
    favorites.includes(item.currency) ||
    item.currency === "" ||
    item.currency === "Choose Currency"
  ) {
    return;
  }
  //max 4 favorites per account
  if (favorites.length >= 4) {
    favorites.shift();
  }
  favorites.push(item.currency);
  return localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const deleteFavorite = (item) => {
  const favorites = JSON.parse(localStorage.getItem("favorites"));
  let index = favorites.indexOf(item);

  if (index > -1) {
    favorites.splice(index, 1);
  }
  return localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const randomKey = (length) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

export const convertCurrency = (amount, rate) => {
  if (!rate) {
    return 0;
  }
  const numAmount = Number(amount);
  if (isNaN(numAmount)) {
    return 0;
  }
  return (numAmount * rate).toFixed(2);
};
