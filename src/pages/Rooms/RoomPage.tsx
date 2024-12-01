import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageWrapper from "../../features/AnimateWrapper";

const RoomPage = () => {
  const { category } = useParams<{ category: string }>();
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold" data-aos="fade-up">
          {t("rooms.title", { category })}
        </h1>
        <p className="mt-4" data-aos="fade-up" data-aos-delay="200">
          {t("rooms.description", { category })}
        </p>
      </div>
    </PageWrapper>
  );
};

export default RoomPage;
