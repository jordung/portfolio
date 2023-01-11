import React from "react";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <section id="contact" className="text-black-400 bg-white-900 body-font">
      <div className="ccontainer px-5 py-28 mx-auto text-center lg:px-40 max-sm:py-5">
        <div className="flex flex-col w-full mb-20 items-center">
          <ChatBubbleOvalLeftEllipsisIcon className="max-sm:h-5 max-sm:mb-1 h-9 w-auto text-gray-300 mb-3" />
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-black">
            Contact me!
          </h1>
          <p className="lg:w-2/3 mx-auto max-sm:text-sm leading-relaxed text-base -mb-12 text-center">
            Hey there, for a quick coffee chat, you can reach out to me at
            <em> jordanayd@gmail.com</em>
            <div className="flex flex-col items-center my-2">
              <button
                onClick={() => (window.location = "mailto:jordanayd@gmail.com")}
                className="relative inline-flex items-center justify-center p-0.5 my-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white focus:ring-1 focus:outline-none focus:ring-pink-200 text-black"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                  Email
                </span>
              </button>
            </div>
          </p>
        </div>
      </div>
    </section>
  );
}
