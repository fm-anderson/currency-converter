import { useState } from 'react';
import {
  ArrowLeftOnRectangleIcon,
  UserPlusIcon,
} from '@heroicons/react/24/solid';
import { useFetcher } from 'react-router-dom';

function LoginForm() {
  const [nameInput, setNameInput] = useState('');
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === 'submitting';

  return (
    <fetcher.Form
      className="grid sm:grid-cols-3 grid-cols-1 gap-3 mt-3"
      method="post"
    >
      {/* submitAction will check hidden field's value */}
      <input type="hidden" name="_action" value="newUser" />
      <input
        className="input input-bordered w-full placeholder:text-center focus:ring ring-offset-2 ring-[#F7D465]"
        type="text"
        name="userName"
        placeholder="What is your name?"
        minLength="2"
        maxLength="14"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
      />
      <button
        className="btn btn-neutral normal-case"
        type="submit"
        disabled={nameInput.length < 2 || isSubmitting}
      >
        {isSubmitting ? 'Creating...' : 'Create User'}
        {isSubmitting ? (
          <span className="loading loading-spinner"></span>
        ) : (
          <UserPlusIcon width={20} />
        )}
      </button>
      <button
        className="btn normal-case"
        type="submit"
        disabled={nameInput.length >= 1 || isSubmitting}
      >
        Guest Access
        <span>
          <ArrowLeftOnRectangleIcon width={20} />
        </span>
      </button>
    </fetcher.Form>
  );
}

export default LoginForm;
