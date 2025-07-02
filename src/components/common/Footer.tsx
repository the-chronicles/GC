function Footer() {
  return (
    <>
      {/* CTA Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
            <p className="text-gray-900 text-lg text-center lg:text-left">
              <span className="font-semibold">Do you need a giftcard?</span>{" "}
              With GiftCardSupply, you get to purchase giftcards of all top
              brands
            </p>
            <a
              href="#verify"
              className="rounded-full  bg-[#9fe870] px-3 py-2 md:px-4 md:py-2 text-xs md:text-lg text-black font-medium"
            >
              Verify GiftCard Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-100 border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-sm">
              © GiftCardSupply Limited 2018
            </div>
            <nav className="flex items-center gap-6 text-sm">
              <a href="#verify" className="text-gray-600 hover:text-gray-900">
                Verify gift card
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Shop gift cards
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
