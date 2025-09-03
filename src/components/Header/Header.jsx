import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <div>
      <nav>
        {/* <span>My Website</span> */}
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </div>
  );
};
