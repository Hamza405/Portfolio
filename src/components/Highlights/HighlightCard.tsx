import React from "react";

type HighlightCardProps = {
  icon: string;
  title: string;
  description: string;
};

const HighlightCard: React.FC<HighlightCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="p-6 bg-[#ecf0f3] rounded-lg shadow-lg">
      <h4 className="text-xl font-bold mb-2">
        {icon} {title}
      </h4>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default HighlightCard;
