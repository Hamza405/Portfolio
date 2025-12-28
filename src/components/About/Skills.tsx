import { FC } from "react";
import SkillContainer from "./SkillContainer";
import { Skill } from "@prisma/client";

const Skills: FC<{ skills: Skill[] }> = ({ skills }) => {
  const mainSkills = skills
    .filter((i) => i.basic)
    .sort(({ order: a }, { order: b }) => a - b);
  const sideSkills = skills
    .filter((i) => !i.basic)
    .sort(({ order: a }, { order: b }) => a - b);
  return (
    <div className="w-full my-4">
      <h2 className="text-gradient">My Skills</h2>
      <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 items-center my-4">
        {mainSkills.map((item) => (
          <SkillContainer
            key={item.id}
            image={item.image}
            text={item.skillName}
          />
        ))}
      </div>
      <p className="text-4xl text-blue-800 my-6">Familiar With</p>
      <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 items-center my-4">
        {sideSkills.map((item) => (
          <SkillContainer
            key={item.id}
            image={item.image}
            text={item.skillName}
          />
        ))}
      </div>
    </div>
  );
};
export default Skills;
