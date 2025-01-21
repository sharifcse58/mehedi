import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-6 flex justify-end space-x-6 pr-8 bg-black">
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
