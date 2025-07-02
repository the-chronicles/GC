import { BadgeCheck, LineChart, Wallet, CreditCard } from "lucide-react";

function Efficient() {
  return (
    <section className="bg-[#0D140E] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-white tracking-tight mb-4">
            An efficient solution
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Shop worry-free with GiftCardSupply's reliable gift card
            verification tool and convenient access to top brand gift cards for
            any occasion.
          </p>
        </div>

        {/* Centered Feature Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-y-16 gap-x-12">
          {/* Feature 1 */}
          <div className="text-left">
            <BadgeCheck className="w-24 h-24 text-white mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-2">
              Choose And Verify Card
            </h3>
            <p className="text-md text-gray-400 max-w-sm">
              Get the perfect gift card every time with GiftCardSupply's
              easy-to-use platform.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-left">
            <LineChart className="w-24 h-24 text-white mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-2">
              Easily Track Purchases
            </h3>
            <p className="text-md text-gray-400 max-w-sm">
              Keep track of your gift card balances with GiftCardSupply's
              reliable tracking system.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-left">
            <Wallet className="w-24 h-24 text-white mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-2">
              No More Lost Gift Cards
            </h3>
            <p className="text-md text-gray-400 max-w-sm">
              Keep all your favorite brands at your fingertips with
              GiftCardSupply's easy-to-use platform.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="text-left">
            <CreditCard className="w-24 h-24 text-white mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-2">
              Trusted And Convenient
            </h3>
            <p className="text-md text-gray-400 max-w-sm">
              Shop with confidence knowing that we offer safe and convenient
              transactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Efficient;
