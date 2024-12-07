import PageWrapper from "../../features/AnimateWrapper";
import AboutSection from "./sections/AboutSection";
import BenefitsSection from "./sections/BenefitsSection";
import ContactForm from "./sections/ContactForm";
import HeroSection from "./sections/HeroSection";
// import PrivilegesSection from "./sections/PrivilegesSection";
import RoomsSection from "./sections/RoomsSection";

const MainPage = () => {
  return (
    <PageWrapper>
      <HeroSection />
      <AboutSection />
      <RoomsSection />
      <BenefitsSection />
      <ContactForm />
    </PageWrapper>
  );
};

export default MainPage;
