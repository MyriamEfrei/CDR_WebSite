import React, { useState } from "react";
import HeaderPage from "../Header/HeaderPage";
import staffImage from "../Assets/staff.png";
import espot from "../Assets/espot-logo-hq.png";
import espotAll from "../Assets/espotAll.png";
import event29j from "./Calendrier Asset/event 29 juillet.png";
import Calendar from "reactjs-availability-calendar";
import "./Actus.css";
import Footer from "../Footer/Footer";


function Actus() {

    const [modal, setModal] = useState(false);

    const bookings = [
        {
            from: '07-29-2023',
            to: '07-29-2023',
        },
        {
            from: '02-01-2023',
            to: '02-01-2023',
        }
    ]

        const toggleModal = () => {
            setModal(!modal);
        };

        if(modal) {
            document.body.classList.add('active-modal')
        } else {
            document.body.classList.remove('active-modal')
        }

        return (
            <div className="overflow-hidden">
                <HeaderPage/>

                <h1 className="float-left ml-4 mt-4 w-full text-5xl font-extrabold dark:text-yellow-500">LA COUPE DES
                    REGIONS | <small
                        className="ml-2 font-semibold text-gray-500 dark:text-black ">5 NOVEMBRE 2022 A L’ESPOT
                        PARIS</small></h1>

                <div className="p-0 mt-20 flex ">
                    <div className="w-1/2 bg-gradient-to-r from-black to-gray-500">
                        <img className="m-auto mt-10" src={staffImage} alt="logo"/>

                        <div className="z-10">
                            <small><p className="ml-4 mt-4 text-sm font-extrabold dark:text-yellow-500">La Coupe des
                                régions Offline</p></small>
                            <h1 className="font-bold text-5xl dark:text-white">VENEZ DECOUVRIR LA COUPE DES REGIONS ET
                                LES CREATEURS DE CETTE ORGANISATION !</h1>
                        </div>

                        <button className="bg-yellow-500 mt-2 mb-2 p-3"> En savoir plus >></button>
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
                    <h1 className="float-left ml-4 mt-4 text-5xl font-extrabold dark:text-yellow-500">LE
                        RENDEZ-VOUS</h1>
                    <hr className="h-2 my-6 w-full lg:w-1/2 rounded border-0 dark:bg-yellow-500 "></hr>
                </div>
                <h1 className="float-left font-bold text-5xl">Des joueurs Clash of Clans</h1>
                <p className="mt-5 float-left w-ful">La Coupe des Régions abrégé par le sigle "CDR" est une organisation événementielle française. Celle-ci vous proposes toute l'année des événements plus fous les uns que les autres.
                    La Coupe des Régions est une organisation e-sportive qui propose
                    diverses compétitions autour du jeu vidéo Clash of Clans.
                    Notre organisation provoque un vrai engoument pour ce jeu et attire de nombreux nouveau participant
                    depuis maintenant 2020 ! </p>

                <button className="bg-yellow-500 mt-2 mb-2 p-3"> Découvrir >></button>

                <div className="flex mt-4">
                    <hr className="h-2 my-6 w-full lg:w-1/2 rounded border-0 dark:bg-yellow-500 "></hr>
                    <h1 className="float-left ml-4 mt-4 text-5xl font-extrabold dark:text-yellow-500">LES
                        ACTUALITES</h1>
                    <hr className="h-2 my-6 w-full lg:w-1/2 rounded border-0 dark:bg-yellow-500 "></hr>
                </div>

                <h1 className="font-bold text-5xl mt-2 float-left w-full">Le staff de la Coupe des Régions vous propose
                    de nombreux élèments toute au long de
                    l’année 2022 et 2023 !</h1>

                <Calendar className="modal" bookings={bookings} onClick={toggleModal}></Calendar>

                <div>
                    <p className="float-left text-2xl ml-20 font-bold">Event du 1 fevrier</p>
                    <button onClick={toggleModal} className="font-bold dark:bg-yellow-500">En savoir plus</button>
                </div> <br/>

                <div>
                    <p className="float-left text-2xl ml-20 font-bold">Event du 29 juillet</p>
                    <button onClick={toggleModal} className="btn-modal font-bold dark:bg-yellow-500">En savoir plus</button>
                </div>

                {modal && (
                    <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
                        <div className="modal-content w-1/2">

                            <h2>EVENT 29 juillet</h2>

                            <section className="carousel" aria-label="Gallery">
                                <ol className="carousel__viewport">
                                    <li id="carousel__slide1"
                                        tabIndex="0"
                                        className="carousel__slide">
                                        <img className="m-auto mt-10" src={event29j} alt="logo"/>
                                        <div className="carousel__snapper">
                                            <a href="#carousel__slide4"
                                               className="carousel__prev">Go to last slide</a>
                                            <a href="#carousel__slide2"
                                               className="carousel__next">Go to next slide</a>
                                        </div>
                                    </li>

                                    <li id="carousel__slide2"
                                        tabIndex="0"
                                        className="carousel__slide">
                                        <img className="m-auto mt-10" src={event29j} alt="logo"/>
                                        <div className="carousel__snapper"></div>
                                        <a href="#carousel__slide1"
                                           className="carousel__prev">Go to previous slide</a>
                                        <a href="#carousel__slide3"
                                           className="carousel__next">Go to next slide</a>
                                    </li>

                                    <li id="carousel__slide3"
                                        tabIndex="0"
                                        className="carousel__slide">
                                        <img className="m-auto mt-10" src={event29j} alt="logo"/>
                                        <div className="carousel__snapper"></div>
                                        <a href="#carousel__slide2"
                                           className="carousel__prev">Go to previous slide</a>
                                        <a href="#carousel__slide4"
                                           className="carousel__next">Go to next slide</a>
                                    </li>

                                    <li id="carousel__slide4"
                                        tabIndex="0"
                                        className="carousel__slide">
                                        <img className="m-auto mt-10" src={event29j} alt="logo"/>
                                        <div className="carousel__snapper"></div>
                                        <a href="#carousel__slide3"
                                           className="carousel__prev">Go to previous slide</a>
                                        <a href="#carousel__slide1"
                                           className="carousel__next">Go to first slide</a>
                                    </li>
                                </ol>
                                <aside className="carousel__navigation">
                                    <ol className="carousel__navigation-list">
                                        <li className="carousel__navigation-item">
                                            <a href="#carousel__slide1"
                                               className="carousel__navigation-button">Go to slide 1</a>
                                        </li>
                                        <li className="carousel__navigation-item">
                                            <a href="#carousel__slide2"
                                               className="carousel__navigation-button">Go to slide 2</a>
                                        </li>
                                        <li className="carousel__navigation-item">
                                            <a href="#carousel__slide3"
                                               className="carousel__navigation-button">Go to slide 3</a>
                                        </li>
                                        <li className="carousel__navigation-item">
                                            <a href="#carousel__slide4"
                                               className="carousel__navigation-button">Go to slide 4</a>
                                        </li>
                                    </ol>
                                </aside>
                            </section>
                        </div>
                    </div>
                )}

                <div className="flex mt-4">
                    <hr className="h-2 my-6 w-full lg:w-1/2 rounded border-0 dark:bg-yellow-500 "></hr>
                    <h1 className="float-left ml-4 mt-4 text-5xl font-extrabold dark:text-yellow-500">LES EVENTS</h1>
                    <hr className="h-2 my-6 w-full lg:w-1/2 rounded border-0 dark:bg-yellow-500 "></hr>
                </div>


                <h1 className="font-bold text-5xl mt-2 float-left w-full">L’intersaison de la coupe des Régions : 05/11/2022</h1>
                <p className="mt-10 float-left">Le temps d'un week-end les Streamers de la communauté clash of clans se mobilisent pour une cause. Chaque Streamer appartient à une équipe (Nord/Sud/Est/Ouest).
                    Un tournoi est proposé par l'organisation de la CDR mais chaque Streamer est libre de ces horaires et de son contenu durant ces 4 jours. En 2022 pour sa
                    première édition 8 streamers se sont mobilisés pour lever 900euros au profit de "Tout le monde contre le cancer</p>
                <img className="m-auto pt-10" src={event29j} alt="logo"/>


                <h1 className="font-bold text-5xl mt-10 float-left w-full">La Coupe des dons saison 2 : 01/02/2023</h1>
                <img className="m-auto pt-10" src={event29j} alt="logo"/>

                <h1 className="font-bold text-5xl mt-10 float-left w-full">La Coupe des régions saison 4 : 01/02/2023</h1>
                <img className="m-auto pt-10" src={event29j} alt="logo"/>

                <div className="flex mt-4">
                    <hr className="h-2 my-6 w-full lg:w-1/2 rounded border-0 dark:bg-yellow-500 "></hr>
                    <h1 className="float-left ml-4 mt-4 text-5xl font-extrabold dark:text-yellow-500">LES PARTENAIRE & SPONSORS </h1>
                    <hr className="h-2 my-6 w-full lg:w-1/2 rounded border-0 dark:bg-yellow-500 "></hr>
                </div>

                <div className="testimonial">
                    <img className="w-1/3 h-20" src={event29j} alt=""/>
                    <img className="w-1/3 h-20" src={event29j} alt=""/>
                    <img className="w-1/3 h-20" src={event29j} alt=""/>
                </div>

            <Footer/>

            </div>
        )
}

export default Actus;