import "./Tee-shirt.css";
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom";
import logo from "../Assets/LogoDiscord.png";
import tee_coc from "./pull-coc.jpeg";
import Shop from "../Shop/Shop";

function TeeShirt() {

    return (

        <div clas="Shop-container">
            <Shop/>

            <div class="box-shop-container">
                <div class="box-shop">
                    <img src={tee_coc} className="image-box" alt="logo"/>
                    <p class="text-shop-box"> Ici on vends des tee-shirt de toutes les tailles car on pèse un max blablablablablfzefjizejfizejizefiàzejiàzefj</p>
                    <p class="price-ts">12 €</p>

                </div>

                <div className="box-shop">
                    <img src={logo} className="image-box" alt="logo"/>
                    <p className="text-shop-box"> Ici on vends des tee-shirt de toutes les tailles car on pèse un max
                        blablablablablfzefjizejfizejizefiàzejiàzefj</p>
                    <p className="price-ts">12 €</p>

                </div>

                <div className="box-shop">
                    <img src={logo} className="image-box" alt="logo"/>
                    <p className="text-shop-box"> Ici on vends des tee-shirt de toutes les tailles car on pèse un max
                        blablablablablfzefjizejfizejizefiàzejiàzefj</p>
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

export default TeeShirt;