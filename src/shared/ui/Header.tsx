import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { ROUTES } from "../../app/routing/routing";
import LanguageSelector from "../../features/LanguageSelector";

const Header = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsScrollingUp(false);
      } else {
        setIsScrollingUp(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    controls.start({ y: isScrollingUp ? 0 : -80 });
  }, [isScrollingUp, controls]);

  return (
    <motion.header
      animate={controls}
      initial={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 lg:px-8">
        {/* Logo */}
        <Link to={ROUTES.MAIN} className="text-xl font-bold text-gray-800">
          GLOBUS HOTEL
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 items-center">
          <Link to={ROUTES.MAIN} className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link to={ROUTES.ABOUT} className="text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link
            to={ROUTES.ROOMS.replace(":category", "standard")}
            className="text-gray-600 hover:text-gray-900"
          >
            Rooms
          </Link>
          <Link
            to={ROUTES.BOOKING}
            className="text-gray-600 hover:text-gray-900"
          >
            Booking
          </Link>
          <LanguageSelector />
          <a
            href="tel:+998901234567"
            className="text-gray-600 hover:text-gray-900"
          >
            +998 90 123 45 67
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-gray-800 text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="lg:hidden bg-white shadow-md p-4">
          <Link
            to={ROUTES.MAIN}
            className="block text-gray-600 hover:text-gray-900 mb-3"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to={ROUTES.ABOUT}
            className="block text-gray-600 hover:text-gray-900 mb-3"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to={ROUTES.ROOMS.replace(":category", "standard")}
            className="block text-gray-600 hover:text-gray-900 mb-3"
            onClick={() => setMenuOpen(false)}
          >
            Rooms
          </Link>
          <Link
            to={ROUTES.BOOKING}
            className="block text-gray-600 hover:text-gray-900 mb-3"
            onClick={() => setMenuOpen(false)}
          >
            Booking
          </Link>
          <LanguageSelector />
          <a
            href="tel:+998901234567"
            className="block text-gray-600 hover:text-gray-900"
            onClick={() => setMenuOpen(false)}
          >
            +998 90 123 45 67
          </a>
        </nav>
      )}
    </motion.header>
  );
};

export default Header;
