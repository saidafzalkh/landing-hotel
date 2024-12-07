import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MainPage from "../../pages/Main/MainPage";
import AboutPage from "../../pages/About/AboutPage";
import RoomPage from "../../pages/Rooms/RoomPage";
import BookingPage from "../../pages/Booking/BookingPage";
import i18n from "../providers/i18n";
import { I18nextProvider } from "react-i18next";
import { ROUTES } from "./routing";
import Layout from "../layouts/AppLayout";
import Loading from "../../shared/ui/Loading";

const AppRoutes = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <AnimatePresence>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path={ROUTES.MAIN} element={<Layout />}>
                <Route index path={ROUTES.MAIN} element={<MainPage />} />
                <Route path={ROUTES.ABOUT} element={<AboutPage />} />
                <Route path={ROUTES.ROOMS} element={<RoomPage />} />
                <Route path={ROUTES.BOOKING} element={<BookingPage />} />
              </Route>
            </Routes>
          </Suspense>
        </AnimatePresence>
      </Router>
    </I18nextProvider>
  );
};

export default AppRoutes;
