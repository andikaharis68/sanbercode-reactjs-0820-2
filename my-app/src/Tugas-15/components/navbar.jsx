import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/theme";

const Navbar = () => {

  const { isLightTheme } = useContext(ThemeContext);

  return (
    <nav style={{ background: isLightTheme ? "#999" : "#222" }} class="navbar">
      <div >
        <div>
          <ul>
            <li><Link to="/tugas-9">Tugas-9</Link></li>
            <li><Link to="/tugas-10">Tugas-10</Link></li>
            <li><Link to="/tugas-11">Tugas-11</Link></li>
            <li><Link to="/tugas-12">Tugas-12</Link></li>
            <li><Link to="/tugas-13">Tugas-13</Link></li>
            <li><Link to="/tugas-14">Tugas-14</Link></li>
            <li><Link to="/settings">Tugas-15</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
