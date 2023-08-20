import "./App.css";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import PageContent from "./component/PageContent";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <PageContent />
      <Footer />
    </div>
  );
}

export default App;
