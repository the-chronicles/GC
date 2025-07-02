function Navbar() {
  return (
    <header className="px-3 md:px-5 py-7 container mx-auto">
      <nav className="flex items-center justify-between bg-white px-3 md:px-5">
        <a href="">
          <div className="flex items-center gap-2">
            <img
              src="https://giftcardsupply.cards/wp-content/uploads/2024/03/Logo-3.svg"
              alt=""
              className="w-16 md:w-20"
            />
            <div className="text-2xl font-medium">GiftCardSupply</div>
          </div>
        </a>

        <div className="flex items-center gap-5 md:gap-10">
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 font-medium text-lg"
          >
            Shop
          </a>
          <a
            href="#verify"
            className="rounded-full  bg-[#9fe870] px-3 py-2 md:px-4 md:py-2 text-xs md:text-lg text-black font-medium"
          >
            Verify GiftCard Now
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
