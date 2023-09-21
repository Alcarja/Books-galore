import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="nav-container">
          <h1>Books Galore</h1>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>

            <li>
              <Link to="/about-us">About us</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
