import logo from "../Assets/LogoDiscord.png";

function HeaderPage() {
    return (
        <div>
            <div className="flex flex-wrap place-items-center">
                <section className="relative mx-auto">
                    <nav className="flex justify-between bg-gray-900 text-white w-screen">
                        <div className="px-5 xl:px-12 py-6 flex w-full items-center">
                            <a className="text-3xl font-bold font-heading" href="/">
                                <img className="logo_header_shop" src={logo} alt="logo"/>
                            </a>

                            <ul className="hidden md:flex px-4 mx-auto items-center font-semibold font-heading space-x-12 ">
                                <div className="Iam">
                                    <b>
                                        <div className="innerIam">
                                            <p className="text-sky-300">Coupe des régions</p><br/>
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
            </div>
        </div>
    )

}

export default HeaderPage;