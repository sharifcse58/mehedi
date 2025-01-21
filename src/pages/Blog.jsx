import React, { useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "RUST পর্ব ০২ - বেসিক সিনট্যাক্স",
      date: "July 16, 2023",
      readTime: "13 min read",
      tags: ["RUST", "RUST-PROGRAMMING", "BANGLA"],
      description:
        "প্রতিটা প্রোগ্রামিং ল্যাঙ্গুয়েজের যে সকল বেসিক বিষয় থাকে...",
    },
    {
      id: 2,
      title: "RUST প্রোগ্রামিং পর্ব ০১ - কেন শিখবো RUST?",
      date: "June 22, 2023",
      readTime: "12 min read",
      tags: ["RUST", "RUST-PROGRAMMING", "BANGLA"],
      description: "Rust-এ কিছু গুরুত্বপূর্ণ বিষয় আলোচনা করা হয়েছে...",
    },
    {
      id: 3,
      title: "ANSIBLE LEARNING NOTES",
      date: "April 1, 2023",
      readTime: "12 min read",
      tags: ["ANSIBLE", "BANGLA", "DEVOPS"],
      description:
        "Ansible একটি শক্তিশালী সার্ভার অটোমেশন টুল যা অল্প সময়ে অনেক কার্যকরী কাজ...",
    },
    {
      id: 4,
      title: "ReactJS Basics",
      date: "May 5, 2023",
      readTime: "10 min read",
      tags: ["REACT", "JAVASCRIPT"],
      description: "ReactJS-এর বেসিক বিষয় নিয়ে আলোচনা করা হয়েছে...",
    },
    {
      id: 5,
      title: "DevOps Best Practices",
      date: "March 20, 2023",
      readTime: "15 min read",
      tags: ["DEVOPS", "PRACTICES"],
      description: "DevOps এর বেস্ট প্রাকটিস নিয়ে আলোচনা করা হয়েছে...",
    },
    {
      id: 6,
      title: "DevOps Best Practices",
      date: "March 20, 2023",
      readTime: "15 min read",
      tags: ["DEVOPS", "PRACTICES"],
      description: "DevOps এর বেস্ট প্রাকটিস নিয়ে আলোচনা করা হয়েছে...",
    },
    {
      id: 7,
      title: "DevOps Best Practices",
      date: "March 20, 2023",
      readTime: "15 min read",
      tags: ["DEVOPS", "PRACTICES"],
      description: "DevOps এর বেস্ট প্রাকটিস নিয়ে আলোচনা করা হয়েছে...",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [filteredTag, setFilteredTag] = useState(null);
  const postsPerPage = 5;

  // Filter blogs by tag if a tag is selected
  const filteredBlogs = filteredTag
    ? blogs.filter((blog) => blog.tags.includes(filteredTag))
    : blogs;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredBlogs.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle tag click
  const handleTagClick = (tag) => {
    setFilteredTag(tag);
    setCurrentPage(1); // Reset to the first page after filtering
  };

  return (
    <div className="bg-white text-gray-900 py-10 px-5">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">LATEST POSTS</h1>
        {filteredTag && (
          <div className="mt-4">
            <span className="text-gray-500">
              Filtering by tag:{" "}
              <span className="font-semibold text-blue-500">{filteredTag}</span>
            </span>
            <button
              className="ml-4 text-red-500 underline"
              onClick={() => setFilteredTag(null)}
            >
              Clear Filter
            </button>
          </div>
        )}
      </div>
      <div className="space-y-10">
        {currentPosts.map((blog) => (
          <div key={blog.id} className="border-b pb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              <Link to={`/blog/${blog.id}`} className="hover:text-blue-500">
                {blog.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-500 mb-2">
              {blog.date} — {blog.readTime}
            </p>
            <div className="flex flex-wrap items-center mb-3">
              {blog.tags.map((tag, index) => (
                <button
                  key={index}
                  onClick={() => handleTagClick(tag)}
                  className="bg-gray-200 text-gray-800 text-sm font-medium py-1 px-3 rounded-full mr-2 mb-2 hover:bg-blue-500 hover:text-white"
                >
                  {tag}
                </button>
              ))}
            </div>
            <p className="text-gray-600">{blog.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <nav className="flex">
          {Array.from({
            length: Math.ceil(filteredBlogs.length / postsPerPage),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Blog;
