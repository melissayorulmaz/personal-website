import React, { useContext } from 'react';
import { useTranslation } from "react-i18next";
import { UserContext } from "../context/UserContext";

import Ellipse from "../assets/Ellipse.svg";
import Node from "../assets/node-logo.svg";
import Figma from "../assets/figma-logo.svg";
import ReactLogo from "../assets/ReactLogo.svg";
import JS from "../assets/js-logo.svg";
import Redux from "../assets/Redux.svg";
import VS from "../assets/Vscode.svg";

const skillsData = [
  { name: "JavaScript", image: JS },
  { name: "React", image: ReactLogo },
  { name: "Redux", image: Redux },
  { name: "Node", image: Node },
  { name: "VS Code", image: VS },
  { name: "Figma", image: Figma }
];

export default function Skills() {
  const { darkMode } = useContext(UserContext);
  const { t } = useTranslation();

  return (
    <div className={darkMode ? 'dark' : ''}>
      <section className="w-screen h-[72vh] bg-[#FFFFFF] dark:bg-[#484148] overflow-hidden relative ">
        <img className="absolute border-[20px] border-[#D9D9D9] dark:border-[#525252] border-transparent rounded-full left-[1000px] top-[-80px]" src={Ellipse}/>
        <h1 className="mt-10 dark:text-[#FFFFFF]">{t('skills')}</h1>
        <div className="grid grid-cols-6 p-10">
          {skillsData.map((skill, index) => (
            <div key={index} className="text-center">
              <img src={skill.image} className="w-15 h-15 mx-auto mr-4 mt-12" alt={skill.name} />
              <p className="text-m font-medium text-gray-700 px-4 ml-16 dark:text-[#FFFFFF]">{skill.name}</p>
            </div>
          ))}
          <span className="absolute rounded-full w-[70px] h-[30px] bg-[#525252] left-[9px] top-[350px] border-l border-r-0 border-t-0 border-b-0 rounded-l-none rounded-r-full"></span>
        </div>
      </section>
    </div>
  );
}