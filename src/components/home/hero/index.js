import ParticleComponent from "../../ui/animation";

const Hero = () => {
  return (
    <section className="h-full">
      <div
        className="lg:h-[120vh] h-full bg-cover bg-center lg:py-20 py-24 relative"
        style={{ backgroundImage: "url('/images/banner.jpg')" }}
      >
        <ParticleComponent />
        <div className="flex flex-col items-center gap-6 px-4 mx-auto lg:flex-row lg:gap-4 max-w-[1440px] sm:px-6 ">
          <div className="flex-col flex-1 px-4 pb-8 space-y-5 lg:pb-0">
            <div className="pt-5">
              {/* <div className="inline-flex items-center my-3 text-base border rounded-full border-primary-purple text-gray-70 0 bg-white/10 sm:text-base lg:text-sm hover:text-blue-600">
                <a className="z-10" href="/">
                  <span className="pr-3 lg:text-base text-sm  sm:px-3 py-0.5 text-black bg-white font-medium leading-5 tracking-wide rounded-full">
                    thedeluxnetwork.com
                  </span>
                </a>
                <div className="z-10 flex items-center mx-2">
                  <span className="text-sm font-medium text-white lg:text-base">
                    About the Network
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-4 h-4 ml-1 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div> */}

              <h1 className="text-2xl font-bold tracking-tight text-white uppercase lg:text-5xl ">
                Discover the Power of $TLN—The Ultimate Web3 Gaming Token on Arbitrum!
              </h1>
            </div>
            <p className="text-sm text-gray-400 lg:text-base">
              Break free from the ordinary and join the revolution. Lux Network isn’t just another token—it’s a movement reshaping the crypto landscape. Built on the power and speed of Arbitrum, we’re leaving the EVM crowd behind and setting new standards for innovation.

Step into a community of trailblazers, visionaries, and creators driving the future of digital assets. This is your chance to lead the pack, embrace the future, and be part of something bigger. The next evolution of crypto starts here. Are you ready?
            </p>
            {/* <button className="px-10 py-1 text-sm font-semibold text-white rounded-2xl bg-primary-purple hover:shadow-md hover:shadow-primary-purple">
              Explore
            </button> */}
          </div>
          <div className="flex-1">
            <div className="flex items-center w-full lg:h-[90vh] h-full">
            <img
              src="/images/hero.webp"
              className="mx-auto"
              height={600}
              width={500}
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
