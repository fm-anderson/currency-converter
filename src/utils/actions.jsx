import { redirect } from 'react-router-dom';
import { deleteItem, fetchData } from './utils';

export async function homeLoader() {
  if (fetchData('userName')) {
    return redirect('/dashboard');
  }
  return null;
}

export async function logoutLoader() {
  deleteItem({ key: 'userName' });
  return redirect('/');
}

export async function loginFormAction({ request }) {
  const data = await request.formData();
  const formData = Object.fromEntries(data);

  try {
    localStorage.setItem('userName', JSON.stringify(formData.userName));
    return formData;
  } catch (err) {
    throw new Error(
      'There was a problem creating your account. Please, try again'
    );
  }
}
