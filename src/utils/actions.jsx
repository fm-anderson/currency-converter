import { redirect } from 'react-router-dom';
import { deleteItem } from './utils';

export async function logoutLoader() {
  deleteItem({ key: 'userName' });
  return redirect('/');
}
