import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";
import { Header } from "./components/common/Header";
import { Fonctionnality } from "./components/Fonctionnality";
import { Support } from "./components/Support";
import { Advice } from "./components/Advice";
import { Testimony } from "./components/Testimony";
import { Info } from "./components/Info";
import { Contact } from "./components/Contact";
import { toast, ToastContainer } from "react-toastify";
import { Footer } from "./components/common/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Fonctionnality />
        <Support />
        <Advice />
        <Testimony />
        <Info />
        <Contact />
        <Footer />
      </div>
      <ToastContainer
        position={toast.POSITION.BOTTOM_CENTER}
        autoClose={2000}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />{" "}
    </>
  );
}

export default App;
