import { Outlet } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

function App() {
  return (
    <div className="dark:text-white text-black bg-whiteMain dark:bg-darkMain">
      <Outlet />
    </div>
  );
}

export default App;
