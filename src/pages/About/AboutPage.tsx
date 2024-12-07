import { useTranslation } from "react-i18next";
import PageWrapper from "../../features/AnimateWrapper";
import Greeting from "../../shared/ui/Greeting";
import bg from "../../shared/assets/images/about-bg.jpg";
import AboutLongRead from "./sections/AboutLongRead";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <Greeting title={t("header.about")} image={bg} />
      <AboutLongRead />
    </PageWrapper>
  );
};

export default AboutPage;
