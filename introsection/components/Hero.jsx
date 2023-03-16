'use client';

const Hero = () => (
    <section className="flex flex-row justify-center items-center">

        {/* Text Section */}
        <div className="flex flex-row pt-12 pb-0 gap-4">

            <div className="flex flex-col justify-center space-y-8 relative">
                {/* Hero Title */}
                <div className="flex flex-col">
                    <h1 className="tracking-wide text-8xl font-bold text-black-100"><span className="break-words flex flex-wrap leading-12">Make</span> remote work</h1>

                    <p className="w-2/5 pt-12 break-words font-medium text-lg tracking-wide text-gray-100">
                        Get your team in sync, no matter your location.
                        Streamline processes, create team rituals, and
                        watch productivity soar.
                    </p>

                    <div className="flex items-center justify-center w-36 h-auto mt-12 mb-16 rounded-xl bg-black-100">
                        <button className="py-3 px-4 font-bold text-white-100">Learn more</button>
                    </div>
                    <div className="flex flex-row items-center gap-12 absolute bottom-0 left-0">
                        <img src="/client-databiz.svg" alt="Client Databiz" className="h-auto" />
                        <img src="/client-audiophile.svg" alt="Client Audiophile" className="h-auto" />
                        <img src="/client-meet.svg" alt="Client Meet" className="h-auto" />
                        <img src="/client-maker.svg" alt="Client Maker" className="h-auto" />
                    </div>
                </div>

                {/* Button */}


                {/* Client Logos */}

            </div>

            {/* Image */}
            <div className="flex justify-center pr-8">
                <img src="/image-hero-desktop.png" alt="Hero Image" className="object-scale-down max-w-lg h-auto float-right" />
            </div>

        </div>
    </section>
)

export default Hero;

// w-3/4 pt-24