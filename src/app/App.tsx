import useAOS from "../shared/hooks/aos";
import AppRoutes from "./routing/AppRouting";

const App = () => {
  useAOS();

  return <AppRoutes />;
};

export default App;
