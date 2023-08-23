//Packages
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

//Styles
import "react-toastify/dist/ReactToastify.css";

//Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="dark:bg-darkBg bg-bgMain">
      <Navbar />
      <div className="p-4 mx-auto max-w-screen-xl min-h-[calc(100vh-4rem)] h-auto">
        <Outlet />
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
