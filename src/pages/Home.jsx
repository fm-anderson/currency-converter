import heroImage from '../images/currency-converter.png';

//components
import LoginForm from '../components/LoginForm';

function Home() {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={heroImage} className="w-auto rounded-lg" />
        <div>
          <h1 className="text-3xl text-center md:text-start lg:text-7xl font-bold">
            Compare Currency{' '}
            <span className="text-[#F7D465]">Prices for Free!</span>
          </h1>
          <p className="py-6 text-center md:text-start">
            Get accurate currency exchange rates for free. Here you'll always
            have the most up-to-date information.
          </p>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Home;
