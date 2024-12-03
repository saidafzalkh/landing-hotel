import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const useAOS = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
};

export default useAOS;
