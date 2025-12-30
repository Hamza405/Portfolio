import React from "react";
import HighlightCard from "./HighlightCard";

const highlightsData = [
  {
    icon: "🔐",
    title: "Native Encryption Implementation",
    description:
      "Built cross-platform cryptography system using ECC (secp256r1) and AES-256 with custom native modules in Swift and Kotlin, enabling secure key exchange for mobile fintech applications.",
  },
  {
    icon: "📍",
    title: "Geospatial Tracking System",
    description:
      "Engineered real-time location tracking with Swift CLLocationManager, reverse geocoding, and multi-table SQLite architecture for region detection and automated movement analysis.",
  },
  {
    icon: "💾",
    title: "Offline-First Architecture",
    description:
      "Designed SQLite-based data persistence ensuring 100% app functionality without internet, with conflict resolution and optimistic sync when online.",
  },
  {
    icon: "☁️",
    title: "AWS Serverless Infrastructure",
    description:
      "Architected Lambda-based backend with DynamoDB, handling webhook processing, batched API requests, and real-time data synchronization.",
  },
  {
    icon: "📊",
    title: "Financial Compliance Automation",
    description:
      "Developed FBAR and IRS Form 8938 calculation engines with multi-table data aggregation, asset classification, and automated CSV/PDF report generation.",
  },
  {
    icon: "🚀",
    title: "Mobile App Release & CI/CD",
    description:
      "Published and maintained production applications on both the App Store and Google Play using multi-environment CI/CD pipelines for automated builds, testing, and releases.",
  },
];

const Highlights: React.FC = () => {
  return (
    <div className=" bg-white py-8 px-4">
      {/* Technical Highlights */}
      <div className="mx-auto max-w-[85%]">
        <h2 className="text-gradient inline-block text-center mb-8">
          Technical Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlightsData.map((item, index) => (
            <HighlightCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highlights;
