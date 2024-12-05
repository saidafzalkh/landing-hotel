import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import double from "../../../shared/assets/images/double.jpg";
import tripple from "../../../shared/assets/images/tripple.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const RoomsSection = () => {
  const { t } = useTranslation();

  const rooms = [
    {
      category: "single_room",
      image: "/images/single-room.jpg",
      price: "50 USD",
      features: t("rooms.features.single_room"),
    },
    {
      category: "double_room",
      image: double,
      price: "75 USD",
      features: t("rooms.features.double_room"),
    },
    {
      category: "triple_room",
      image: tripple,
      price: "150 USD",
      features: t("rooms.features.triple_room"),
    },
    {
      category: "suite_single",
      image: "/images/suite-single.jpg",
      price: "100 USD",
      features: t("rooms.features.suite_single"),
    },
    {
      category: "suite_double",
      image: "/images/suite-double.jpg",
      price: "120 USD",
      features: t("rooms.features.suite_double"),
    },
  ];

  const cards = [
    { id: 1, title: "Card 1", description: "This is the first card." },
    { id: 2, title: "Card 2", description: "This is the second card." },
    { id: 3, title: "Card 3", description: "This is the third card." },
    { id: 4, title: "Card 4", description: "This is the fourth card." },
  ];

  return (
    <section id="rooms" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">
          {t("rooms.title")}
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          // spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {rooms.map((room) => (
            <SwiperSlide key={room.category} className="flex justify-center">
              <div
                className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm"
                // data-aos="fade-up"
              >
                <img
                  src={room.image}
                  alt={room.category}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">
                    {t(`rooms.categories.${room.category}`)}
                  </h3>
                  <p className="text-gray-700 mt-2">{room.price}</p>
                  {/* <p className="text-sm text-gray-500 mt-2">{room.features}</p> */}
                  <a
                    href={`/rooms/${room.category}`}
                    className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    {t("rooms.read_more")}
                  </a>
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
