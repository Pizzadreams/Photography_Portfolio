import { NavLink } from "react-router-dom";
import Container from "./Container";

function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive 
      ? "text-white border-b-2 border-white"
      : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-black/60 backdrop-blur-md text-white">
      <Container>
        <div className="flex items-center justify-between py-4">
          <h1 className="text-xl font-bold">
            [Your Name] Photography
          </h1>

          <ul className="flex gap-8">
            <li>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className={navLinkClass}>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;