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
        <div className="flex flex-wrap place-items-center ">
            <section className="relative mx-auto">
                <nav className="flex justify-between bg-gray-900 text-white w-screen">
                    <div className="px-5 xl:px-12 py-6 flex w-full items-center">
                        <a className="text-3xl font-bold font-heading" href="/">
                            <img className="logo_header_shop" src={logo} alt="logo"/>
                        </a>

                        <ul className="hidden md:flex px-4 mx-auto items-center font-semibold font-heading space-x-12">
                            <div className="Iam">
                                <b>
                                    <div className="innerIam">
                                        Coupe des régions<br/>
                                        Discord<br/>
                                        Twitch<br/>
                                        Facebook<br/>
                                        how we do it
                                    </div>
                                </b>

                            </div>
                        </ul>
                    </div>
                </nav>
            </section>


            <Link to="/TeeShirt" className="w-1/6 h-10 bg-white mt-8 mb-2 m-auto inline-block px-6 py-2 border-2 border-blue-400 text-blue-400 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-gray-300 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                T-SHIRT
            </Link>
            <Link to="/" className="w-1/6 h-10 bg-white mt-8 mb-2  m-auto inline-block px-6 py-2 border-2 border-blue-400 text-blue-400 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-gray-300 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                PULLS
            </Link>
            <Link to="/Goodies" className="w-1/6 h-10 bg-white mt-8 mb-2  m-auto inline-block px-6 py-2 border-2 border-blue-400 text-blue-400 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-gray-300 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                GOODIES
            </Link>

        </div>

    )

}

export default Shop;

/*


        <div class="Shop-container">



            <div class="Link-shop-container">
                <ul>
                    <li><img className="logo_header_shop" src={logo} alt="logo"/></li>
                    <li><p>Menue déroulant tkt</p></li>
                </ul>
            </div>

            <div>
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

            <div>
                                <li><Link to="/TeeShirt" className="hover:text-gray-200">
                                    T-SHIRT</Link></li>
                                    <li><Link to="/" className="hover:text-gray-200">
                                    PULLS</Link></li>
                                        <li><Link to="/Goodies" className="hover:text-gray-200">
                                    GOODIES</Link></li>
                            </div>

            <img className="logo-shop" src={logo} alt="logo"/>
            <h1 className="title-shop">POURQUOI LA COUPE DES NATIONS ?</h1>
            <p className="text-shop">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar porttitor quam ac molestie. Donec a sollicitudin massa. Pellentesque augue nulla, pretium nec laoreet a, iaculis ut magna. Donec malesuada interdum elit et rhoncus. Cras ut ex interdum, feugiat purus eu, porttitor felis. Sed semper elementum tellus sed tempor. In sit amet tellus quis ligula ornare fringilla eu at mi. Duis mattis ligula augue. Mauris et dui id odio convallis scelerisque et non nibh. Nam in purus sit amet enim gravida eleifend vel ac dolor. Suspendisse maximus metus at enim interdum, ac lacinia enim porttitor. Cras mattis consequat aliquam. Integer condimentum justo ut massa eleifend, eget pharetra nulla sodales. Vivamus lacinia arcu vitae neque lacinia, consequat tempus eros dictum.</p>

        </div>
 */