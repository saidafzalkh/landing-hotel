import double from "../../../shared/assets/images/double.jpg";
import doubleLux from "../../../shared/assets/images/double-lux.jpg";
import tripli from "../../../shared/assets/images/tripli.jpg";
import twin from "../../../shared/assets/images/twin.jpg";
import Card from "../../../shared/ui/Card";
import { useTranslation } from "react-i18next";

const rooms = [
  {
    id: 1,
    image: double,
    title: "Double Room",
    name: "roomsSection.rooms.standardDoubleLargeBed",
    price: "UZS 600 000 /",
  },
  {
    id: 2,
    image: twin,
    title: "Twin Room",
    name: "roomsSection.rooms.standardDoubleTwinBeds",
    price: "UZS 500 000 /",
  },
  {
    id: 3,
    image: doubleLux,
    title: "Double Lux Room",
    name: "roomsSection.rooms.luxuryDoubleLargeBed",
    price: "UZS 800 000 /",
  },
  {
    id: 4,
    image: tripli,
    title: "Tripli Room",
    name: "roomsSection.rooms.standardTriple",
    price: "UZS 900 000 /",
  },
  {
    id: 5,
    image: "/images/room5.jpg",
    title: "Single Room",
    name: "roomsSection.rooms.standardSingle",
    price: "UZS 450 000 /",
  },
];

const RoomsList: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto">
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room) => (
          <Card
            image={room.image}
            name={t(room.name)}
            night={t("roomsSection.night")}
            price={room.price}
            title={room.title}
          />
        ))}
      </div>
    </section>
  );
};

export default RoomsList;
