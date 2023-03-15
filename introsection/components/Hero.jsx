'use client';

const Hero = () => (
    <section className="flex flex-row justify-center pt-12 pb-0 px-44">

        {/* Text Section */}
        <div className="flex flex-col w-3/4 pt-24">
            {/* Hero Title */}
            <div>
                <h1 className="text-7xl font-bold pb-12 text-black-100"><span className="break-words flex flex-wrap">Make</span> remote work</h1>
                <p className="break-words w-3/6 font-medium text-lg text-gray-100">
                    Get your team in sync, no matter your location. Streamline processes, create team rituals, and <span className="flex flex-wrap">watch productivity soar.</span>
                </p>
            </div>

            {/* Button */}
            <div className="flex items-center justify-center w-36 h-auto mt-12 mb-16 rounded-lg bg-black-100">
                <button className="py-3 px-4 text-white-100">Learn more</button>
            </div>

            {/* Client Logos */}
            <div className="flex flex-row h-auto w-3/6 gap-8">
                <img src="/client-databiz.svg" alt="Client Databiz" className="max-w-sm h-auto" />
                <img src="/client-audiophile.svg" alt="Client Audiophile" className="max-w-sm h-auto" />
                <img src="/client-meet.svg" alt="Client Meet" className="max-w-sm h-auto" />
                <img src="/client-maker.svg" alt="Client Maker" className="max-w-sm h-auto" />
            </div>
        </div>

        {/* Image */}
        <div className="w-2/5">
            <img src="/image-hero-desktop.png" alt="Hero Image" className="object-scale-down max-w-md h-auto float-right" />
        </div>

    </section>
)

export default Hero;