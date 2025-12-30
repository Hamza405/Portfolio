import React from "react";

type ImpactCardProps = {
  value: string;
  label: string;
};

const ImpactCard: React.FC<ImpactCardProps> = ({ value, label }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-[200px] md:max-w-[250px]">
      <p className="text-3xl font-bold text-gradient">{value}</p>
      <p className="text-gray-700 mt-2">{label}</p>
    </div>
  );
};

export default ImpactCard;
