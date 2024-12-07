interface Props {
  image: string;
  name: string;
  title: string;
  night: string;
  price: string;
}

const Card: React.FC<Props> = ({ image, name, night, title, price }) => {
  return (
    <a
      href="/rooms"
      className="block bg-white shadow-md rounded-lg overflow-hidden h-[400px]"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover hover:object-bottom duration-200"
      />
      <div className="p-4">
        <h3 className="text-2xl font-semibold mb-2 uppercase">{title}</h3>
        <p className="text-xl text-gray-600">{name}</p>
        <p className="text-xl text-blue-600 ">
          {price} {night}
        </p>
      </div>
    </a>
  );
};

export default Card;
