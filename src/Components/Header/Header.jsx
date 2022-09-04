import "./Header.css";
import logo from "../Assets/LogoDiscord.png";
//import bg_or from "../Assets/orangeBg.png";

function Header() {
    return(
        <div>

            <div class="container_h">
                <div class="tiltle_container_cd">
                    <h1 class="title" > C O U P E</h1>
                    <h1 className="title">D E S</h1>
                </div>
                <h1 className="title">R E G I O N S</h1>
                <img src={logo} class="logo_h" alt="logo"/>
            </div>

            <div className="example-wrap">
                <div className="button-wrap-1 example">
                    <a href className="clicker">Boutique</a>
                    <div className="circle"></div>
                </div>
            </div>

        </div>
    )
}

export default Header;