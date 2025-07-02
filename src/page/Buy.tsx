function Buy() {
  return (
    <section className="bg-[#9fe870] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">
            How to Buy a Gift Card Online
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Step 1 */}
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto">
              <span className="text-[#9fe870] text-2xl font-bold">1</span>
            </div>
            <p className="text-black text-lg leading-relaxed max-w-xs mx-auto">
              Select your card value and quantity, then add to cart (or make it
              a digital gift!).
            </p>
            <div className="">
              <img
                src="/cards/itunes.jpg"
                alt="Amazon Gift Card"
                className="w-full h-28 object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto">
              <span className="text-[#9fe870] text-2xl font-bold">2</span>
            </div>
            <p className="text-black text-lg leading-relaxed max-w-xs mx-auto">
              Pay with your preferred payment method (PayPal, credit/debit card,
              Bitcoin, and more).
            </p>
            <div className="">
              <img
                src="/cards/all.jpg"
                alt="Amazon Gift Card"
                className="w-full h-28 object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto">
              <span className="text-[#9fe870] text-2xl font-bold">3</span>
            </div>
            <p className="text-black text-lg leading-relaxed max-w-xs mx-auto">
              Open the link to your gift card online (delivered digitally within
              1-3 minutes) and enjoy!
            </p>
            <div className="">
              <img
                src="/cards/redeem.jpg"
                alt="Amazon Gift Card"
                className="w-full h-28 object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Buy;
