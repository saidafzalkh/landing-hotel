// import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageWrapper from "../../features/AnimateWrapper";
import Greeting from "../../shared/ui/Greeting";
import bg from "../../shared/assets/images/rooms-bg.jpg";

const RoomPage = () => {
  // const { category } = useParams<{ category: string }>();
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <Greeting title={t("header.rooms")} image={bg} />
    </PageWrapper>
  );
};

export default RoomPage;
