import {
  ArrowLeftOnRectangleIcon,
  UserPlusIcon,
} from '@heroicons/react/24/solid';
import { Form } from 'react-router-dom';

function LoginForm() {
  return (
    <Form className="grid sm:grid-cols-3 grid-cols-1 gap-3 mt-3" method="post">
      <input
        className="input input-bordered w-full placeholder:text-center focus:ring ring-offset-2 ring-[#F7D465]"
        type="text"
        name="userName"
        placeholder="What is your name?"
        minLength="1"
        maxLength="14"
        required
      />
      <button className="btn btn-neutral normal-case" type="submit">
        Create User
        <span>
          <UserPlusIcon width={20} />
        </span>
      </button>
      <button className="btn normal-case" type="button">
        Guest Access
        <span>
          <ArrowLeftOnRectangleIcon width={20} />
        </span>
      </button>
    </Form>
  );
}

export default LoginForm;
