import React from "react";
import { Link } from "react-router-dom";

const RecentBlogs = () => {
  const posts = [
    {
      title: "RUST পর্ব ০২ - বেসিক সিনট্যাক্স",
      date: "July 16, 2023",
      readTime: "13 min read",
      description:
        "প্রতিটি প্রোগ্রামিং ল্যাঙ্গুয়েজের যে সকল বেসিক বিষয় থাকবে...",
    },
    {
      title: "RUST প্রোগ্রামিং পর্ব ০১ - কেন শিখবো RUST?",
      date: "June 22, 2023",
      readTime: "12 min read",
      description: "Rust-এ খুব বেশি কিছু বিষয় আলোচনা না করলেও প্রাথমিক...",
    },
    {
      title: "ANSIBLE LEARNING NOTES",
      date: "April 1, 2023",
      readTime: "12 min read",
      description: "Ansible হত্তে একটি টুল যা আপনার ডিপ্লয়মেন্টকে অটোমেট...",
    },
  ];

  return (
    <div id="more" className="bg-gray-100 text-gray-800 py-16 px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Recent Posts</h2>
      <div className="space-y-12 max-w-4xl mx-auto">
        {posts.map((post, index) => (
          <div key={index} className="border-b pb-6">
            <h3 className="text-xl font-semibold text-gray-900">
              {post.title}
            </h3>
            <p className="text-gray-500 text-sm">
              {post.date} — {post.readTime}
            </p>
            <p className="text-gray-600 mt-2">{post.description}</p>
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
