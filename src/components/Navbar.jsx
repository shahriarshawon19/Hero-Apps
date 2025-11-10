import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import icon from "../all-data/logo.png"




const Navbar = () => {
    return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" 
                 className="h-5 w-5" fill="none" 
                 viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" 
                    strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>

          <ul tabIndex={-1} 
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><Link to="/" className='gradient-btn'>Home</Link></li>
            <li><Link to="/apps" className='gradient-btn'>Apps</Link></li>
            <li><Link to="/installed" className='gradient-btn'>Installation</Link></li>
          </ul>
        </div>

        <Link to="/" className="w-10 text-xl flex items-center gap-2 ">
          <img src={icon} alt="logo" className="w-8 h-8 " />
          HERO.IO
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          <li><Link to="/" className='gradient-btn'>Home</Link></li>
          <li><Link to="/apps" className='gradient-btn'>Apps</Link></li>
          <li><Link to="/installed" className='gradient-btn'>Installation</Link></li>
        </ul>
      </div>

      <div className="navbar-end">
        <a   href="https://github.com/shahriarshawon19/my-first-github-repo"
    target="_blank"
    rel="noopener noreferrer" className="btn "  style={{
      background: "linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1) 100%)",
      color: "white"
    }}> <FontAwesomeIcon icon={faGithub} className="mr-2" /> Contribute</a>
      </div>
    </div>
  );
};

export default Navbar;