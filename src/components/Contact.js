import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="text-black-400 bg-white-900 body-font">
      <div className="ccontainer px-5 py-28 mx-auto text-center lg:px-40 max-sm:py-5">
        <div className="flex flex-col w-full mb-20 items-center">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-black">
            Contact me!
          </h1>
          <p className="lg:w-2/3 mx-auto max-sm:text-sm leading-relaxed text-base -mb-12 text-center">
            Hey there, for a quick coffee chat, you can reach out to me at
            <em> jordanayd@gmail.com</em>
            <div className="flex flex-col items-center my-5">
              <button
                className="font-bold px-5 py-2 border-4 rounded-xl bg-gray-200 hover:bg-gray-300 hover:border-gray-300"
                onClick={() => (window.location = "mailto:jordanayd@gmail.com")}
              >
                Email
              </button>
            </div>
          </p>
        </div>
      </div>
    </section>
  );
}
