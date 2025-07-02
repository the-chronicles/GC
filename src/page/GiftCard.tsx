import { Button } from "@/components/ui/button";

function GiftCard() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Gift Cards of Top Brands Available
          </h2>
        </div>

        {/* Gift Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              brand: "Amazon",
              image: "/cards/amazon.png",
              original: "$120.00",
              price: "$99.99",
            },
            {
              brand: "Spotify",
              image: "/cards/spotify.png",
              original: "$120.00",
              price: "$99.99",
            },
            {
              brand: "eBay",
              image: "/cards/ebay.png",
              original: "$120.00",
              price: "$99.99",
            },
            {
              brand: "Google Play",
              image: "/cards/googleplay.png",
              original: "$120.00",
              price: "$99.99",
            },
            {
              brand: "Apple",
              image: "/cards/apple.png",
              original: "$120.00",
              price: "$99.99",
            },
            {
              brand: "Xbox",
              image: "/cards/xbox.png",
              original: "$120.00",
              price: "$99.99",
            },
          ].map(({ brand, image, original, price }) => (
            <div
              key={brand}
              className="flex items-center gap-6  transition-shadow"
            >
              {/* Gift card image */}
              <div className="w-28 h-36 flex-shrink-0">
                <img
                  src={image}
                  alt={`${brand} gift card`}
                  className="w-full h-full object-contain rounded-md"
                />
              </div>

              {/* Details */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900">
                  {brand} Gift Cards
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  ORIGINAL: {original}
                </p>
                <Button className="bg-white border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 py-2 rounded-full font-medium transition-colors">
                  Buy for {price}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GiftCard;
