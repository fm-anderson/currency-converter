// check and return local storage item by key
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

//delete item from local storage by key
export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};

export const isGuest = (userName) => {
  return userName === 'Guest User';
};
