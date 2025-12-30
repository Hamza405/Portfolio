import React from "react";
import ImpactCard from "./ImpactCard";

const impactData = [
  {
    value: "+5",
    label: "Years Experience in Mobile & Web Development",
  },
  {
    value: "3",
    label: "Countries Remote Collaboration",
  },
  {
    value: "2",
    label: "Developers Mentored",
  },
  {
    value: "+4",
    label: "Development Teams Led",
  },
];

const Impact: React.FC = () => {
  return (
    <div className="bg-[#ecf0f3] py-8 px-4">
      <div className="max-w-[85%] mx-auto flex flex-col justify-center">
        <h2 className="text-gradient inline-block text-center mb-8 ">Impact</h2>
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
