import { redirect } from "react-router-dom";
import { fetchData } from "./utils";
import { fetchCurrencies, fetchLocation } from "./api";

export function mainLoader() {
  const userName = fetchData("userName");
  const favorites = fetchData("favorites");
  if (!userName) {
    redirect("/");
  } else {
    redirect("/dashboard");
  }
  return { userName, favorites };
}

export async function homeLoader() {
  if (fetchData("userName")) {
    return redirect("/dashboard");
  }
  return null;
}

export async function dashboardLoader() {
  if (!fetchData("userName")) {
    return redirect("/");
  }
  const userName = fetchData("userName");
  const favorites = fetchData("favorites");
  const currencies = await fetchCurrencies();
  const location = await fetchLocation();

  return { userName, favorites, currencies, location };
}
