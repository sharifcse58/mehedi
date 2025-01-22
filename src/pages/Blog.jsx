import React, { useState } from "react";
import { Link } from "react-router-dom";
import blogs from "../blogs";

const Blog = () => {
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
