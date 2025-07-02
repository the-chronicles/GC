function Hero() {
  return (
    <div className="container mx-auto px-6 pt-8 pb-0">
      <div className="grid lg:grid-cols-2 items-start ">
        {/* Left Content */}
        <div className="space-y-8 pt-8  ">
          <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-20">
            Lightning-fast verification
          </h1>

          <p className="text-lg text-gray-600 max-w-lg leading-tight">
            GiftCardSupply is software that is used to verify, track and test
            the integrity of gift card or credit card information.
          </p>

          <a
            href="#verify"
            className="rounded-full  bg-[#9fe870] px-3 py-2 md:px-4 md:py-2 text-xs md:text-lg text-black font-medium"
          >
            Verify giftcard now
          </a>
        </div>

        {/* Right Content - Hero Image */}
        <div className="relative w-[840px]">
          <img
            src="https://giftcardsupply.cards/wp-content/uploads/2024/03/image-2.svg"
            alt="Gift cards floating illustration showing Amazon, Visa, AMC, Adidas, Walmart, Uber and Nike cards"
            // fill
            className="object-contain object-center"
            // priority
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

