import './App.css';
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import TeeShirt from "./Components/Shop/TeeShirt/TeeShirt";
import Goodies from "./Components/Shop/Goodies/Goodies";
import AboutUs from "./Components/About us/AboutUs";
import Pull from "./Components/Shop/Pull/Pull";
import ContactUs from "./Components/ContactUs/ContactUs";
import Actus from "./Components/Actus/Actus";

/**
function App() {
  return (
      <div class="App">
          <Header />
        <BrowserRouter>
        </BrowserRouter>
      <Footer />
      </div>
  );
}
**/

function App() {
    return (
        <div class="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header />} />
                    <Route path="/Shop" element={<Shop />} />
                    <Route path="/TeeShirt" element={<TeeShirt />} />
                    <Route path="/Goodies" element={<Goodies />} />
                    <Route path="/Pull" element={<Pull />} />
                    <Route path="/AboutUs" element={<AboutUs />} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                    <Route path="/Actus" element={<Actus />} />

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
