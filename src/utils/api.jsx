export const fetchCurrencies = async () => {
  try {
    const response = await fetch('https://api.vatcomply.com/currencies');
    let data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
