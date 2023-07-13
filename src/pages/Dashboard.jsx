//components
import CurrencyCard from '../components/CurrencyCard';
import Favorites from '../components/Favorites';

function Dashboard() {
  return (
    <div className="hero min-h-screen bg-base-100 max-w-full">
      <div className="hero-content text-center">
        <div>
          <CurrencyCard />
          <Favorites />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
