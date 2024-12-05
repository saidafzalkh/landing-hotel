import { useTranslation } from "react-i18next";

const PrivilegesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2
          className="text-4xl font-bold text-center text-gray-800 mb-8"
          data-aos="fade-up"
        >
          {t("privileges.title")}
        </h2>
        <p
          className="text-lg text-gray-600 text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {t("privileges.description")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t("privileges.items", { returnObjects: true }).map(
            (item: string, index: number) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-500">{item.description}</p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default PrivilegesSection;
