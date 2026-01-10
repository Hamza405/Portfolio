import React from "react";
import ImpactCard from "./ImpactCard";

const impactData = [
  {
    value: "Thoughtful Architecture",
    label:
      "I focus on writing clean, maintainable code to build secure and scalable solutions that last.",
  },
  {
    value: "Solving Complex Problems",
    label:
      "What drives me is tackling deep technical challenges, from native encryption to offline-first systems.",
  },
  {
    value: "Growing Great Teams",
    label:
      "I believe great software is built by great teams, and I'm passionate about mentoring and contributing to that growth.",
  },
  {
    value: "Beyond Technology",
    label:
      "I work to create applications that people rely on, always keeping the end-user experience at the center of my work.",
  },
];

const Impact: React.FC = () => {
  return (
    <div className="bg-[#ecf0f3] py-8 px-4">
      <div className="max-w-[85%] mx-auto flex flex-col justify-center">
        <h2 className="text-gradient inline-block text-center mb-8 ">
          My Approach
        </h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
            {impactData.map((item, index) => (
              <ImpactCard key={index} value={item.value} label={item.label} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
