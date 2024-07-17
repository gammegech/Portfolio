import React, { useState } from "react";
import Titles from "../Layouts/Titles";
import ResumeCard from "./ResumeCard";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Achievements from "./Achievements";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Titles title="6+ YEARS OF EXPERIANCE" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-4">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className="resumeLi"
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className="resumeLi"
          >
            Professinal Skills
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true) &
              setAchievementData(false)
            }
            className="resumeLi"
          >
            Experience
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(true)
            }
            className="resumeLi"
          >
            Achievement
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {experienceData && <Experience />}
      {achievementData && <Achievements />}
    </section>
  );
};

export default Resume;
