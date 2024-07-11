import React from "react";
import Titles from "../Layouts/Titles";
import Card from "./Card";

import {AiFillAppstore} from 'react-icons/ai';
import { FaMobile, FaGlobe, FaBars } from "react-icons/fa";
import {SiProgress, SiAntdesign} from 'react-icons/si';


const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Titles title="Features" des="What I Do" />
      <div className="grid grid-cols-3 gap-20">
        <Card
          title="App Development"
          des="Loren ipsum dolor sit amet consectetur adipisicing elit. atque soluta hic consequuntur eum replellendus ad."
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimisation"
          des="Loren ipsum dolor sit amet consectetur adipisicing elit. atque soluta hic consequuntur eum replellendus ad."
          icon={<SiProgress />}
        />
        <Card
          title="Business Stratagy"
          des="Loren ipsum dolor sit amet consectetur adipisicing elit. atque soluta hic consequuntur eum replellendus ad."
          icon={<FaBars />}
        />
        <Card
          title="Mobile Development"
          des="Loren ipsum dolor sit amet consectetur adipisicing elit. atque soluta hic consequuntur eum replellendus ad."
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="Loren ipsum dolor sit amet consectetur adipisicing elit. atque soluta hic consequuntur eum replellendus ad."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="Loren ipsum dolor sit amet consectetur adipisicing elit. atque soluta hic consequuntur eum replellendus ad."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};
// w-1/2 px-12 py-10 h-80 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100
export default Features;
