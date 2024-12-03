import { useTranslation } from "react-i18next";
import bg from "../../../shared/assets/images/main-bg.jpg";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section
      className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>
      <div className="container relative z-10 mx-auto text-center px-4">
        <h1
          data-aos="fade-up"
          className="text-white text-4xl md:text-6xl font-bold mb-4"
        >
          {t("hero.title", "Welcome to Our Hotel")}
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-white text-lg md:text-xl mb-6"
        >
          {t(
            "hero.subtitle",
            "Experience the best stay with stunning views and luxury service.",
          )}
        </p>
        <a
          data-aos="fade-up"
          data-aos-delay="400"
          href="/booking"
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white text-lg font-semibold py-3 px-6 rounded-md shadow-lg transition"
        >
          {t("hero.cta", "Book Now")}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
