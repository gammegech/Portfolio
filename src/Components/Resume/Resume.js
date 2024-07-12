import React from "react";
import Titles from "../Layouts/Titles";
import ResumeCard from "./ResumeCard";

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
      <div className="py-12 font-titleFont">
        <p className="text-sm text-designColor tracking-[4px]">1998-2010</p>
        <h2 className="text-4xl font-bold">Education Quality</h2>
      </div>
      <div className="mt-14 w-1/2 h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
          title="Ms in Data Science"
          subTitle="Osiri University (2024 - 2025)"
          result="3.75/4"
          des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
        />
        <ResumeCard
          title="BSc in Software Engineering"
          subTitle="Haramaya University (2013 - 2016)"
          result="3.07/4"
          des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
        />
        <ResumeCard
          title="Secondary School Education"
          subTitle="Bilo Secondary School (2009 - 2012)"
          result="5.00/5"
          des="Secondary Education or post-primary education covers two phases on the International Startard Classification of Education Scale"
        />
      </div>
    </section>
  );
};

export default Resume;
