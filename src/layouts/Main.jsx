import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <div className="grid justify-items-center px-6 py-10 mx-6 place-items-start bg-cyan-400">
      <main>
        <h1>Main</h1>
        <Outlet />
      </main>
    </div>
  );
}

export default Main;
