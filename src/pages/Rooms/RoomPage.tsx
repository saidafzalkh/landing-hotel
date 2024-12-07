import { useTranslation } from "react-i18next";
import PageWrapper from "../../features/AnimateWrapper";
import Greeting from "../../shared/ui/Greeting";
import bg from "../../shared/assets/images/rooms-bg.jpg";
import RoomsList from "./section/RoomsList";

const RoomPage = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <Greeting title={t("header.rooms")} image={bg} />
      <RoomsList />
    </PageWrapper>
  );
};

export default RoomPage;
