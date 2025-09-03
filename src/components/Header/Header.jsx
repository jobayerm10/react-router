import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <div>
      <h2>Navbar</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </div>
  );
};
