import { useTranslation } from "react-i18next";
import PageWrapper from "../../features/AnimateWrapper";

const BookingPage = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold" data-aos="fade-up">
          {t("booking.title")}
        </h1>
        <p className="mt-4" data-aos="fade-up" data-aos-delay="200">
          {t("booking.description")}
        </p>
        <button
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {t("booking.cta")}
        </button>
      </div>
    </PageWrapper>
  );
};

export default BookingPage;
