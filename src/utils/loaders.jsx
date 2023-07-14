import { redirect } from 'react-router-dom';
import { fetchData } from './utils';

//loader functions provide data to the route element before it renders.
//https://reactrouter.com/en/main/route/loader

export function mainLoader() {
  const userName = fetchData('userName');
  const favorites = fetchData('favorites');
  if (!userName) {
    redirect('/home');
  }
  return { userName, favorites };
}

export async function homeLoader() {
  if (fetchData('userName')) {
    return redirect('/dashboard');
  }
  return null;
}

export async function dashboardLoader() {
  const userName = fetchData('userName');
  const favorites = fetchData('favorites');
  if (!fetchData('userName')) {
    return redirect('/');
  }

  return { userName, favorites };
}
