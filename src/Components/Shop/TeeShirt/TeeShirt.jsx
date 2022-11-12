import "./TeeShirt.css";
import Footer from "../../Footer/Footer";
import {Link} from "react-router-dom";
import logo from "../../Assets/LogoDiscord.png";
import tshirt from "../../Assets/tshirt.jpg";
import Shop from "../Shop";

function TeeShirt() {

    return (

        <div className="Shop-container">
            <Shop/>
            <div className="flex">
                <div className="p-20 bg-gray-500 flex-auto w-1/8 ">
                    <div className="bg-white rounded-lg border-2 border-blue-400 shadow-lg hover:bg-gray-300">
                        <img  src={tshirt} alt="" className="image-box rounded-t-lg"></img>

                            <div className="p-6">
                                <h2 className="font-bold mb-2 text-2xl text-purple-800">This is a TShirt from CDR
                                </h2>
                                <p className="text-purple-700 mb-2">You can buy him with a little price !</p>

                                <button className="hover:bg-purple-400"><a href="/" ><svg className="flex-1 w-8 h-8 fill-current mx-auto hover:accent-purple-800" viewBox="0 0 24 24">
                                    <path className=" hover:accent-purple-800"
                                        d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"/>
                                </svg></a></button>
                            </div>
                    </div>
                    </div>

                <div className="p-20 bg-gray-500 flex-auto w-1/8">
                    <div className="bg-white rounded-lg shadow-lg border-2 border-blue-400 hover:bg-gray-300">
                        <img
                            src={tshirt}
                            alt="" className="image-box rounded-t-lg"></img>
                        <div className="p-6">
                            <h2 className="font-bold mb-2 text-2xl text-purple-800">This is a TShirt from CDR
                            </h2>
                            <p className="text-purple-700 mb-2">You can buy him with a little price !</p>

                            <svg className="flex-1 w-8 h-8 fill-current mx-auto hover:caret-amber-100" viewBox="0 0 24 24">
                                <path
                                    d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

                <div className="flex">
                    <div className="p-20 bg-gray-500 w-1/2">
                        <div className="bg-white rounded-lg shadow-lg border-2 border-blue-400 hover:bg-gray-300">
                            <img
                                src={tshirt}
                                alt="" className="image-box rounded-t-lg"></img>
                            <div className="p-6">
                                <h2 className="font-bold mb-2 text-2xl text-purple-800">This is a TShirt from CDR
                                </h2>
                                <p className="text-purple-700 mb-2">You can buy him with a little price !</p>

                                <svg className="flex-1 w-8 h-8 fill-current mx-auto hover:caret-amber-100" viewBox="0 0 24 24">
                                    <path
                                        d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="p-20 bg-gray-500 w-1/2">
                        <div className="bg-white rounded-lg shadow-lg border-2 border-blue-400 hover:bg-gray-300">
                            <img
                                src={tshirt}
                                alt="" className="image-box rounded-t-lg"></img>
                            <div className="p-6">
                                <h2 className="font-bold mb-2 text-2xl text-purple-800">This is a TShirt from CDR
                                </h2>
                                <p className="text-purple-700 mb-2">You can buy him with a little price !</p>

                                <svg className="flex-1 w-8 h-8 fill-current mx-auto hover:caret-amber-100" viewBox="0 0 24 24">
                                    <path
                                        d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"/>
                                </svg>
                            </div>
                        </div>
                    </div>


                </div>
            <Footer/>
            </div>
    )

}

export default TeeShirt;