import "./Header.css";
import logo from "../Assets/LogoDiscord.png";

function Header() {
    return(

        <div>

            <div class="container_h">

                    <div class="tiltle_container_cd">
                        <ul>
                        <li><h1 className="title">R E G I O N S</h1>
                                <h1 className="title">D E S</h1>
                                    <h1 className="title" > C O U P E</h1>
                        </li>
                        <li><img src={logo} className="logo_h" alt="logo"/></li>
                    </ul>
                </div>
            </div>

            <div className="wrap">
                <a class="button-header" href="/TeeShirt"><button className="buttonBeatifulHeader">Boutique</button></a>
                <a class="button-header" href="/Actus"><button className="buttonBeatifulHeader">Actus</button></a>

            </div>

        </div>
    )
}

export default Header;