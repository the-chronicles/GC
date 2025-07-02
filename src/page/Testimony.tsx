import { ChevronLeft, ChevronRight } from "lucide-react";

function Testimony() {
  return (
    <section className="bg-gray-900 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-transparent text-white hover:bg-white/10 rounded-full flex items-center justify-center transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-transparent text-white hover:bg-white/10 rounded-full flex items-center justify-center transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 px-4 sm:px-16">
            {/* Testimonial 1 */}
            <div className="relative">
              <div className="bg-[#9fe870] rounded-2xl p-8 relative text-center">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-[#9fe870] translate-y-full"></div>
                <p className="text-black text-lg leading-relaxed italic">
                  I used GiftCardSupply's verification service to check the
                  balance on an old gift card, and it was incredibly simple and
                  fast. All I had to do was enter the card details, and I
                  received confirmation of the balance within seconds. I plan to
                  use this service again in the future.
                </p>
              </div>
              <div className="mt-8 text-center">
                <h4 className="text-white font-bold text-lg">Emily Chen</h4>
                <p className="text-gray-400 text-sm">Marketing Manager</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="relative">
              <div className="bg-[#9fe870] rounded-2xl p-8 relative text-center">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-[#9fe870] translate-y-full"></div>
                <p className="text-black text-lg leading-relaxed italic">
                  I recently used GiftCardSupply to buy a gift card and was
                  impressed by their service. The purchase process was easy, and
                  I could verify the card balance online before buying. Within
                  minutes, the card was delivered to my email, and I could use
                  it right away. I highly recommend GiftCardSupply to others!
                </p>
              </div>
              <div className="mt-8 text-center">
                <h4 className="text-white font-bold text-lg">Jane Smith</h4>
                <p className="text-gray-400 text-sm">Freelance Writer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Badge Image */}
        <div className="flex justify-center mt-16">
          <img
            src="https://giftcardsupply.cards/wp-content/uploads/2024/03/stamped-badge-svg-3.svg"
            alt="Verified reviews badge"
            className="w-40 h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Testimony;
