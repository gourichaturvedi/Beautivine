import { headerLinks } from "../data";
import { NavLink } from "react-router-dom";
import { Menu } from "./Menu";

const Header = () => {
  return (
    <nav className="w-full flex py-4 justify-between items-center bg-gray-900/95 backdrop-blur-lg border-b border-amber-500/10 sticky top-0 z-50 transition-all duration-300">
      <div className="container-responsive flex items-center justify-between">
        {/* Logo Section */}
        <NavLink to="/" className="flex items-center group">
          <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">🌸</span>
          <span className="text-2xl font-display font-bold gradient-text hover:scale-105 transition-transform duration-300">
            Beautivine
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-8">
            {headerLinks.map((headerLink) => (
              <li key={headerLink.id}>
                <NavLink 
                  to={headerLink.title}
                  className={({ isActive }) => `
                    font-ui text-sm font-medium transition-all duration-300 relative group
                    ${isActive 
                      ? 'text-amber-500' 
                      : 'text-gray-300 hover:text-amber-500'
                    }
                  `}
                >
                  {headerLink.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              </li>
            ))}
          </ul>
          
          {/* CTA Button */}
          <NavLink to="/Reservation">
            <button className="btn-primary group">
              <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span className="font-ui text-sm font-semibold uppercase tracking-wide">
                Reservation
              </span>
            </button>
          </NavLink>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Header;
