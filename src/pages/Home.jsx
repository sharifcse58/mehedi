import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Home = () => {
  return (
    <div>
      <div className="max-w-2xl mx-auto flex justify-center relative">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg -z-10"></div>
          <img
            src="/mehedi.jpg" // Replace this with your profile picture URL
            alt="Profile"
            className="w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-white shadow-xl shadow-blue-500/50 hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>

      <div className="h-screen max-w-6xl mx-auto text-white px-8 flex justify-center mt-10">
        <div className="gird grid-cols-1 sm:grid-cols-1 justify-items-start gap-4">
          <h1
            className="text-5xl md:text-7xl font-bold font-sans mb-4 animate-fade-in"
            style={{ animationDuration: "2s" }}
          >
            Hello There,
          </h1>
          <p
            className="text-lg md:text-xl mb-6 animate-slide-in-top"
            style={{ animationDuration: "2.5s" }}
          >
            I am a passionate developer with broad cross-domain expertise: API
            Development, Web, DevOps, automation. I enjoy working with
            passionate people in a team to build products and solutions that
            help a large number of people.
          </p>
          <div className="flex justify-center space-x-4 mb-6">
            <a
              href="https://github.com/sharifcse58"
              target="_blank"
              className="text-white hover:text-gray-400 animate-bounce"
              style={{ animationDuration: "1s" }}
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/sharifulislammehedi/"
              className="text-white hover:text-gray-400 animate-bounce"
              target="_blank"
              style={{ animationDuration: "1.2s" }}
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="emailto:sharifcse57@gmail.com"
              className="text-white hover:text-gray-400 animate-bounce"
              style={{ animationDuration: "1.4s" }}
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="mobile:+8801679174124"
              className="text-white hover:text-gray-400 animate-bounce"
              style={{ animationDuration: "1.6s" }}
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>

          <Link
            to="/about"
            duration={500}
            className="cursor-pointer text-blue-400 hover:underline flex justify-center items-center"
          >
            More about me <span className="ml-2 animate-pulse">→</span>
          </Link>
        </div>

        <div className="absolute bottom-4 w-full text-center text-gray-500 cursor-pointer">
          <ScrollLink
            to="more"
            smooth={true}
            duration={500}
            className=" text-white font-bold text-2xl flex justify-center items-center animate-bounce"
          >
            <p>↓</p>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
