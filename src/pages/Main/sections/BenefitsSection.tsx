import {
  FaWifi,
  FaTv,
  FaWind,
  FaWater,
  FaShuttleVan,
  FaConciergeBell,
  FaTshirt,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const BenefitsSection = () => {
  const { t } = useTranslation();

  const benefits = [
    { icon: <FaWifi />, key: "internet" },
    { icon: <FaTv />, key: "lcd_tv" },
    { icon: <FaWind />, key: "air_conditioning" },
    { icon: <FaWater />, key: "bottled_water" },
    { icon: <FaShuttleVan />, key: "transfer" },
    { icon: <FaConciergeBell />, key: "room_service" },
    { icon: <FaTshirt />, key: "laundry_ironing" },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2
          className="text-4xl font-bold text-center text-gray-800 mb-4"
          data-aos="fade-up"
        >
          {t("benefits.title")}
        </h2>
        <p
          className="text-lg text-gray-600 text-center mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {t("benefits.description")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 text-center"
              data-aos="fade-up"
            >
              <div className="text-blue-500 text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {t(`benefits.${benefit.key}.title`)}
              </h3>
              <p className="text-gray-500">
                {t(`benefits.${benefit.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
