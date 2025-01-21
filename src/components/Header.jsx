import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" p-6 flex space-x-6">
      <Link to="/" className="hover:underline text-white">
        Home
      </Link>
      <Link to="/blog" className="hover:underline text-white">
        Blog
      </Link>
      <Link to="/about" className="hover:underline text-white">
        About
      </Link>
    </header>
  );
};

export default Header;
