import { useTranslation } from "react-i18next";
import PageWrapper from "../../features/AnimateWrapper";
import Greeting from "../../shared/ui/Greeting";
import bg from "../../shared/assets/images/booking-bg.jpg";

const BookingPage = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <Greeting title={t("header.booking")} image={bg} />
    </PageWrapper>
  );
};

export default BookingPage;
