import { useTranslation } from "react-i18next";
import PageWrapper from "../../features/AnimateWrapper";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold" data-aos="fade-up">
          {t("about.title")}
        </h1>
        <p className="mt-4" data-aos="fade-up" data-aos-delay="200">
          {t("about.content")}
        </p>
      </div>
    </PageWrapper>
  );
};

export default AboutPage;
