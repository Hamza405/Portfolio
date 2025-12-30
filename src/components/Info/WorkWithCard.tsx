import React from "react";

type WorkWithCardProps = {
  title: string;
  technologies: string;
};

const WorkWithCard: React.FC<WorkWithCardProps> = ({ title, technologies }) => {
  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-700">{technologies}</p>
    </div>
  );
};

export default WorkWithCard;
