import { useTranslation } from "react-i18next";
import imageAbout from "../../../shared/assets/images/about-image.jpg";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h1
          className="text-4xl lg:text-6xl font-bold text-gray-800 mb-12 text-center"
          data-aos="fade-up"
        >
          {t("about.why_choose_us")}
        </h1>
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="hidden lg:flex justify-center items-center rounded-lg overflow-hidden">
            <img src={imageAbout} alt={t("about.why_choose_us")} />
          </div>
          <div className="space-y-2 text-lg text-gray-600" data-aos="fade-up">
            <p>
              <strong>{t("about.process_title")}:</strong>{" "}
              {t("about.process_description")}
            </p>
            <p>
              <strong>{t("about.documentation_title")}:</strong>{" "}
              {t("about.documentation_description")}
            </p>
            <p>
              <strong>{t("about.group_services_title")}:</strong>{" "}
              {t("about.group_services_description")}
            </p>
            <p>
              <strong>{t("about.discount_title")}:</strong>{" "}
              {t("about.discount_description")}
            </p>
            <p>
              <strong>{t("about.no_intermediaries_title")}:</strong>{" "}
              {t("about.no_intermediaries_description")}
            </p>
            <div className=" sm:text-left text-center">
              <a
                href="/about"
                className="inline-block bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition"
                data-aos="fade-up"
              >
                {t("about.read_more")}
              </a>
            </div>
          </div>
        </div>
        {/* Read More Button */}
      </div>
    </section>
  );
};

export default AboutSection;
