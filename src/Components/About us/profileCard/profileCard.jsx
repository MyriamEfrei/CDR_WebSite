import myriam_photo from './asset/AMOR_Myriam.jpg'

function profileCard() {

    return (
        <div className="flex mx-auto mt-10">
            <div className="flex">

            <div className="mr-10 ml-10 mx-auto w-full flex-col ml-4 p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100 hover:bg-gray-700">
                <img src={myriam_photo} alt="" className="w-60 h-40 mx-auto rounded-full dark:bg-gray-500  aspect-square" />
                <div className="space-y-4 text-center divide-y divide-gray-700">
                    <div className="my-2 space-y-1">
                        <h2 className="text-xl font-semibold sm:text-2xl">Nolium</h2>
                        <p className="px-5 text-xs sm:text-base dark:text-gray-400">Président</p>
                        <p className="px-5 italic text-xs sm:text-base dark:text-gray-400">"J'explose le game</p>
                    </div>
                    <div className="flex justify-center pt-2 space-x-4 align-center">
                        <a rel="noopener noreferrer" href="#" aria-label="GitHub" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="w-4 h-4 fill-current" viewBox="0 0 16 16">
                                <path
                                    d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                            </svg>

                        </a>
                        <a rel="noopener noreferrer" href="#" aria-label="Dribble" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
                            <svg viewBox="0 0 8 6" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current">
                                <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="mr-10 ml-10 mx-auto w-full flex-col ml-4 p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100 hover:bg-gray-700">
                <img src={myriam_photo} alt="" className="w-40 h-40 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                <div className="space-y-4 text-center divide-y divide-gray-700">
                    <div className="my-2 space-y-1">
                        <h2 className="text-xl font-semibold sm:text-2xl">Ryuk</h2>
                        <p className="px-5 text-xs sm:text-base dark:text-gray-400">Vice-Présidente</p>
                        <p className="px-5 italic text-xs sm:text-base dark:text-gray-400">"J'adore bebou"</p>
                    </div>
                    <div className="flex justify-center pt-2 space-x-4 align-center">
                        <a rel="noopener noreferrer" href="#" aria-label="GitHub" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="w-4 h-4 fill-current" viewBox="0 0 16 16">
                                <path
                                    d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                            </svg>

                        </a>
                        <a rel="noopener noreferrer" href="#" aria-label="Dribble" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
                            <svg viewBox="0 0 8 6" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current">
                                <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

                <div className="mr-20 ml-20 mx-auto w-full flex-col ml-4 p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100 hover:bg-gray-700">
                    <img src={myriam_photo} alt="" className="w-40 h-40 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                    <div className="space-y-4 text-center divide-y divide-gray-700">
                        <div className="my-2 space-y-1">
                            <h2 className="text-xl font-semibold sm:text-2xl">XBen</h2>
                            <p className="px-5 text-xs sm:text-base dark:text-gray-400">Secrétaire</p>
                            <p className="px-5 italic text-xs sm:text-base dark:text-gray-400">"Je gère les papiers"</p>
                        </div>
                        <div className="flex justify-center pt-2 space-x-4 align-center">
                            <a rel="noopener noreferrer" href="#" aria-label="GitHub" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="w-4 h-4 fill-current" viewBox="0 0 16 16">
                                    <path
                                        d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                                </svg>

                            </a>
                            <a rel="noopener noreferrer" href="#" aria-label="Dribble" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400 ">
                                <svg viewBox="0 0 8 6" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current">
                                    <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mr-10 ml-10 mx-auto w-full flex-col ml-4 p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100 hover:bg-gray-700">
                    <img src={myriam_photo} alt="" className="w-40 h-40 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                    <div className="space-y-4 text-center divide-y divide-gray-700">
                        <div className="my-2 space-y-1">
                            <h2 className="text-xl font-semibold sm:text-2xl">Calygael</h2>
                            <p className="px-5 text-xs sm:text-base dark:text-gray-400">Trésorier</p>
                            <p className="px-5 italic text-xs sm:text-base dark:text-gray-400">"J'adore l'argent"</p>
                        </div>
                        <div className="flex justify-center pt-2 space-x-4 align-center">
                            <a rel="noopener noreferrer" href="#" aria-label="GitHub" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="w-4 h-4 fill-current" viewBox="0 0 16 16">
                                    <path
                                        d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                                </svg>

                            </a>
                            <a rel="noopener noreferrer" href="#" aria-label="Dribble" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
                                <svg viewBox="0 0 8 6" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current">
                                    <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>


            </div>


        </div>


    )
}

export default profileCard;