import React from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();

  const blogs = [
    {
      id: 1,
      title: "RUST পর্ব ০২ - বেসিক সিনট্যাক্স",
      date: "July 16, 2023",
      readTime: "13 min read",
      content: "Here is the detailed content of the blog...",
    },
    {
      id: 2,
      title: "RUST প্রোগ্রামিং পর্ব ০১ - কেন শিখবো RUST?",
      date: "June 22, 2023",
      readTime: "12 min read",
      content: "Here is the detailed content of the blog...",
    },
    {
      id: 3,
      title: "ANSIBLE LEARNING NOTES",
      date: "April 1, 2023",
      readTime: "12 min read",
      content: "Here is the detailed content of the blog...",
    },
    {
      id: 4,
      title: "ReactJS Basics",
      date: "May 5, 2023",
      readTime: "10 min read",
      content: "Here is the detailed content of the blog...",
    },
    {
      id: 5,
      title: "DevOps Best Practices",
      date: "March 20, 2023",
      readTime: "15 min read",
      content: "Here is the detailed content of the blog...",
    },
  ];

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
