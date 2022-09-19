html
import "./Shop.css";
import logoCDR from "../Assets/LogoDiscord.png";
//import { link } from 'react-router-dom';
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom";
import logo from "../Assets/LogoDiscord.png";

function Shop() {



    return (
        <div clas="Shop-container">

            <div class="Link-shop-container">
                <Link to="/" class="nav-shop">
                    Tee Shirt
                </Link>
                <Link to="/" class="nav-shop">
                    Pull
                </Link>
                <Link to="/" class="nav-shop">
                    Goodies
                </Link>
            </div>

            <div class="box-shop-container">
                <div class="box-shop">
                    <img src={logo} className="image-box" alt="logo"/>
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

export default Shop;