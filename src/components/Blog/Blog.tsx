import React from "react";

// Sample data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "Navigating SQLite Database Migrations in React Native",
    description:
      "The article is a structured introduction to maneuver SQLite database migrations in React Native involving TypeScript and the react-native-sqlite-storage library.",
    link: "https://medium.com/@hamzash863/navigating-sqlite-database-migrations-in-react-native-786d418655e6",
  },
  {
    id: 2,
    title:
      "Implementing ECC in React Native Without react-native-crypto: A Custom Approach",
    description:
      "This guide explains how to implement ECC natively for both iOS (Swift) and Android (Kotlin) without relying on react-native-crypto.",
    link: "https://medium.com/@hamzash863/implementing-ecc-in-react-native-without-react-native-crypto-a-custom-approach-b91904251fe9",
  },
];

const BlogCard = ({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) => (
  <div className="border border-gray-200 rounded-lg p-5 text-left shadow-md transition-transform duration-200 bg-[#ecf0f3] flex flex-col hover:scale-105">
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 flex-grow mb-5">{description}</p>
    <a
      href={link}
      className="p-2 text-center mt-auto text-gradient"
      target="_blank"
      rel="noopener noreferrer"
    >
      Read Article -&gt;
    </a>
  </div>
);

const Blog = () => {
  return (
    <section id="writing" className="bg-white py-8">
      <div className="flex w-full flex-wrap justify-between items-center p-4 mx-auto my-2 max-w-[85%]">
        <h2 className="mb-6 text-gradient">Technical Writing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              description={post.description}
              link={post.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
