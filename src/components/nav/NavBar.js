import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import profile from '../../img/profile.jpg';
import database from '../../alldata/data';

const NavBar = () => {
  const { details } = useContext(database);

  return (
    <div className="flex flex-col items-center h-screen text-white py-8">
      {/* Profile Image */}
      <div className="rounded-full overflow-hidden w-40 border-[#343A40] border-4">
        <img
          src={profile}
          alt="profile"
          className="w-full h-full"
        />
      </div>

      {/* Name */}
      <h1 className="text-2xl font-bold mt-4">Bavanagaran</h1>

      {/* Navigation Links */}
      <nav className="mt-8">
        <ul className="space-y-4 text-center">
          <li>
            <Link to="/" className="hover:text-orange-500 font-semibold">Home</Link>
          </li>
          <li>
            <a href="#about" className="hover:text-orange-500">About Me</a>
          </li>
          <li>
            <Link to="/myproject" className="hover:text-orange-500">My Work</Link>
          </li>
          <li>
            <Link to="/resume" className="hover:text-orange-500">Resume</Link>
          </li>
          <li>
            <a href="#contact" className="hover:text-orange-500">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Social Links */}
      <div className="flex w-full gap-3 justify-center items-center mt-7">
        <a href={details.linkin_link} className="text-gray-400 hover:text-white">
          {details.linkdin_logo}
        </a>
        <a href={details.gamil_link} className="text-gray-400 hover:text-white">
          {details.gamil_logo}
        </a>
        <a href={details.git_link} className="text-gray-400 hover:text-white">
          {details.git_logo}
        </a>
      </div>
    </div>
  );
};

export default NavBar;
