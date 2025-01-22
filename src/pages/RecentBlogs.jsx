import React, { useState } from "react";
import { Link } from "react-router-dom";

import blogs from "../blogs";

const RecentBlogs = () => {
  const [filteredTag, setFilteredTag] = useState(null);

  // Filter blogs by selected tag
  const filteredBlogs = filteredTag
    ? blogs.filter((blog) => blog.tags.includes(filteredTag))
    : blogs.slice(0, 3); // Show only the 3 most recent blogs by default

  // Handle tag click
  const handleTagClick = (tag) => {
    setFilteredTag(tag);
  };

  return (
    <div id="more" className="bg-gray-100 text-gray-800 py-16 px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Recent Posts</h2>

      <div className="space-y-12 max-w-4xl mx-auto">
        {filteredTag && (
          <div className="mb-4">
            <span className="text-gray-600">
              Filtering by tag:{" "}
              <span className="text-blue-500 font-medium">{filteredTag}</span>
            </span>
            <button
              className="ml-3 text-red-500 underline"
              onClick={() => setFilteredTag(null)}
            >
              Clear Filter
            </button>
          </div>
        )}
        {filteredBlogs.map((blog) => (
          <div key={blog.id} className="border-b pb-6">
            <h3 className="text-xl font-semibold text-gray-900">
              <Link to={`/blog/${blog.id}`} className="hover:text-blue-500">
                {blog.title}
              </Link>
            </h3>
            <p className="text-gray-500 text-sm">
              {blog.date} — {blog.readTime}
            </p>
            <p className="text-gray-600 mt-2">{blog.description}</p>
            <div className="flex flex-wrap items-center mt-2">
              {blog.tags.map((tag, index) => (
                <button
                  key={index}
                  onClick={() => handleTagClick(tag)}
                  className="bg-gray-200 text-gray-700 text-sm py-1 px-3 rounded-full mr-2 mb-2 hover:bg-blue-500 hover:text-white"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          to="/blog"
          className="text-teal-500 hover:text-teal-700 underline text-lg"
        >
          Read All Posts →
        </Link>
      </div>
    </div>
  );
};

export default RecentBlogs;
