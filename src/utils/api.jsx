const baseUrl = "https://api.vatcomply.com";

export const fetchCurrencies = async () => {
  try {
    const response = await fetch(`${baseUrl}/currencies`);
    let data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchRates = async (base) => {
  try {
    const response = await fetch(`${baseUrl}/rates?base=${base}`);
    let data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchLocation = async () => {
  try {
    const response = await fetch(`${baseUrl}/geolocate`);
    let data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
