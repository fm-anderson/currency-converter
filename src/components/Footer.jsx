import githubLogo from '../images/github-logo.svg';
import linkedinLogo from '../images/linkedin-logo.svg';

function Footer() {
  return (
    <footer className="footer items-center p-4 bg-base-100">
      <p className="text-sm justify-self-center lg:justify-self-start lg:text-lg">
        Copyright © {new Date().getFullYear()} - All right reserved
      </p>
      <div className="grid-flow-col gap-4 justify-self-center md:place-self-center md:justify-self-end">
        <a href="https://github.com/fm-anderson" target="_blank">
          <img src={githubLogo} width={32} />
        </a>
        <a href="https://linkedin.com/in/fm-anderson/" target="_blank">
          <img src={linkedinLogo} width={32} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
