import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <motion.h1
        className="text-4xl font-semibold text-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, ease: "easeOut" },
        }}
        exit={{ opacity: 0, y: 50 }}
      >
        GLOBUS HOTEL TASHKENT
      </motion.h1>
    </div>
  );
};

export default Loading;
