import PageWrapper from "../../features/AnimateWrapper";
import AboutSection from "./sections/AboutSection";
import HeroSection from "./sections/HeroSection";
import RoomsSection from "./sections/RoomsSection";

const MainPage = () => {
  return (
    <PageWrapper>
      <HeroSection />
      <AboutSection />
      <RoomsSection />
    </PageWrapper>
  );
};

export default MainPage;
