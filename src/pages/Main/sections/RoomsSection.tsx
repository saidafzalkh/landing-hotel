import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import double from "../../../shared/assets/images/double.jpg";
import doubleLux from "../../../shared/assets/images/double-lux.jpg";
import tripli from "../../../shared/assets/images/tripli.jpg";
import twin from "../../../shared/assets/images/twin.jpg";
import Card from "../../../shared/ui/Card";

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

const RoomsSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-gray-50" id="rooms">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          {t("roomsSection.title")}
        </h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
        >
          {rooms.map((room) => (
            <SwiperSlide key={room.id}>
              <Card
                image={room.image}
                name={t(room.name)}
                night={t("roomsSection.night")}
                price={room.price}
                title={room.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RoomsSection;
