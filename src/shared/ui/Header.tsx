import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { ROUTES } from "../../app/routing/routing";
import LanguageSelector from "../../features/LanguageSelector";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/logo.svg";

const Header = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  const controls = useAnimation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsTop(currentScrollY === 0);
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
    controls.start({ y: isScrollingUp ? 0 : -100 });
  }, [isScrollingUp, controls]);

  return (
    <motion.header
      animate={controls}
      initial={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${!menuOpen && isTop ? "bg-white bg-opacity-50" : "bg-white shadow-md"}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-2 lg:px-8">
        <Link to={ROUTES.MAIN} className="text-xl font-bold text-gray-800">
          <img alt="GLOBUS HOTEL" src={logo} />
        </Link>

        <nav className="hidden lg:flex gap-6 items-center">
          <Link to={ROUTES.MAIN} className="text-gray-600 hover:text-gray-900">
            {t("header.home", "Home")}
          </Link>
          <Link to={ROUTES.ABOUT} className="text-gray-600 hover:text-gray-900">
            {t("header.about", "About")}
          </Link>
          <Link
            to={ROUTES.ROOMS.replace(":category", "standard")}
            className="text-gray-600 hover:text-gray-900"
          >
            {t("header.rooms", "Rooms")}
          </Link>
          <Link
            to={ROUTES.BOOKING}
            className="text-gray-600 hover:text-gray-900"
          >
            {t("header.booking", "Booking")}
          </Link>
          <LanguageSelector />
        </nav>

        <button
          className="lg:hidden text-gray-800 text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <nav className="lg:hidden bg-white shadow-md p-4">
          <Link
            to={ROUTES.MAIN}
            className="block text-gray-600 hover:text-gray-900 mb-3"
            onClick={() => setMenuOpen(false)}
          >
            {t("header.home", "Home")}
          </Link>
          <Link
            to={ROUTES.ABOUT}
            className="block text-gray-600 hover:text-gray-900 mb-3"
            onClick={() => setMenuOpen(false)}
          >
            {t("header.about", "About")}
          </Link>
          <Link
            to={ROUTES.ROOMS.replace(":category", "standard")}
            className="block text-gray-600 hover:text-gray-900 mb-3"
            onClick={() => setMenuOpen(false)}
          >
            {t("header.rooms", "Rooms")}
          </Link>
          <Link
            to={ROUTES.BOOKING}
            className="block text-gray-600 hover:text-gray-900 mb-3"
            onClick={() => setMenuOpen(false)}
          >
            {t("header.booking", "Booking")}
          </Link>
          <LanguageSelector />
        </nav>
      )}
    </motion.header>
  );
};

export default Header;
