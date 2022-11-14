import HeaderPage from "../Header/HeaderPage";
import Footer from "../Footer/Footer";

function ContactUs() {
    return (
        <div>
        <div>
            <div>
            <HeaderPage/>

            <div className="flex">

                <div className="float-left p-20 w-full ">
                    <div className="bg-white  rounded-lg shadow-lg border-2 bg-gray-700">
                        <div className="p-6">
                            <h2 className="font-bold mb-2 text-2xl text-white">You can Leave a comment for us !
                            </h2>
                            <p className="text-white mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
                                of Lorem Ipsum.</p>
                            <p>Logo</p>
                            <p>Logo</p>
                            <p>Logo</p>
                        </div>
                        </div>
                    </div>

                <div className="container mx-auto ">
                    <div className="float-right w-full mr-40 max-w-xl p-5 mx-auto my-10 bg-gray-700 rounded-md shadow-sm w-1/2">
                        <div className="text-center">
                            <h1 className="my-3 text-3xl font-semibold text-white">Contact Us</h1>
                            <p className="text-gray-400">Fill up the form below to send us a message.</p>
                        </div>
                        <div>
                            <form action="" method="POST">
                                <div className="mb-6">
                                    <label htmlFor="name" className="block mb-2 text-sm text-white"
                                    >Full Name</label
                                    >
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="John Doe"
                                        required
                                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="email" className="block mb-2 text-sm text-white"
                                    >Email Address</label
                                    >
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="you@email.com"
                                        required
                                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="phone" className="text-sm text-white">Phone Number</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="91 1234-567"
                                        required
                                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="message" className="block mb-2 text-sm text-white"
                                    >Your Message</label
                                    >

                                    <textarea
                                        rows="5"
                                        name="message"
                                        placeholder="Your Message"
                                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                        required
                                    ></textarea>
                                </div>
                                <div className="mb-6">
                                    <button
                                        type="submit"
                                        className="w-full px-2 py-4 text-white bg-indigo-500 rounded-md  focus:bg-indigo-600 focus:outline-none"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                </div>

                <Footer/> </div>
             </div>

             </div>

    )

}

export default ContactUs;