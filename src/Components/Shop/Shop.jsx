import "./Shop.css";
import logoCDR from "../Assets/LogoDiscord.png";
//import { link } from 'react-router-dom';
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom";
import logo from "../Assets/LogoDiscord.png";

function Shop() {

    /**
    const box = document.querySelector(".box-shop");

    box.addEventListener("mouseup", () => {
        box.style.background = "red" ;
    }); **/


    return (
        <div clas="Shop-container">

            <div class="Link-shop-container">
                <Link to="/TeeShirt" class="nav-shop">
                    Tee Shirt
                </Link>
                <Link to="/" class="nav-shop">
                    Pull
                </Link>
                <Link to="/Goodies" class="nav-shop">
                    Goodies
                </Link>
            </div>

        </div>


    )

}

export default Shop;