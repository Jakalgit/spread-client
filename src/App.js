import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {

    window.scrollTo(0, 0)

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
