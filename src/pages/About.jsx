import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800  p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <Link
            to="/"
            className="text-4xl font-bold hover:text-gray-300 hover:underline"
          >
            Home
          </Link>
        </header>
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-2">
            Mohammad Shariful Islam Chowdhury
          </h2>
          <h3 className="text-xl text-gray-600 mb-4">
            Senior Software Engineer at Selise
          </h3>
          <p className="text-lg mt-4">
            Hi there, I'm Shariful Islam, a full-stack developer from
            Bangladesh. I have been working in the field of computer programming
            for seven years. I have worked with PHP, Laravel, and CakePHP to
            develop scalable and reliable backends/APIs for diverse
            applications. Additionally, I have experience in frontend
            development using JavaScript, TypeScript, Vue, React, and Tailwind
            CSS. I am proficient with DevOps tools and practices such as Docker,
            Kubernetes, Ansible, CircleCI, AWS, and Elasticsearch. I hold a
            Bachelor's Degree in Computer Science and Engineering I am
            passionate about learning new skills and technologies and
            collaborating with developers and stakeholders to deliver quality
            products.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Tech stacks I have experience with
          </h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Languages:</h3>
            <p className="text-lg">PHP, JavaScript, TypeScript</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Frameworks:</h3>
            <p className="text-lg">Laravel, CakePHP, Vue, React</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Tools:</h3>
            <p className="text-lg">Elasticsearch, Kibana, FluentD</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Server related:</h3>
            <p className="text-lg">Ansible, Docker, Kubernetes, Helm</p>
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            I enjoy working:
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>In a quiet place</li>
            <li>With collaborative, product-focused people</li>
          </ul>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            When I am not coding:
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>I enjoy long walks</li>
            <li>
              I like to learn new things, which can be anything interesting
            </li>
            <li>Spend time with my birds</li>
            <li>
              I enjoy watching the islamic content and wondering about human
              existence!
            </li>
          </ul>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Contact:</h2>
          <p className="text-lg">
            Email me at{" "}
            <a
              href="mailto:sharifcse57@gmail.com"
              className="text-blue-600 underline"
            >
              sharifcse57@gmail.com
            </a>
          </p>
          <p className="text-lg">
            Whats APP{" "}
            <a href="mobile:+8801679174124" className="text-blue-600 underline">
              +8801679174124
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
