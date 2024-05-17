import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  //useEffect to check for scroll and activate sticky nav
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 90 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : null} `}>
      <img src={logo} alt="logo" className="logo" />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>
          {" "}
          <button className="btn">Contact us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
