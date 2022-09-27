import { FC } from "react";
import SkillContainer from "./SkillContainer";
import { Skill } from "@prisma/client";

const Skills: FC<{ skills: Skill[] }> = ({ skills }) => {
  const mainSkills = skills.filter((i) => i.basic);
  const sideSkills = skills.filter((i) => !i.basic);
  return (
    <div className="w-full my-4">
      <p className="text-4xl text-green-800">My Skills</p>
      <div className="flex flex-wrap justify-start gap-4 md:gap-8 items-center my-4">
        {mainSkills.map((item) => (
          <SkillContainer key={item.id} image={item.image} />
        ))}
        {mainSkills.map((item) => (
          <SkillContainer key={item.id} image={item.image} />
        ))}
        {mainSkills.map((item) => (
          <SkillContainer key={item.id} image={item.image} />
        ))}
        {mainSkills.map((item) => (
          <SkillContainer key={item.id} image={item.image} />
        ))}
        {mainSkills.map((item) => (
          <SkillContainer key={item.id} image={item.image} />
        ))}
      </div>
      <p className="text-4xl text-green-800 my-6">Familiar With</p>
      <div className="flex flex-wrap justify-start gap-4 md:gap-6 items-center my-4">
        {sideSkills.map((item) => (
          <SkillContainer key={item.id} image={item.image} />
        ))}
        {sideSkills.map((item) => (
          <SkillContainer key={item.id} image={item.image} />
        ))}
        {sideSkills.map((item) => (
          <SkillContainer key={item.id} image={item.image} />
        ))}
        {sideSkills.map((item) => (
          <SkillContainer key={item.id} image={item.image} />
        ))}
        {sideSkills.map((item) => (
          <SkillContainer key={item.id} image={item.image} />
        ))}
        {sideSkills.map((item) => (
          <SkillContainer key={item.id} image={item.image} />
        ))}
        {sideSkills.map((item) => (
          <SkillContainer key={item.id} image={item.image} />
        ))}
        {sideSkills.map((item) => (
          <SkillContainer key={item.id} image={item.image} />
        ))}
        {sideSkills.map((item) => (
          <SkillContainer key={item.id} image={item.image} />
        ))}
        {sideSkills.map((item) => (
          <SkillContainer key={item.id} image={item.image} />
        ))}
        {sideSkills.map((item) => (
          <SkillContainer key={item.id} image={item.image} />
        ))}
        {sideSkills.map((item) => (
          <SkillContainer key={item.id} image={item.image} />
        ))}
        {sideSkills.map((item) => (
          <SkillContainer key={item.id} image={item.image} />
        ))}
      </div>
    </div>
  );
};
export default Skills;
