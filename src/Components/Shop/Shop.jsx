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
        <div class="Shop-container">



            <div class="Link-shop-container">
                <img className="logo_header_shop" src={logo} alt="logo"/>
                <Link to="/TeeShirt" class="nav-shop">
                    T-SHIRT
                </Link>
                <Link to="/" class="nav-shop">
                    PULLS
                </Link>
                <Link to="/Goodies" class="nav-shop">
                    GOODIES
                </Link>

            </div>

            <img className="logo-shop" src={logo} alt="logo"/>
            <h1 className="title-shop">POURQUOI LA COUPE DES NATIONS ?</h1>
            <p className="text-shop">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar porttitor quam ac molestie. Donec a sollicitudin massa. Pellentesque augue nulla, pretium nec laoreet a, iaculis ut magna. Donec malesuada interdum elit et rhoncus. Cras ut ex interdum, feugiat purus eu, porttitor felis. Sed semper elementum tellus sed tempor. In sit amet tellus quis ligula ornare fringilla eu at mi. Duis mattis ligula augue. Mauris et dui id odio convallis scelerisque et non nibh. Nam in purus sit amet enim gravida eleifend vel ac dolor. Suspendisse maximus metus at enim interdum, ac lacinia enim porttitor. Cras mattis consequat aliquam. Integer condimentum justo ut massa eleifend, eget pharetra nulla sodales. Vivamus lacinia arcu vitae neque lacinia, consequat tempus eros dictum.</p>

        </div>


    )

}

export default Shop;