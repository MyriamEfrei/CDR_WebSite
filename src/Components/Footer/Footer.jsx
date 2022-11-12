import "./Footer.css";
import logoCDR from "../Assets/LogoDiscord.png";
import AboutUs from "../About us/AboutUs";
import ContactUs from "../ContactUs/ContactUs";

function Footer(){


    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">

                    <div className="col">
                        <h4>Coupe des Régions</h4>
                        <ul className="list">
                            <li><img src={logoCDR} className="logo_f" alt="logo_cdr"/></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h4>Coordonées</h4>
                        <ul className="list">
                            <li>Adresse</li>
                            <li>Téléphone</li>
                            <li>Email</li>
                            <li>Discord</li>
                            <li>Youtube/Twitch</li>
                        </ul>
                    </div>

                    <div className="col">
                        <b><h4>Navigation</h4></b>
                        <ul className="list">
                            <a className="hover:text-yellow-300" href="/"><li>Accueil</li></a>
                            <li>Nos produits</li>
                            <li>Nos services</li>
                            <a className="hover:text-yellow-300" href="/AboutUs"><li>A propos</li></a>
                            <a className="hover:text-yellow-300"  href="/ContactUs"><li>Contactez nous</li></a>
                        </ul>
                    </div>

                    <div className="col">
                        <h4>Produits</h4>
                        <ul className="list">
                            <a className="hover:text-yellow-300" href="/TeeShirt"><li>T-Shirt</li></a>
                            <li>Casquettes</li>
                            <a className="hover:text-yellow-300" href="/Pull"><li>Pull</li></a>
                            <a className="hover:text-yellow-300" href="/Goodies"><li>Goodies</li></a>
                            <li>Autres</li>
                        </ul>
                    </div>



                </div>
            </div>
            <div className="rowcopy">
                <div className="row">
                    <p className="row-sm">
                        &copy;{new Date().getFullYear()} Nolyuks | All right reserved | Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;