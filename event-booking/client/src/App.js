import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { fetchEvents } from "./Redux/Services/EventService";
import { useEffect } from "react";
import { fetchLocations } from "./Redux/Services/LocationService";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents());
    dispatch(fetchLocations());
  }, []);
  return (
    <div className="dark:text-white text-black bg-whiteMain dark:bg-darkMain">
      <Outlet />
    </div>
  );
}

export default App;
