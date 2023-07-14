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

export const addFavorite = () => {
  console.log();
  const fav = JSON.parse(localStorage.getItem('favorites'));
  console.log(fav);
  // do something
};
