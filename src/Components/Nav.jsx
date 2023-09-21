import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="nav-container">
          <Link to="/">
            <h1>Books Galore</h1>
          </Link>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>

            <li>
              <Link to="/about-me">About me</Link>
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
