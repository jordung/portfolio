import { PiLinkedinLogoBold, PiGithubLogoBold } from "react-icons/pi";

function Hero() {
  const iconStyles =
    "hover:text-base-300 hover:scale-110 transition-all duration-200";

  return (
    <div className="min-h-screen pt-12 flex flex-col justify-center">
      <div className="text-center p-5 flex flex-col items-center">
        <div>
          <div className="blob"></div>
        </div>
        <h1 className="text-4xl py-2 font-semibold text-primary">Jordan Ang</h1>
        <h2 className="text-primary text-lg">Frontend Engineer</h2>
        <p className="text-sm italic py-5 text-primary max-w-md mx-auto">
          Making accessible, aesthetic and amazing experiences for the web. And
          also coffee.
        </p>
      </div>
      <div className="text-4xl flex justify-center gap-2 py-3 text-primary">
        <a
          href="https://www.linkedin.com/in/jordanangyida/"
          alt="LinkedIn"
          target="_blank"
          rel="noreferrer"
          className={iconStyles}
        >
          <PiLinkedinLogoBold />
        </a>
        <a
          href="https://github.com/jordung"
          alt="LinkedIn"
          target="_blank"
          rel="noreferrer"
          className={iconStyles}
        >
          <PiGithubLogoBold />
        </a>
      </div>
    </div>
  );
}

export default Hero;
