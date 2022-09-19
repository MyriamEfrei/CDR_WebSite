import "./Goodies.css";
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom";
import logo from "../Assets/LogoDiscord.png";
import goodies from "./goodies-coc.jpg";
import Shop from "../Shop/Shop";

function Goodies() {

    return (
        <div clas="Shop-container">
            <Shop/>

            <div class="box-shop-container">
                <div class="box-shop">
                    <img src={goodies} className="image-box" alt="logo"/>
                    <p class="text-shop-box"> Ici on vends des GOODIES</p>
                    <p class="price-ts">12 €</p>

                </div>

                <div className="box-shop">
                    <img src={logo} className="image-box" alt="logo"/>
                    <p className="text-shop-box"> Ici on vends des tee-shirt d</p>
                    <p className="price-ts">12 €</p>

                </div>
                <div className="box-shop">
                    <img src={logo} className="image-box" alt="logo"/>
                    <p className="text-shop-box"> Ici on vezefj</p>
                    <p className="price-ts">12 €</p>

                </div>

                <div className="box-shop">
                    <img src={logo} className="image-box" alt="logo"/>
                    <p className="text-shop-box"> Ici on vends des tee-shirt de toutes les tailles car on pèse un max
                        blablablablablfzefjizejfizejizefiàzejiàzefj</p>
                    <p className="price-ts">12 €</p>

                </div>

            </div>


            <Footer/>
        </div>
    )

}

export default Goodies;