import { useTranslation } from "react-i18next";
import PageWrapper from "../../features/AnimateWrapper";

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <div className="h-[500vh]">
        <div className="container mx-auto py-10">
          <h1 className="text-3xl font-bold" data-aos="fade-up">
            {t("main.welcome")}
          </h1>
          <p className="mt-4" data-aos="fade-up" data-aos-delay="200">
            {t("main.description")}
          </p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default MainPage;
