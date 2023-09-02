import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { fetchEvents } from "./Redux/Services/EventService";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents());
  }, []);
  return (
    <div className="dark:text-white text-black bg-whiteMain dark:bg-darkMain">
      <Outlet />
    </div>
  );
}

export default App;
