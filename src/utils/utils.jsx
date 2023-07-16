// check and return local storage item by key
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

//delete item from local storage by key
export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};

//check if user is a guest or has an account
export const isGuest = (userName) => {
  return userName === 'Guest User';
};

//regex only allow values with 2 decimals
export const allowedValue = (value) => {
  return value.match(/^(\d*\.{0,1}\d{0,2}$)/);
};

//update favorites from local storage
export const saveFavorite = (item) => {
  const favorites = JSON.parse(localStorage.getItem('favorites'));
  if (
    //check if currency is already a favorite
    favorites.includes(item.currency) ||
    //the next two lines will check if currency was not selected
    item.currency === '' ||
    item.currency === 'Choose Currency'
  ) {
    return;
  }
  //max 4 favorites per account
  if (favorites.length >= 4) {
    favorites.shift();
  }
  //add new currency to favorites
  favorites.push(item.currency);
  return localStorage.setItem('favorites', JSON.stringify(favorites));
};

//delete favorite currency from currencies array in local storage
export const deleteFavorite = (item) => {
  const favorites = JSON.parse(localStorage.getItem('favorites'));
  //finds index of currency to be deleted
  let index = favorites.indexOf(item);
  //delete currency from array
  if (index > -1) {
    favorites.splice(index, 1);
  }
  //update favorites on local storage value without deleted currency
  return localStorage.setItem('favorites', JSON.stringify(favorites));
};

//generate random string to be used as key
export const randomKey = (length) => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

//converts input values
export const convertCurrency = (amount, rate) => {
  //check if rate was successfully fetched before performing the conversion
  if (!rate) {
    return 0;
  }
  //converts the string passed by the user to a number
  const numAmount = Number(amount);
  if (isNaN(numAmount)) {
    return 0;
  }
  //returns the converted amount based on the rate fetched
  return (numAmount * rate).toFixed(2);
};
