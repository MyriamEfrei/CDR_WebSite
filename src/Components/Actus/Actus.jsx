import HeaderPage from "../Header/HeaderPage";
import staffImage from "../Assets/staff.png";
import espot from "../Assets/espot-logo-hq.png";
import espotAll from "../Assets/espotAll.png";
import Calendar from "reactjs-availability-calendar";
import "./Actus.css";

function Actus() {

    const bookings = [
        {
            from: '11-23-2022',
            to: '11-24-2022',
            middayCheckout: false,
        }
    ]
    return(
        <div>
            <HeaderPage/>

            <h1 className="float-left ml-4 mt-4 w-full text-5xl font-extrabold dark:text-yellow-500">LA COUPE DES REGIONS | <small
                className="ml-2 font-semibold text-gray-500 dark:text-black ">5 NOVEMBRE 2022 A L’ESPOT PARIS</small></h1>

            <div className="p-0 mt-20 flex ">
                <div className="w-1/2 bg-gradient-to-r from-black to-gray-500">
                    <img className="m-auto mt-10" src={staffImage} alt="logo"/>

                    <div className="z-10">
                        <small><p className="ml-4 mt-4 text-sm font-extrabold dark:text-yellow-500">La Coupe des régions Offline</p></small>
                        <h1 className="font-bold text-5xl dark:text-white">VENEZ DECOUVRIR LA COUPE DES REGIONS ET LES CREATEURS DE CETTE ORGANISATION !</h1>
                    </div>

                    <button className="bg-yellow-500 mt-2 mb-2 p-3"> En savoir plus >> </button>
                </div>

                <div className="w-1/2 bg-gradient-to-r from-purple-500 to-red-500">
                    <div>
                    <img className="m-auto mb-2 w-1/2 h-auto" src={espot} alt="logo"/>
                    <img className="m-auto mb-2 w-1/2 h-auto" src={espotAll} alt="logo"/>
                    <img className="m-auto mb-2 w-1/2 h-auto" src={staffImage} alt="logo"/>
                    </div>
                </div>

            </div>
            <div className="flex mt-4">
            <hr className="h-2 my-6 w-full lg:w-1/2 rounded border-0 dark:bg-yellow-500 "></hr>
            <h1 className="float-left ml-4 mt-4 text-5xl font-extrabold dark:text-yellow-500">LE RENDEZ-VOUS</h1>
            <hr className="h-2 my-6 w-full lg:w-1/2 rounded border-0 dark:bg-yellow-500 "></hr>
        </div>
            <h1 className="float-left font-bold text-5xl">Des joueurs Clash of Clans</h1>
            <p className="mt-5 float-left w-ful">La Coupe des Régions est une organisation  e-sportive qui propose diverses compétitions autour du jeu vidéo Clash of Clans.
                Notre organisation provoque un vrai engoument pour ce jeu et attire de nombreux nouveau participant depuis maintenant 2020 ! </p>

            <button className="bg-yellow-500 mt-2 mb-2 p-3"> Découvrir >> </button>

            <div className="flex mt-4">
                <hr className="h-2 my-6 w-full lg:w-1/2 rounded border-0 dark:bg-yellow-500 "></hr>
                <h1 className="float-left ml-4 mt-4 text-5xl font-extrabold dark:text-yellow-500">LES ACTUALITES</h1>
                <hr className="h-2 my-6 w-full lg:w-1/2 rounded border-0 dark:bg-yellow-500 "></hr>
            </div>

            <h1 className="font-bold text-5xl mt-2 float-left w-full">Le staff de la Coupe des Régions vous propose de nombreux élèments toute au long de
            l’année 2022 et 2023 !</h1>

            <Calendar bookings={bookings} />

        </div>
    )

}

export default Actus;