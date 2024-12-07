import { FC } from "react";

interface Props {
  title: string;
  image: string;
}

const Greeting: FC<Props> = ({ image, title }) => {
  return (
    <section
      className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>
      <div className="container relative z-10 mx-auto text-center px-4">
        <h1
          data-aos="fade-up"
          className="text-white text-4xl md:text-6xl font-bold mb-4"
        >
          {title}
        </h1>
      </div>
    </section>
  );
};

export default Greeting;
