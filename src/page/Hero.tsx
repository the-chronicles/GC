function Hero() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 pt-10 pb-0">
        <div className="flex flex-col lg:grid lg:grid-cols-2 items-start gap-12">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold text-gray-900 leading-20]">
              Lightning-fast <br className="hidden lg:block" /> verification
            </h1>

            <p className="text-base md:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
              GiftCardSupply is software that is used to verify, track and test
              the integrity of gift card or credit card information.
            </p>

            <a
              href="#verify"
              className="inline-block rounded-full bg-[#9fe870] px-6 py-3 text-sm md:text-base text-black font-medium hover:bg-[#86c260] transition"
            >
              Verify giftcard now
            </a>
          </div>

          {/* Right Content - Image */}
          <div className="md:w-[840px] mx-auto lg:mx-0">
            <img
              src="https://giftcardsupply.cards/wp-content/uploads/2024/03/image-2.svg"
              alt="Gift cards visual"
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
