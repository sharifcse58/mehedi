import React from "react";
import { useParams } from "react-router-dom";

import blogs from "../blogs";

const BlogDetails = () => {
  const { id } = useParams();

  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">{blog.title}</h1>
      <p className="text-gray-500 mt-2">
        {blog.date} — {blog.readTime}
      </p>
      <div className="mt-5">
        <p>{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
