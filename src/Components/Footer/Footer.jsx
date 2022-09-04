import "./Footer.css";
import logoCDR from "../Assets/LogoDiscord.png";
//import { link } from 'react-router-dom';

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
                        <h4>Navigation</h4>
                        <ul className="list">
                            <li>Accueil</li>
                            <li>Nos produits</li>
                            <li>Nos services</li>
                            <li>A propos</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div className="col">
                        <h4>Produits</h4>
                        <ul className="list">
                            <li>T-shirts</li>
                            <li>Casquettes</li>
                            <li>Pulls</li>
                            <li>Accessoires</li>
                            <li>Autres</li>
                        </ul>
                    </div>



                </div>

                <div className="rowcopy">
                    <div className="row">
                        <p className="row-sm">
                            &copy;{new Date().getFullYear()} Nolyuk | All right reserved | Terms Of Service | Privacy
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;