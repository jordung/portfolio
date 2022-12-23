import Typed from "react-typed";
import { React } from "react";

export default function Hero() {
  return (
    <section id="hero">
      <div className="container mx-auto px-40 py-28 h-screen flex flex-col items-left max-sm:items-center">
        <div className="w-60">
          <img
            className="object-cover object-center rounded-full border-8 border-black"
            alt="profile"
            src="./jordan.jpg"
          />
        </div>
        <div className="lg:flex-grow lg:pr-24 md:pr-16 flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center my-5">
          <h1 className="title-font sm:text-8xl text-4xl mb-4 font-extrabold text-black">
            Hey, I'm Jordan.
          </h1>
          <p className="mb-8 sm:text-4xl leading-relaxed typewriter">
            I am a <br />
            <Typed
              strings={[
                "Front-End Web Enthusiast.",
                "Coffee Lover.",
                "Photographer.",
                "F1 Fanatic.",
              ]}
              typeSpeed={50}
              backSpeed={50}
              loop
            />
          </p>
        </div>
      </div>
    </section>
  );
}
