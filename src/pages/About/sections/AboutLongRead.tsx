import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "aos/dist/aos.css";
import AOS from "aos";

const AboutLongRead: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">
          {t("aboutHotel.title")}
        </h2>
        <p
          className="text-lg text-gray-700 leading-relaxed mb-6"
          data-aos="fade-up"
        >
          {t("aboutHotel.paragraph1")}
        </p>
        <p
          className="text-lg text-gray-700 leading-relaxed mb-6"
          data-aos="fade-up"
        >
          {t("aboutHotel.paragraph2")}
        </p>
        <p
          className="text-lg text-gray-700 leading-relaxed mb-6"
          data-aos="fade-up"
        >
          {t("aboutHotel.paragraph3")}
        </p>
        <p
          className="text-lg text-gray-700 leading-relaxed mb-6"
          data-aos="fade-up"
        >
          {t("aboutHotel.paragraph4")}
        </p>
        <p
          className="text-lg text-gray-700 leading-relaxed mb-6"
          data-aos="fade-up"
        >
          {t("aboutHotel.paragraph5")}
        </p>
      </div>
    </section>
  );
};

export default AboutLongRead;
