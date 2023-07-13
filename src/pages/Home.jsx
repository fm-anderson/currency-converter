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
            Get accurate currency exchange rates for free. We tracks foreign
            exchange references rates published by the{' '}
            <a
              className="link link-primary"
              target="_blank"
              href="https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html"
            >
              European Central Bank
            </a>
            .
          </p>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Home;
