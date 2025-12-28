import React from "react";

const Info: React.FC = () => {
  return (
    <div className="bg-[#ecf0f3] ">
      <div className="flex w-full flex-wrap justify-between items-center p-4 mx-auto my-8 max-w-[85%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="">
            <h2 className="text-2xl text-gradient inline-block font-bold mb-4">
              What I Work With
            </h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Mobile Development</h3>
              <p className="text-gray-700">
                React Native • TypeScript • Redux • Native Modules
                (Swift/Kotlin) • SQLite
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Backend & Cloud</h3>
              <p className="text-gray-700">
                Node.js • Express.js • AWS Lambda • DynamoDB • Cognito • REST
                APIs
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Web Development</h3>
              <p className="text-gray-700">
                React.js • Next.js • TailwindCSS • Material UI
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Additional Technologies</h3>
              <p className="text-gray-700">
                Flutter • Dart • Angular • MongoDB • Firebase • Docker
              </p>
            </div>
          </div>

          <div className="flex flex-col md:items-center">
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-2xl text-gradient inline-block font-bold mb-4">
                  Education
                </h2>
                <h4>Tishreen University</h4>
                <p>2017-2022</p>
                <p> Bachelor of Computer Engineering – Latakia, Syria.</p>
                {/* Add your education details here */}
              </div>
              <div>
                <h2 className="text-2xl text-gradient inline-block font-bold mb-4">
                  Languages
                </h2>
                <h4>Arabic</h4>
                <p>Native Proficiency</p>
                <h4 className="mt-2">English</h4>
                <p>Professional Working Proficiency</p>

                {/* Add your language details here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
