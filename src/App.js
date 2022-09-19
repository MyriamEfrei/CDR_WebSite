import logo from './logo.svg';
import './App.css';
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { BrowserRouter } from 'react-router-dom';

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

export default App;
