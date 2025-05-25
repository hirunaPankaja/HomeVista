import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, BuildingIcon, PencilRulerIcon, UserIcon, LayoutGridIcon, MenuIcon, XIcon } from 'lucide-react';
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">
              VR Real Estate
            </span>
          </Link>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none">
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" icon={<HomeIcon className="h-4 w-4" />} text="Home" />
            <NavLink to="/properties" icon={<BuildingIcon className="h-4 w-4" />} text="Properties" />
            <NavLink to="/design/demo" icon={<PencilRulerIcon className="h-4 w-4" />} text="Design Studio" />
            <NavLink to="/agent" icon={<UserIcon className="h-4 w-4" />} text="Agent Portal" />
            <NavLink to="/compare/demo" icon={<LayoutGridIcon className="h-4 w-4" />} text="Compare" />
          </div>
        </nav>
        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <MobileNavLink to="/" icon={<HomeIcon className="h-5 w-5" />} text="Home" onClick={toggleMenu} />
              <MobileNavLink to="/properties" icon={<BuildingIcon className="h-5 w-5" />} text="Properties" onClick={toggleMenu} />
              <MobileNavLink to="/design/demo" icon={<PencilRulerIcon className="h-5 w-5" />} text="Design Studio" onClick={toggleMenu} />
              <MobileNavLink to="/agent" icon={<UserIcon className="h-5 w-5" />} text="Agent Portal" onClick={toggleMenu} />
              <MobileNavLink to="/compare/demo" icon={<LayoutGridIcon className="h-5 w-5" />} text="Compare" onClick={toggleMenu} />
            </div>
          </div>}
      </div>
    </header>;
};
const NavLink = ({
  to,
  icon,
  text
}) => <Link to={to} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
    {icon}
    <span>{text}</span>
  </Link>;
const MobileNavLink = ({
  to,
  icon,
  text,
  onClick
}) => <Link to={to} className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md" onClick={onClick}>
    {icon}
    <span className="font-medium">{text}</span>
  </Link>;
export default Navigation;