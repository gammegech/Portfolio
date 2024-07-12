import React from "react";
import Titles from "../Layouts/Titles";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectCard from "./ProjectCard";


const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Titles
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-3 gap-14">
        <ProjectCard
          title="SOCIAL MEDIA CLONE"
          des="dectiption of social media clone"
          src={projectThree}
        />
        <ProjectCard
          title="Chatting App"
          des="description of chatting app project "
          src={projectTwo}
        />
        <ProjectCard
          title="E-commerce website"
          des="Desctiption of e-commerce websites"
          src={projectOne}
        />
        <ProjectCard
          title="Chatting App"
          des="description of chatting app project "
          src={projectTwo}
        />
        <ProjectCard
          title="E-commerce website"
          des="Desctiption of e-commerce websites"
          src={projectOne}
        />
        <ProjectCard
          title="E-commerce website"
          des="Desctiption of e-commerce websites"
          src={projectThree}
        />
      </div>
    </section>
  );
};

export default Projects;
