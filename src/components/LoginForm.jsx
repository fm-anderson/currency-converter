import { useState } from 'react';
import { Form } from 'react-router-dom';
import {
  ArrowLeftOnRectangleIcon,
  UserPlusIcon,
} from '@heroicons/react/24/solid';

function LoginForm() {
  const [nameInput, setNameInput] = useState('');

  return (
    <Form className="grid sm:grid-cols-3 grid-cols-1 gap-3 mt-3" method="post">
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
        disabled={nameInput.length < 2}
      >
        Create User
        <span>
          <UserPlusIcon width={20} />
        </span>
      </button>
      <button className="btn normal-case" type="submit">
        Guest Access
        <span>
          <ArrowLeftOnRectangleIcon width={20} />
        </span>
      </button>
    </Form>
  );
}

export default LoginForm;
