import PageWrapper from "../../features/AnimateWrapper";
import AboutSection from "./sections/AboutSection";
import BenefitsSection from "./sections/BenefitsSection";
import HeroSection from "./sections/HeroSection";
// import PrivilegesSection from "./sections/PrivilegesSection";
import RoomsSection from "./sections/RoomsSection";

const MainPage = () => {
  return (
    <PageWrapper>
      <HeroSection />
      <AboutSection />
      {/* <PrivilegesSection /> */}
      <RoomsSection />
      <BenefitsSection />
    </PageWrapper>
  );
};

export default MainPage;
