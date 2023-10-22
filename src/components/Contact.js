import {
  PiLinkedinLogoBold,
  PiGithubLogoBold,
  PiInstagramLogoBold,
} from "react-icons/pi";

function Contact() {
  const iconStyles =
    "flex items-center gap-4 hover:text-base-300 transition-all duration-200";

  return (
    <div
      className="pb-12 flex flex-col justify-center min-h-screen"
      id="contact"
    >
      <div className="py-5 px-10 flex flex-col items-start md:px-40">
        <span className="uppercase font-semibold text-sm">Contact</span>
        <p className="py-2 text-primary">
          Hey there! For a quick coffee chat to discuss about anything under the
          sun, you can find me at{" "}
          <span
            onClick={() => (window.location = "mailto:jordanayd@gmail.com")}
            className="group transition-all duration-300 ease-in-out cursor-pointer font-medium"
          >
            <span className="pt-2 bg-left-bottom bg-gradient-to-r from-base-300 to-base-300 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] group-hover:text-base-300 transition-all duration-500 ease-out">
              jordanayd@gmail.com.
            </span>
          </span>
        </p>
        <p className="mt-4">
          Alternatively, you can find me at my socials below:{" "}
        </p>
        <div className="flex flex-col gap-2 p-4">
          <a
            href="https://www.linkedin.com/in/jordanangyida/"
            alt="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className={iconStyles}
          >
            <PiLinkedinLogoBold className="h-8 w-8" />
            <p>Jordan Ang Yi Da</p>
          </a>
          <a
            href="https://github.com/jordung"
            alt="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className={iconStyles}
          >
            <PiGithubLogoBold className="h-8 w-8" />
            <p>@jordung</p>
          </a>
          <a
            href="https://www.instagram.com/jordung"
            alt="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className={iconStyles}
          >
            <PiInstagramLogoBold className="h-8 w-8" />
            <p>@jordung</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
