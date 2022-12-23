import React from "react";
import picture from "../assets/jordan.jpg";

export default function About() {
  return (
    <section id="about" className="text-black-400 bg-white-900 body-font">
      <div className="container px-5 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20 items-center">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-black">
            About Me
          </h1>
          <img
            src={picture}
            className="w-1/6 rounded-lg mb-5 border-4 border-gray-400"
          />
          <p className="lg:w-2/3 mx-auto max-sm:text-sm leading-relaxed text-base -mb-12 text-left">
            Hello! I'm Jordan, a hopeful front-end development enthusiast.
            <br /> <br />
            I am a recent graduate from Nanyang Technological University, and
            majored in Business (Business Analytics).
            <br /> <br />
            Currently, I'm working as a Business Analyst for Accenture, and
            spend my free time outside of work learning how to code with React
            and other front-end web dev tools. I'm also open to exploring
            positions within front-end/full-stack development!
            <br /> <br />
            I've only started my programming journey after taking a python
            module during my undergraduate days where my team and I had to build
            a resume screener to aid HR departments in their work. Since then,
            this has sparked an interest, and motivation to self-learn through
            various online mediums (incl. Udemy, TheOdinProject, FreeCodeCamp!).
            <br /> <br />I know I still have a long journey ahead, with so many
            things to learn, but do hit me up for a chat if you're interested to
            find out more! Thank you!
          </p>
        </div>
      </div>
    </section>
  );
}
