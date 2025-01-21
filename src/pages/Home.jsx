import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Home = () => {
  return (
    <div className="h-screen flex items-center text-white container mx-auto px-6">
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
          Development, Web, DevOps, automation. I enjoy working with passionate
          people in a team to build products and solutions that help a large
          number of people.
        </p>
        <div className="flex justify-center space-x-4 mb-6">
          <a
            href="#github"
            className="text-white hover:text-gray-400 animate-bounce"
            style={{ animationDuration: "1s" }}
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="#linkedin"
            className="text-white hover:text-gray-400 animate-bounce"
            style={{ animationDuration: "1.2s" }}
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="#email"
            className="text-white hover:text-gray-400 animate-bounce"
            style={{ animationDuration: "1.4s" }}
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="#twitter"
            className="text-white hover:text-gray-400 animate-bounce"
            style={{ animationDuration: "1.6s" }}
          >
            <i className="fab fa-twitter"></i>
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
  );
};

export default Home;
