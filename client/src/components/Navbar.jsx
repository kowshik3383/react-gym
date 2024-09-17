

const Navbar = () => {
  // State to manage the navbar's visibility
  
  // Toggle function to handle the navbar's display
 
  return (
    <>
    <div className="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
    <header className="absolute inset-x-0 top-0 z-10 py-8 xl:py-12">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div className="flex items-center justify-between">
                <div className="flex flex-shrink-0">
                    <a href="#" title="BakerStreet" className="inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-secondary focus:ring-primary">
                        <img  className="w-auto h-16" src="https://svgsilh.com/svg/47188.svg" alt="BakerStreet" />
                    </a>
                </div>

                <div className="md:hidden">
                    <button type="button" className="p-2 -m-2 transition-all duration-200 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                <div className="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
                    <a href="#" title="" className="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"> Courses </a>

                    <a
                        href="#"
                        title=""
                        className="
                            inline-flex
                            items-center
                            justify-center
                            px-5
                            py-2
                            font-sans
                            text-base
                            font-normal
                            leading-7
                            transition-all
                            duration-200
                            border-2
                            rounded-full
                            text-white
                            border-primary
                            focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary
                            hover:bg-white hover:text-black
                            focus:ring-offset-secondary
                        "
                    >
                        Sign Up
                    </a>
                </div>
            </div>
        </div>
    </header>

    <div className="absolute inset-0">
        <img className="object-cover w-full h-full" src="data:image/jpeg;base64,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" alt="" />
    </div>

    <div className="relative">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div className="w-full lg:w-2/3 xl:w-1/2">

                <p className="mt-6 tracking-tighter text-white">
                    <span className="font-sans font-normal text-5xl">Elevate Your Fitness Journey:</span><br />
                    <span className="font-serif italic font-normal text-6xl">Where Strength Meets Opportunity</span>
                </p>
              

                <div className="flex items-center mt-5 space-x-3 sm:space-x-4">
                    <a
                        href="#"
                        title=""
                        className="
                            inline-flex
                            items-center
                            justify-center
                            px-5
                            py-2
                            font-sans
                            text-base
                            font-semibold
                            transition-all
                            duration-200
                            border-2 border-transparent
                            rounded-full
                            sm:leading-8
                            bg-white
                            sm:text-lg
                            text-black
                            hover:bg-opacity-90
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
                        "
                        role="button"
                    >
                        Get started
                    </a>

                    <a
                        href="#"
                        title=""
                        className="
                            inline-flex
                            items-center
                            justify-center
                            px-5
                            py-2
                            font-sans
                            text-base
                            font-semibold
                            transition-all
                            duration-200
                            bg-transparent
                            border-2
                            rounded-full
                            sm:leading-8
                            text-white
                            border-primary
                            hover:bg-white
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
                            hover:text-black
                            sm:text-lg
                            focus:ring-offset-secondary
                        "
                        role="button"
                    >
                        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.5271 5.77669L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8574C19.061 12.469 19.061 11.5308 18.4137 11.1424L8.0416 4.9192Z" />
                        </svg>
                        Watch trailer
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

    </>
  );
};

export default Navbar;
