import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Links Section */}
        <div data-aos="fade-up">
          <h3 className="text-lg font-semibold mb-4">
            {t("footer.links_title")}
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline">
                {t("footer.home")}
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                {t("footer.about")}
              </a>
            </li>
            <li>
              <a href="/services" className="hover:underline">
                {t("footer.services")}
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                {t("footer.contact")}
              </a>
            </li>
          </ul>
          {/* Social links */}
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              aria-label="Whatsapp"
              className="text-gray-400 hover:text-white text-xl"
            >
              <FaWhatsapp />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 hover:text-white text-xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 hover:text-white text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="Telegram"
              className="text-gray-400 hover:text-white text-xl"
            >
              <FaTelegram />
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div data-aos="fade-up">
          <h3 className="text-lg font-semibold mb-4">
            {t("footer.contact_title")}
          </h3>
          <p>
            {t("footer.phone")}: <br /> +998 99 055 69 99 <br /> +998 95 196 69
            99
          </p>
          <p>{t("footer.email")}: globushotelsgroup@gmail.com</p>
          <p>
            {t("footer.address")}: {t("footer.address_text")}
          </p>
        </div>

        {/* Google Map */}
        <div data-aos="fade-up">
          <h3 className="text-lg font-semibold mb-4">
            {t("footer.map_title")}
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.9391570011503!2d69.32631741142546!3d41.310187200660934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5ed4aa2bfbb%3A0x21e42f8b98e30470!2sGlobus%20Hotel!5e0!3m2!1sen!2s!4v1733250354247!5m2!1sen!2s"
            width="100%"
            height="200"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>

      {/* Scroll to Top */}
      <div className="text-center py-4 bg-gray-800">
        <button
          onClick={scrollToTop}
          className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full shadow-lg"
        >
          {t("footer.to_top")}
        </button>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Globus Hotel Tashkent.{" "}
        {t("footer.rights_reserved")}
      </div>
    </footer>
  );
};

export default Footer;
