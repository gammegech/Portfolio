import React from "react";
import Titles from "../Layouts/Titles";

const Resume = () => {
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Titles title="6+ YEARS OF EXPERIANCE" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-4">
          <li className="resumeLi">Education </li>
          <li className="resumeLi">Professinal Skills</li>
          <li className="resumeLi">Experience</li>
          <li className="resumeLi">Achievement</li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
