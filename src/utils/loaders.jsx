import { redirect } from 'react-router-dom';
import { deleteItem, fetchData } from './utils';

//loader functions
export function mainLoader() {
  const userName = fetchData('userName');
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
  if (!fetchData('userName')) {
    return redirect('/');
  }
  return { userName };
}

export async function logoutLoader() {
  deleteItem({ key: 'userName' });
  return redirect('/');
}
