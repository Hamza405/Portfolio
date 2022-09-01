import { FC } from "react";
import SkillContainer from "./SkillContainer";
import { Skill } from "@prisma/client";

const Skills: FC<{ skills: Skill[] }> = ({ skills }) => {
  return (
    <div className="w-full my-4">
      <p className="text-4xl text-green-800">My Skills</p>
      <div className="flex flex-wrap justify-start gap-4 md:gap-8 items-center my-4">
        {skills.map((item) => (
          <SkillContainer key={item.id} image={item.image} />
        ))}

        {/* <SkillContainer image="/assets/skills/html.png" />
        <SkillContainer image="/assets/skills/html.png" />
        <SkillContainer image="/assets/skills/html.png" />
        <SkillContainer image="/assets/skills/html.png" />
        <SkillContainer image="/assets/skills/html.png" />
        <SkillContainer image="/assets/skills/html.png" />
        <SkillContainer image="/assets/skills/html.png" />
        <SkillContainer image="/assets/skills/html.png" /> */}
      </div>
      <p className="text-4xl text-green-800 my-4">Familiar With</p>
      <div className="flex flex-wrap justify-start gap-4 md:gap-6 items-center my-4">
        <SkillContainer image="/assets/skills/html.png" />
        <SkillContainer image="/assets/skills/html.png" />
        <SkillContainer image="/assets/skills/html.png" />
        <SkillContainer image="/assets/skills/html.png" />
        <SkillContainer image="/public/assets/skills/aws.png" />
      </div>
    </div>
  );
};
export default Skills;
