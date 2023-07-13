//action functions
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
