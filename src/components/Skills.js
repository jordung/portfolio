import React from "react";
import { skills } from "../data";
import { TicketIcon } from "@heroicons/react/24/outline";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-20 mx-auto max-sm:py-5 xl:px-40">
        <div className="text-center mb-20 flex flex-col items-center">
          <TicketIcon className="max-sm:h-5 max-sm:mb-1 h-9 w-auto text-gray-300 mb-3" />
          <h1 className="sm:text-4xl text-3xl font-bold title-font text-black mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto -mb-12">
            Here is a list of my skills!
          </p>
        </div>
        <div className="flex flex-wrap lg:w-[650px] sm:mx-auto sm:mb-2 -mx-2 max-sm:text-sm">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 saturate-0 rounded flex p-4 h-full items-center transition hover:saturate-100">
                <span className="title-font font-medium text-black">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
