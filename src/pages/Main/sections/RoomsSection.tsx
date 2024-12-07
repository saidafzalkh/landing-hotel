import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const rooms = [
  {
    id: 1,
    image: "/images/room1.jpg", // Update with actual image paths
    titleKey: "rooms.standardDoubleLargeBed",
    price: "$100/night",
  },
  {
    id: 2,
    image: "/images/room2.jpg",
    titleKey: "rooms.standardDoubleTwinBeds",
    price: "$90/night",
  },
  {
    id: 3,
    image: "/images/room3.jpg",
    titleKey: "rooms.luxuryDoubleLargeBed",
    price: "$150/night",
  },
  {
    id: 4,
    image: "/images/room4.jpg",
    titleKey: "rooms.standardTriple",
    price: "$120/night",
  },
  {
    id: 5,
    image: "/images/room5.jpg",
    titleKey: "rooms.standardSingle",
    price: "$70/night",
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
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation, Pagination]}
        >
          {rooms.map((room) => (
            <SwiperSlide key={room.id}>
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={room.image}
                  alt={t(room.titleKey)}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-2xl font-semibold mb-2">
                    {t(room.titleKey)}
                  </h3>
                  <p className="text-xl text-gray-600">{room.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RoomsSection;
