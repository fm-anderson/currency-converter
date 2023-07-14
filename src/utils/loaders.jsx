import { redirect } from 'react-router-dom';
import { fetchData } from './utils';

//loader functions provide data to the route element before it renders.
export function mainLoader() {
  const userName = fetchData('userName');
  if (!userName) {
    redirect('/home');
  }
  return { userName };
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
