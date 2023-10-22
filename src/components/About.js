function About() {
  return (
    <div className="pt-12 flex flex-col justify-center min-h-screen" id="about">
      <div className="py-5 px-10 flex flex-col items-start md:px-40">
        <span className="uppercase font-semibold text-sm">About</span>
        <p className="py-2 text-primary">
          Hello! I'm <span className="italic font-medium">Jordan</span>, a
          Front-End Engineer from Singapore.
        </p>
        <p className="py-2 text-primary">
          Back in 2020, amidst my boredom during lockdown, I fell into the
          rabbit hole of programming and web development. Fast forward a few
          years, I've had the privilege of creating many fun projects with my
          friends, such as Ketchup, Handshake, and Drigmo's landing page!
        </p>
        <p className="py-2 text-primary">
          My main focus these days is building in-house for Marketnode, and
          engaging in meaningful side projects.
        </p>
        <p className="py-2 text-primary">
          When I'm not intensely typing in front of my macbook, I can usually be
          found hiding in a corner reading, finding amazing coffee, or bringing
          my camera out on an adventure.
        </p>
        <div className="pt-8 w-full">
          <p className="font-medium">Tech Stack</p>
          <div className="overflow-x-auto">
            <table className="table bg-white">
              {/* head */}
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>Frontend</td>
                  <td>React, TailwindCSS, SCSS, Javascript</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Backend</td>
                  <td>Express, NodeJS</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Miscellaneous</td>
                  <td>Git, Github, Firebase, Python, Java, MySQL</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
